import { onRequestDelete as __api_admin_case_studies__id__ts_onRequestDelete } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\admin\\case-studies\\[id].ts"
import { onRequestPut as __api_admin_case_studies__id__ts_onRequestPut } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\admin\\case-studies\\[id].ts"
import { onRequestDelete as __api_admin_posts__id__ts_onRequestDelete } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\admin\\posts\\[id].ts"
import { onRequestPut as __api_admin_posts__id__ts_onRequestPut } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\admin\\posts\\[id].ts"
import { onRequestGet as __api_admin_case_studies_index_ts_onRequestGet } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\admin\\case-studies\\index.ts"
import { onRequestPost as __api_admin_case_studies_index_ts_onRequestPost } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\admin\\case-studies\\index.ts"
import { onRequestGet as __api_admin_posts_index_ts_onRequestGet } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\admin\\posts\\index.ts"
import { onRequestPost as __api_admin_posts_index_ts_onRequestPost } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\admin\\posts\\index.ts"
import { onRequestPost as __api_admin_verify_ts_onRequestPost } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\admin\\verify.ts"
import { onRequestGet as __api_case_studies__slug__ts_onRequestGet } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\case-studies\\[slug].ts"
import { onRequestGet as __api_posts__slug__ts_onRequestGet } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\posts\\[slug].ts"
import { onRequestGet as __api_case_studies_index_ts_onRequestGet } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\case-studies\\index.ts"
import { onRequestGet as __api_posts_index_ts_onRequestGet } from "D:\\As a Product Developer\\opexlanding-review\\frontend\\functions\\api\\posts\\index.ts"

export const routes = [
    {
      routePath: "/api/admin/case-studies/:id",
      mountPath: "/api/admin/case-studies",
      method: "DELETE",
      middlewares: [],
      modules: [__api_admin_case_studies__id__ts_onRequestDelete],
    },
  {
      routePath: "/api/admin/case-studies/:id",
      mountPath: "/api/admin/case-studies",
      method: "PUT",
      middlewares: [],
      modules: [__api_admin_case_studies__id__ts_onRequestPut],
    },
  {
      routePath: "/api/admin/posts/:id",
      mountPath: "/api/admin/posts",
      method: "DELETE",
      middlewares: [],
      modules: [__api_admin_posts__id__ts_onRequestDelete],
    },
  {
      routePath: "/api/admin/posts/:id",
      mountPath: "/api/admin/posts",
      method: "PUT",
      middlewares: [],
      modules: [__api_admin_posts__id__ts_onRequestPut],
    },
  {
      routePath: "/api/admin/case-studies",
      mountPath: "/api/admin/case-studies",
      method: "GET",
      middlewares: [],
      modules: [__api_admin_case_studies_index_ts_onRequestGet],
    },
  {
      routePath: "/api/admin/case-studies",
      mountPath: "/api/admin/case-studies",
      method: "POST",
      middlewares: [],
      modules: [__api_admin_case_studies_index_ts_onRequestPost],
    },
  {
      routePath: "/api/admin/posts",
      mountPath: "/api/admin/posts",
      method: "GET",
      middlewares: [],
      modules: [__api_admin_posts_index_ts_onRequestGet],
    },
  {
      routePath: "/api/admin/posts",
      mountPath: "/api/admin/posts",
      method: "POST",
      middlewares: [],
      modules: [__api_admin_posts_index_ts_onRequestPost],
    },
  {
      routePath: "/api/admin/verify",
      mountPath: "/api/admin",
      method: "POST",
      middlewares: [],
      modules: [__api_admin_verify_ts_onRequestPost],
    },
  {
      routePath: "/api/case-studies/:slug",
      mountPath: "/api/case-studies",
      method: "GET",
      middlewares: [],
      modules: [__api_case_studies__slug__ts_onRequestGet],
    },
  {
      routePath: "/api/posts/:slug",
      mountPath: "/api/posts",
      method: "GET",
      middlewares: [],
      modules: [__api_posts__slug__ts_onRequestGet],
    },
  {
      routePath: "/api/case-studies",
      mountPath: "/api/case-studies",
      method: "GET",
      middlewares: [],
      modules: [__api_case_studies_index_ts_onRequestGet],
    },
  {
      routePath: "/api/posts",
      mountPath: "/api/posts",
      method: "GET",
      middlewares: [],
      modules: [__api_posts_index_ts_onRequestGet],
    },
  ]