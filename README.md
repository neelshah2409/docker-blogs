# docker-blogs

Daily blog, published to GitHub Pages at `https://neelshah2409.github.io/docker-blogs/`.

Built with [Eleventy](https://www.11ty.dev/). Posts stay as self-contained HTML files
(their own `<style>`/`<script>`, quizzes, flashcards, etc.) — Eleventy only generates the
home page that lists them.

**Publishing method:** the site is pre-built locally into `docs/`, and GitHub Pages serves
that folder directly ("Deploy from a branch" → `main` → `/docs`). There is no GitHub
Actions workflow involved — `docs/` is committed straight into the repo, so nothing needs
a runner or a build step on GitHub's side.

## Adding a new post (do this daily)

1. Drop your new post's HTML file into `posts/`, e.g. `posts/my-new-topic.html`.
   - It can be fully self-contained (own `<style>`/`<script>`), same as
     `posts/ai-agent-docker-sandbox.html`.
   - Point the breadcrumb "Blog" link at `../` so it goes back to the home page:
     `<a href="../">Blog</a>`.

2. Add an entry for it to `src/_data/posts.json`:

   ```json
   {
     "slug": "my-new-topic",
     "title": "My New Topic",
     "date": "2026-08-07",
     "description": "One or two sentences describing the post.",
     "tags": ["tag1", "tag2"],
     "readTime": "10 min",
     "difficulty": "intro"
   }
   ```

   `slug` must match the filename in `posts/` (without `.html`). The home page sorts
   posts by `date` automatically — newest first.

3. Rebuild the site locally:

   ```bash
   npm run build   # regenerates docs/index.html and docs/posts/*.html
   ```

4. Upload the changed files under `docs/` to the GitHub repo (via `git push`, or by
   dragging `docs/index.html` and the new `docs/posts/my-new-topic.html` into GitHub's
   web UI "Upload files" screen, overwriting the existing ones). GitHub Pages picks up
   the change automatically — usually live within a minute, no build step on GitHub's end.

## Local preview

```bash
npm install   # first time only
npm run serve # http://localhost:8080/docker-blogs/
```

## One-time GitHub setup

1. Create a repo named `docker-blogs` under your GitHub account and upload this whole
   project to it (including the pre-built `docs/` folder).
2. In the repo's **Settings → Pages**, set **Source** to **"Deploy from a branch"**,
   branch `main`, folder `/docs`, then Save.
3. The site publishes to `https://neelshah2409.github.io/docker-blogs/` within about a
   minute — no Actions run required.
