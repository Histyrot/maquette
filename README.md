# Taty-Vanille

Site vitrine statique (HTML, Tailwind compile en CSS, JavaScript vanilla) pour la marque Taty-Vanille.

## Structure

- `index.html` : page d'accueil
- `produits.html`, `origine.html`, `qui_sommes_nous.html`, `ou_nous_trouver.html`, `contact.html` : pages principales
- `cgv.html`, `mentions_legales.html`, `politique_de_confidentialite.html` : pages legales
- `404.html` : page d'erreur
- `src/input.css` : entree Tailwind (`@import "tailwindcss"`) + styles custom (header, fade images)
- `assets/css/styles.css` : **genere** (CSS minifie, a committer apres chaque `npm run build`)
- `assets/js/site.js` : source JavaScript (menu, header, Lucide, Lottie)
- `assets/js/site.min.js` : **genere** (minifie par esbuild)

## Build (obligatoire apres modification des classes HTML ou de `site.js`)

Node.js 18+ requis.

```bash
npm install
npm run build
```

Cela regenere `assets/css/styles.css` et `assets/js/site.min.js`. Pense a committer ces fichiers avant de pousser sur GitHub Pages.

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou utiliser un serveur statique local (recommande pour tester les chemins).

Exemple avec VS Code / Cursor : extension Live Server.

## Deploiement GitHub Pages

1. Pousser le projet sur GitHub (inclure `assets/css/styles.css` et `assets/js/site.min.js` a jour).
2. Dans **Settings > Pages**, choisir la branche `main` et le dossier racine `/`.
3. Verifier que `robots.txt` et `sitemap.xml` sont bien accessibles.

Un workflow GitHub Actions (`.github/workflows/build.yml`) execute `npm install` et `npm run build` sur chaque push pour verifier que le build passe.

## Notes

- Lucide et Lottie restent charges via CDN (versions a figer plus tard pour la perf).
- Le formulaire de `contact.html` est en `action="#"` et n'envoie pas encore de donnees vers un service tiers (compatible Pages sans backend).
