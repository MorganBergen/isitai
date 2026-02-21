# Suggested commit messages

Use one of these when committing each change (e.g. `git add <path>` then `git commit -m "..."`).

---

## 1. `src/app/layout.tsx`

**Subject only:**
```
fix(layout): typo and remove redundant comment
```

**With body:**
```
fix(layout): typo and remove redundant comment

- Fix "imilar" -> "similar" in @notes
- Remove redundant JSX comment
- Whitespace in @notes
```

---

## 2. `src/lib/metadata.ts`

**Subject only:**
```
refactor(metadata): call API instead of exiftool in client
```

**With body:**
```
refactor(metadata): call API instead of exiftool in client

- extractMetadata() now POSTs file to /api/metadata instead of
  using @uswriting/exiftool in the browser
- Use shared MetadataResult type from @/types/metadata
- Keeps Node/exiftool/zeroperl out of client bundle
```

---

## 3. `src/app/api/metadata/`

**Subject only:**
```
feat(api): add POST /api/metadata for server-side metadata extraction
```

**With body:**
```
feat(api): add POST /api/metadata for server-side metadata extraction

- Accept multipart file, run exiftool via zeroperl WASM
- Return JSON: { success, metadata, error }
- Uses zeroperl-fetch for WASM (local file or remote fallback)
```

---

## 4. `src/lib/zeroperl-fetch.ts`

**Subject only:**
```
feat(lib): add zeroperl WASM fetcher for server-side exiftool
```

**With body:**
```
feat(lib): add zeroperl WASM fetcher for server-side exiftool

- Load zeroperl-1.0.0.wasm from public/ or remote URL
- Cache buffer, return Response for exiftool fetch option
- Node-only (fs/promises); used by /api/metadata
```

---

## 5. `src/types/`

**Subject only:**
```
chore(types): add shared MetadataResult type
```

**With body:**
```
chore(types): add shared MetadataResult type

- metadata.ts: success, metadata, error?
- Shared by client metadata helper and API response
```

---

## Optional: single commit for the whole feature

If you prefer one commit for the metadata refactor:

```
refactor(metadata): move extraction to server API

- Add POST /api/metadata using exiftool + zeroperl WASM
- Client extractMetadata() now calls API instead of bundling exiftool
- Add zeroperl-fetch (local/remote WASM), shared MetadataResult type
- layout: fix typo and remove redundant comment
```

Then: `git add src/app/layout.tsx src/lib/metadata.ts src/app/api/metadata/ src/lib/zeroperl-fetch.ts src/types/` and `git commit -F COMMIT_MESSAGES.md` (using the “single commit” block as message), or paste that block into the editor.
