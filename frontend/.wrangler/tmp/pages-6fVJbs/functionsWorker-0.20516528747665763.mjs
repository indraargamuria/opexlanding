var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// api/_lib.ts
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}
__name(json, "json");
function err(message, status) {
  return json({ error: message }, status);
}
__name(err, "err");
function isAdmin(request, env) {
  const provided = request.headers.get("X-Admin-Password") || "";
  return provided.length > 0 && provided === env.ADMIN_PASSWORD;
}
__name(isAdmin, "isAdmin");
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 80);
}
__name(slugify, "slugify");

// api/admin/case-studies/[id].ts
var onRequestPut = /* @__PURE__ */ __name(async ({ request, env, params }) => {
  if (!await isAdmin(request, env)) return err("unauthorized", 401);
  const id = Number(params.id);
  const body = await request.json().catch(() => null);
  if (!body) return err("body required", 400);
  const fields = [];
  const vals = [];
  for (const [k, v] of Object.entries({
    client_name: body.client_name,
    industry: body.industry,
    summary: body.summary,
    challenge: body.challenge,
    solution: body.solution,
    results_md: body.results_md,
    cover_image: body.cover_image
  })) {
    if (v !== void 0) {
      fields.push(`${k} = ?`);
      vals.push(v);
    }
  }
  if (body.metrics !== void 0) {
    fields.push("metrics = ?");
    vals.push(typeof body.metrics === "string" ? body.metrics : JSON.stringify(body.metrics));
  }
  if (body.status) {
    fields.push("status = ?");
    vals.push(body.status);
    if (body.status === "published") fields.push("published_at = datetime('now')");
  }
  if (!fields.length) return err("nothing to update", 400);
  fields.push("updated_at = datetime('now')");
  vals.push(id);
  const { meta } = await env.DB.prepare(`UPDATE case_studies SET ${fields.join(", ")} WHERE id = ?`).bind(...vals).run();
  return meta.changes ? json({ ok: true }) : err("not found", 404);
}, "onRequestPut");
var onRequestDelete = /* @__PURE__ */ __name(async ({ env, params, request }) => {
  if (!await isAdmin(request, env)) return err("unauthorized", 401);
  const { meta } = await env.DB.prepare("DELETE FROM case_studies WHERE id = ?").bind(Number(params.id)).run();
  return meta.changes ? json({ ok: true }) : err("not found", 404);
}, "onRequestDelete");

// api/admin/posts/[id].ts
var onRequestPut2 = /* @__PURE__ */ __name(async ({ request, env, params }) => {
  if (!await isAdmin(request, env)) return err("unauthorized", 401);
  const id = Number(params.id);
  const body = await request.json().catch(() => null);
  if (!body) return err("body required", 400);
  const tags = Array.isArray(body.tags) ? body.tags.join(",") : body.tags ?? void 0;
  const fields = [];
  const vals = [];
  for (const [k, v] of Object.entries({ title: body.title, excerpt: body.excerpt, body_md: body.body_md, cover_image: body.cover_image, author_name: body.author_name, author_role: body.author_role })) {
    if (v !== void 0) {
      fields.push(`${k} = ?`);
      vals.push(v);
    }
  }
  if (tags !== void 0) {
    fields.push("tags = ?");
    vals.push(tags);
  }
  if (body.status) {
    fields.push("status = ?");
    vals.push(body.status);
    if (body.status === "published") {
      fields.push("published_at = datetime('now')");
    }
  }
  if (!fields.length) return err("nothing to update", 400);
  fields.push("updated_at = datetime('now')");
  vals.push(id);
  try {
    const { meta } = await env.DB.prepare(`UPDATE posts SET ${fields.join(", ")} WHERE id = ?`).bind(...vals).run();
    return meta.changes ? json({ ok: true }) : err("not found", 404);
  } catch (e) {
    if (String(e.message || "").includes("UNIQUE")) return err("slug conflict", 409);
    return err("failed", 500);
  }
}, "onRequestPut");
var onRequestDelete2 = /* @__PURE__ */ __name(async ({ env, params, request }) => {
  if (!await isAdmin(request, env)) return err("unauthorized", 401);
  const id = Number(params.id);
  const { meta } = await env.DB.prepare("DELETE FROM posts WHERE id = ?").bind(id).run();
  return meta.changes ? json({ ok: true }) : err("not found", 404);
}, "onRequestDelete");

// api/admin/case-studies/index.ts
var onRequestGet = /* @__PURE__ */ __name(async ({ env, request }) => {
  if (!await isAdmin(request, env)) return err("unauthorized", 401);
  const { results } = await env.DB.prepare(
    `SELECT id, slug, client_name, industry, status, published_at FROM case_studies ORDER BY created_at DESC`
  ).all();
  return json(results || []);
}, "onRequestGet");
var onRequestPost = /* @__PURE__ */ __name(async ({ request, env }) => {
  if (!await isAdmin(request, env)) return err("unauthorized", 401);
  const body = await request.json().catch(() => null);
  if (!body?.client_name) return err("client_name required", 400);
  const slug = body.slug || slugify(body.client_name);
  const metrics = typeof body.metrics === "string" ? body.metrics : JSON.stringify(body.metrics || []);
  try {
    const { meta } = await env.DB.prepare(
      `INSERT INTO case_studies (slug, client_name, industry, summary, challenge, solution, results_md, metrics, cover_image, status, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
    ).bind(
      slug,
      body.client_name,
      body.industry || "",
      body.summary || "",
      body.challenge || "",
      body.solution || "",
      body.results_md || "",
      metrics,
      body.cover_image || "",
      body.status || "draft"
    ).run();
    return json({ id: meta.last_row_id, slug }, 201);
  } catch (e) {
    if (String(e.message || "").includes("UNIQUE")) return err("slug already exists", 409);
    return err("failed", 500);
  }
}, "onRequestPost");

// api/admin/posts/index.ts
var onRequestGet2 = /* @__PURE__ */ __name(async ({ env, request }) => {
  if (!await isAdmin(request, env)) return err("unauthorized", 401);
  try {
    const { results } = await env.DB.prepare(
      `SELECT id, slug, title, excerpt, tags, author_name, status, published_at, created_at
       FROM posts ORDER BY created_at DESC`
    ).all();
    return json(results || []);
  } catch {
    return err("failed", 500);
  }
}, "onRequestGet");
var onRequestPost2 = /* @__PURE__ */ __name(async ({ request, env }) => {
  if (!await isAdmin(request, env)) return err("unauthorized", 401);
  const body = await request.json().catch(() => null);
  if (!body?.title) return err("title required", 400);
  const slug = body.slug || slugify(body.title);
  const tags = Array.isArray(body.tags) ? body.tags.join(",") : body.tags || "";
  try {
    const { meta } = await env.DB.prepare(
      `INSERT INTO posts (slug, title, excerpt, body_md, cover_image, tags, author_name, author_role, status, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
    ).bind(
      slug,
      body.title,
      body.excerpt || "",
      body.body_md || "",
      body.cover_image || "",
      tags,
      body.author_name || "OpexCG Team",
      body.author_role || "",
      body.status || "draft"
    ).run();
    return json({ id: meta.last_row_id, slug }, 201);
  } catch (e) {
    if (String(e.message || "").includes("UNIQUE")) return err("slug already exists", 409);
    return err("failed to create", 500);
  }
}, "onRequestPost");

// api/admin/verify.ts
var onRequestPost3 = /* @__PURE__ */ __name(async ({ request, env }) => {
  const provided = request.headers.get("X-Admin-Password") || "";
  const ok = provided === env.ADMIN_PASSWORD;
  return ok ? json({ valid: true }) : json({ error: "unauthorized" }, 401);
}, "onRequestPost");

// api/case-studies/[slug].ts
var onRequestGet3 = /* @__PURE__ */ __name(async ({ env, params }) => {
  const slug = String(params.slug || "");
  try {
    const row = await env.DB.prepare(
      `SELECT id, slug, client_name, industry, summary, challenge, solution,
              results_md, metrics, cover_image, published_at
       FROM case_studies WHERE slug = ? AND status = 'published'`
    ).bind(slug).first();
    if (!row) return err("not found", 404);
    return json(row);
  } catch {
    return err("failed to fetch case study", 500);
  }
}, "onRequestGet");

// api/posts/[slug].ts
var onRequestGet4 = /* @__PURE__ */ __name(async ({ env, params }) => {
  const slug = String(params.slug || "");
  try {
    const row = await env.DB.prepare(
      `SELECT id, slug, title, excerpt, body_md, cover_image, tags, author_name, author_role, published_at
       FROM posts WHERE slug = ? AND status = 'published'`
    ).bind(slug).first();
    if (!row) return err("not found", 404);
    return json(row);
  } catch {
    return err("failed to fetch post", 500);
  }
}, "onRequestGet");

// api/case-studies/index.ts
var onRequestGet5 = /* @__PURE__ */ __name(async ({ env }) => {
  try {
    const { results } = await env.DB.prepare(
      `SELECT id, slug, client_name, industry, summary, metrics, published_at
       FROM case_studies WHERE status = 'published'
       ORDER BY published_at DESC`
    ).all();
    return json(results || []);
  } catch {
    return err("failed to list case studies", 500);
  }
}, "onRequestGet");

// api/posts/index.ts
var onRequestGet6 = /* @__PURE__ */ __name(async ({ env }) => {
  try {
    const { results } = await env.DB.prepare(
      `SELECT id, slug, title, excerpt, tags, author_name, author_role, published_at
       FROM posts WHERE status = 'published'
       ORDER BY published_at DESC`
    ).all();
    return json(results || []);
  } catch {
    return err("failed to list posts", 500);
  }
}, "onRequestGet");

// ../.wrangler/tmp/pages-6fVJbs/functionsRoutes-0.824402648914794.mjs
var routes = [
  {
    routePath: "/api/admin/case-studies/:id",
    mountPath: "/api/admin/case-studies",
    method: "DELETE",
    middlewares: [],
    modules: [onRequestDelete]
  },
  {
    routePath: "/api/admin/case-studies/:id",
    mountPath: "/api/admin/case-studies",
    method: "PUT",
    middlewares: [],
    modules: [onRequestPut]
  },
  {
    routePath: "/api/admin/posts/:id",
    mountPath: "/api/admin/posts",
    method: "DELETE",
    middlewares: [],
    modules: [onRequestDelete2]
  },
  {
    routePath: "/api/admin/posts/:id",
    mountPath: "/api/admin/posts",
    method: "PUT",
    middlewares: [],
    modules: [onRequestPut2]
  },
  {
    routePath: "/api/admin/case-studies",
    mountPath: "/api/admin/case-studies",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet]
  },
  {
    routePath: "/api/admin/case-studies",
    mountPath: "/api/admin/case-studies",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost]
  },
  {
    routePath: "/api/admin/posts",
    mountPath: "/api/admin/posts",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet2]
  },
  {
    routePath: "/api/admin/posts",
    mountPath: "/api/admin/posts",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost2]
  },
  {
    routePath: "/api/admin/verify",
    mountPath: "/api/admin",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost3]
  },
  {
    routePath: "/api/case-studies/:slug",
    mountPath: "/api/case-studies",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet3]
  },
  {
    routePath: "/api/posts/:slug",
    mountPath: "/api/posts",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet4]
  },
  {
    routePath: "/api/case-studies",
    mountPath: "/api/case-studies",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet5]
  },
  {
    routePath: "/api/posts",
    mountPath: "/api/posts",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet6]
  }
];

// ../node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");

// ../node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// ../.wrangler/tmp/bundle-GFrZnT/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;

// ../node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// ../.wrangler/tmp/bundle-GFrZnT/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=functionsWorker-0.20516528747665763.mjs.map
