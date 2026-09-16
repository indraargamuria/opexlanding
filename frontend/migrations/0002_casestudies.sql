CREATE TABLE IF NOT EXISTS case_studies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  client_name TEXT NOT NULL,
  industry TEXT NOT NULL DEFAULT '',
  summary TEXT NOT NULL DEFAULT '',
  challenge TEXT NOT NULL DEFAULT '',
  solution TEXT NOT NULL DEFAULT '',
  results_md TEXT NOT NULL DEFAULT '',
  metrics TEXT NOT NULL DEFAULT '[]',
  cover_image TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','published')),
  published_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
