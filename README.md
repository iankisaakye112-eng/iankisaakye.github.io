# Group 4 — Beyond the Classroom

## Open the journal

Extract the entire ZIP. Open the folder containing `index.html` and double-click that file. Keep the four other HTML files and the asset folders alongside it. All five journals work locally. No package installation, compilation, account or internet connection is needed to read them.

For an HTTP preview with Python installed, open a terminal in that same folder, run `python -m http.server 8000`, and visit `http://localhost:8000/`. Press Ctrl+C to stop.

## Edit the site

The homepage cards and the profile identity panels contain the official names and registration numbers. Update both if the group approves a correction. Sumaiya's existing page address is `sumayiya.html` to preserve links.

The supplied portraits, product photographs, drawings and catering photographs are optimized WebP files in `images/photos/`. To replace a photograph, update its local file or change every corresponding image source and full-size link. Edit its caption and alternative text as well. The SVG illustrations in `images/` remain part of the original visual identity.

Edit the content directly in each HTML file. Styling is in `css/collective.css`, `css/profiles.css` and `css/refinements.css`. The timeline and community notes use native HTML details/summary elements. Replace pending portfolio or community entries only with verified details and material approved for publication.

Sumaiya's fragrance form runs locally through `js/enquiry.js`. It validates the fields and previews the message. It has no delivery service or mailing list. Before enabling real submissions, connect an approved endpoint, validate inputs on the server and update the displayed privacy and delivery information. The other three profiles have no contact forms.

## Publish with Netlify

1. Sign in to the Netlify account that should own this site. Open [Netlify Drop](https://app.netlify.com/drop).
2. Drag the extracted folder **containing index.html** into the upload area. This folder is the finished site. No build command is required.
3. Once Netlify marks the production deployment as published, open its assigned URL in a signed-out browser. If your team restricts visibility, set the site's access to public first.
4. Open each of the four journals, follow the Home links, and check illustrations and controls on a phone and a desktop. Share the confirmed production URL.
5. To update, edit your local source, preview it, then open the **same project's Deploys** area and drag in the complete updated folder. Check the published version at the existing address.

For a site initially published by anonymous CLI deployment, use the private claim link from the deployment within one hour to retain ownership, then use the same project's Deploys area for updates. See [Netlify's deployment guide](https://docs.netlify.com/deploy/create-deploys/).
