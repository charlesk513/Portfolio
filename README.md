# KABUNGA CHARLES — Portfolio

## Folder structure

```text
charles_kabunga_portfolio/
├── index.html
├── style.css
├── script.js
└── images/
    ├── profile.jpg
    ├── certificate1.jpg
    ├── certificate2.jpg
    ├── certificate3.jpg
    ├── certificate4.jpg
    ├── certificate5.jpg
    └── CV.pdf
```

## Add your images

Put your profile photo at:

`images/profile.jpg`

Put the five certificate images at:

- `images/certificate1.jpg` — Foundation of Back End Development
- `images/certificate2.jpg` — Introduction to Cybersecurity
- `images/certificate3.jpg` — Introduction to Blockchain
- `images/certificate4.jpg` — Python Programming
- `images/certificate5.jpg` — Network Defense

You can rename the files, but then update the corresponding `src="images/..."` values in `index.html`.

## Add your CV

Put your CV/resume PDF at:

`images/CV.pdf`

The "Download CV" button in the hero section points to this file and uses the HTML `download` attribute, so clicking it downloads the PDF directly (named `Kabunga_Charles_CV.pdf`) instead of opening it in a new tab. This works reliably once the site is served from a real host (GitHub Pages, Netlify, etc.) — some browsers behave inconsistently with `download` when opening `index.html` straight from disk.

## Project demo links

CampusNova currently uses a placeholder URL so the button is ready without pretending the project is deployed. Search `index.html` for `https://example.com/campusnova-demo` and replace it once you have a real demo/video link.

Quick Marble & Granite is marked as **Deployed (Firebase)** and complete — search for `https://example.com/quick-marble-demo` and replace it with your real live app link.

Standard Hill is already linked to:

https://standardhill.netlify.app

## Social links

GitHub:
https://github.com/charlesk513

LinkedIn:
https://www.linkedin.com/in/charles-kabunga-354250397

## Run locally

Open `index.html` in a browser, or use a simple local server:

```bash
python3 -m http.server 5500
```

Then visit:

`http://localhost:5500`

The site is pure HTML, CSS and JavaScript, so no npm installation is required.
