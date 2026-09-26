# Keagan Price public website — GitHub Pages export

This folder contains only the public website: Keagan Price's digital business card, the My Companies overview, and the C.C. Services detail page. It includes the portrait, company logo, original QR fallback, CSS, JavaScript, and contact file. No private Command Center code, People records, calendar entries, or database export is included.

## Deploy

1. Create a GitHub repository.
2. Upload **the contents of this folder** to the repository root, including `.nojekyll`.
3. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/(root)`, and save.
4. Use the URL shown by GitHub. Relative paths support either a user site or a repository site.

No build step is required.

The public **Request a Meeting** button links to the existing live booking page at `https://keagan-daily-command-center.keaganprice12.chatgpt.site/book`. That service remains separate from GitHub Pages. The Share button and JavaScript-generated Save Contact download use the new page URL automatically. The QR dialog requests a QR image for the current URL from `api.qrserver.com`; the bundled fallback image links to the original card if that service is unavailable.
