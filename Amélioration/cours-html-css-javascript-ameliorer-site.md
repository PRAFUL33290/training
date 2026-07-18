# Cours complet HTML, CSS et JavaScript pour améliorer un site web

> Version : 18 juillet 2026  
> Objectif : apprendre à structurer, designer et rendre interactif un site web professionnel, avec des situations concrètes applicables à un site vitrine, une landing page ou un projet comme ChronoSite.

---

## Sommaire

1. Comprendre le rôle de HTML, CSS et JavaScript
2. Organisation d’un projet web propre
3. HTML : construire la structure du site
4. HTML sémantique : SEO, accessibilité et lisibilité
5. Les balises essentielles HTML
6. Les images, vidéos, liens et boutons
7. Les formulaires HTML
8. Problématiques HTML concrètes
9. CSS : comprendre la mise en forme
10. Les sélecteurs CSS
11. Couleurs, typographie, espacements
12. Box model : margin, padding, border
13. Display : block, inline, inline-block
14. Flexbox
15. CSS Grid
16. Responsive design
17. Variables CSS
18. Effets modernes : transitions, animations, ombres, gradients
19. Positionnement CSS
20. Propriétés CSS importantes à connaître
21. Problématiques CSS concrètes
22. JavaScript : rendre le site vivant
23. Variables, conditions, fonctions et tableaux
24. Manipuler le DOM
25. Événements JavaScript
26. Menu mobile
27. Formulaire interactif
28. FAQ accordéon
29. Mode sombre
30. Sauvegarde avec localStorage
31. Fetch API : préparer un site dynamique
32. Problématiques JavaScript concrètes
33. Mini-projet complet : améliorer une landing page
34. Checklist finale pour améliorer ton site
35. Exercices pratiques

---

# 1. Comprendre le rôle de HTML, CSS et JavaScript

Un site web fonctionne souvent avec 3 grandes couches :

| Technologie | Rôle | Exemple concret |
|---|---|---|
| HTML | Structure | titres, paragraphes, sections, boutons, formulaire |
| CSS | Apparence | couleurs, tailles, animations, responsive |
| JavaScript | Interaction | menu mobile, formulaire dynamique, FAQ, sliders |

## Image simple

Imagine une maison :

- HTML = les murs, les pièces, les portes.
- CSS = la peinture, la décoration, les lumières.
- JavaScript = l’électricité, les interrupteurs, les portes automatiques.

## Important : Java ou JavaScript ?

Pour améliorer un site web côté navigateur, le langage utilisé est **JavaScript**, pas Java.

- **JavaScript** : utilisé dans les pages web pour créer des interactions.
- **Java** : langage différent, souvent utilisé pour des applications, Android, serveurs, logiciels métiers.

Dans ce cours, “JAVA” est donc traité comme **JavaScript**, parce que c’est ce qui va t’aider directement à améliorer ton site.

---

# 2. Organisation d’un projet web propre

Avant de coder, il faut bien ranger les fichiers.

## Structure conseillée

```txt
mon-site/
│
├── index.html
├── about.html
├── contact.html
│
├── assets/
│   ├── images/
│   │   ├── hero.webp
│   │   └── logo.svg
│   │
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       └── script.js
```

## Pourquoi c’est important ?

Quand un site grandit, si tout est mélangé, tu perds du temps.

Mauvaise organisation :

```txt
index.html
image1.png
test.html
style2.css
ancien-style.css
script-final-vrai.js
logo-new-final-final.png
```

Bonne organisation :

```txt
assets/images/
assets/css/
assets/js/
```

## Situation concrète

Tu fais un site pour un client avec :

- une page d’accueil,
- une page services,
- une page tarifs,
- une page contact.

Si les images, CSS et scripts sont bien rangés, tu peux modifier le site rapidement sans casser tout le projet.

---

# 3. HTML : construire la structure du site

HTML signifie **HyperText Markup Language**.  
C’est le langage de structure d’une page web.

## Structure minimum d’une page HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ChronoSite - Création de sites web rapides</title>
  <meta name="description" content="Création de sites web professionnels rapides et abordables à Parempuyre et Bordeaux Métropole.">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

  <h1>Votre site web professionnel livré rapidement</h1>
  <p>Je crée des sites modernes, rapides et adaptés aux petites entreprises.</p>

  <script src="assets/js/script.js"></script>
</body>
</html>
```

## Explication

```html
<!DOCTYPE html>
```

Indique au navigateur que la page utilise HTML moderne.

```html
<html lang="fr">
```

Indique que la langue principale est le français.  
C’est bon pour l’accessibilité et le SEO.

```html
<meta charset="UTF-8">
```

Permet d’afficher correctement les accents : é, è, à, ç.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Indispensable pour que le site soit responsive sur mobile.

```html
<title>
```

Titre visible dans l’onglet du navigateur et utilisé par Google.

```html
<meta name="description">
```

Résumé de la page pour les moteurs de recherche.

---

# 4. HTML sémantique : SEO, accessibilité et lisibilité

Le HTML sémantique consiste à utiliser les bonnes balises pour le bon rôle.

## Mauvais HTML

```html
<div class="titre">Bienvenue</div>
<div class="menu">Accueil - Services - Contact</div>
<div class="bloc">Je crée des sites web.</div>
```

Le navigateur voit seulement des `div`.  
Il ne comprend pas vraiment la structure.

## Bon HTML

```html
<header>
  <nav>
    <a href="index.html">Accueil</a>
    <a href="services.html">Services</a>
    <a href="contact.html">Contact</a>
  </nav>
</header>

<main>
  <section>
    <h1>Bienvenue</h1>
    <p>Je crée des sites web professionnels.</p>
  </section>
</main>

<footer>
  <p>© 2026 ChronoSite</p>
</footer>
```

Là, la page est claire :

- `header` = haut du site,
- `nav` = navigation,
- `main` = contenu principal,
- `section` = bloc de contenu,
- `footer` = bas de page.

## Balises sémantiques importantes

| Balise | Utilisation |
|---|---|
| `header` | En-tête du site ou d’une section |
| `nav` | Menu de navigation |
| `main` | Contenu principal de la page |
| `section` | Section thématique |
| `article` | Contenu indépendant : article, carte, actualité |
| `aside` | Contenu secondaire |
| `footer` | Pied de page |
| `figure` | Image avec légende |
| `figcaption` | Légende d’une image |

## Situation concrète

Tu veux améliorer ton site pour Google.

Avant :

```html
<div class="titre">Création de site web</div>
```

Après :

```html
<h1>Création de site web à Parempuyre et Bordeaux Métropole</h1>
```

La deuxième version est meilleure, car Google et les lecteurs d’écran comprennent que c’est le titre principal.

---

# 5. Les balises essentielles HTML

## Titres

```html
<h1>Titre principal</h1>
<h2>Sous-titre important</h2>
<h3>Titre de bloc</h3>
<h4>Titre secondaire</h4>
```

Règle importante :

- un seul `h1` principal par page,
- plusieurs `h2` pour organiser les grandes parties,
- des `h3` à l’intérieur des `h2`.

## Paragraphes

```html
<p>Je crée des sites web modernes, rapides et adaptés aux indépendants.</p>
```

## Listes

Liste non ordonnée :

```html
<ul>
  <li>Site vitrine</li>
  <li>Landing page</li>
  <li>Maintenance</li>
</ul>
```

Liste ordonnée :

```html
<ol>
  <li>Choix du modèle</li>
  <li>Ajout des contenus</li>
  <li>Validation client</li>
  <li>Mise en ligne</li>
</ol>
```

## Liens

```html
<a href="contact.html">Me contacter</a>
```

Lien externe :

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Voir le site
</a>
```

## Boutons

```html
<button type="button">Ouvrir le menu</button>
```

## Important : lien ou bouton ?

| Élément | Quand l’utiliser |
|---|---|
| `a` | Pour aller vers une autre page ou une autre section |
| `button` | Pour déclencher une action JavaScript |

Exemple :

```html
<a href="#contact">Demander un devis</a>
<button type="button" id="open-menu">Menu</button>
```

---

# 6. Images, vidéos, liens et boutons

## Image simple

```html
<img src="assets/images/hero.webp" alt="Ordinateur affichant une maquette de site web moderne">
```

## Le `alt`

Le texte alternatif sert à :

- expliquer l’image aux lecteurs d’écran,
- aider si l’image ne charge pas,
- améliorer la compréhension du contenu.

Mauvais :

```html
<img src="image.webp" alt="image">
```

Bon :

```html
<img src="image.webp" alt="Mockup d’un site web professionnel sur ordinateur portable">
```

## Image décorative

Si l’image est purement décorative :

```html
<img src="assets/images/shape.svg" alt="">
```

## Image responsive

HTML :

```html
<img class="hero-img" src="assets/images/hero.webp" alt="Maquette du site ChronoSite">
```

CSS :

```css
.hero-img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

## Vidéo

```html
<video controls width="800">
  <source src="assets/videos/presentation.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la vidéo.
</video>
```

## Problématique concrète

Tu ajoutes une image énorme sur ton site et la page devient lente.

Solution :

- utiliser `.webp`,
- réduire la taille de l’image,
- ajouter `max-width: 100%`,
- éviter de charger une image de 4000 px si elle s’affiche en 600 px.

---

# 7. Les formulaires HTML

Un formulaire sert à récupérer des informations.

## Formulaire de contact simple

```html
<form action="#" method="post">
  <div>
    <label for="name">Nom</label>
    <input type="text" id="name" name="name" required>
  </div>

  <div>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>

  <div>
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>

  <button type="submit">Envoyer</button>
</form>
```

## Types d’input utiles

| Type | Utilisation |
|---|---|
| `text` | Texte simple |
| `email` | Adresse email |
| `tel` | Téléphone |
| `number` | Nombre |
| `date` | Date |
| `checkbox` | Case à cocher |
| `radio` | Choix unique |
| `file` | Envoi de fichier |
| `password` | Mot de passe |

## Exemple pour un devis de site web

```html
<form class="quote-form">
  <label for="project">Type de projet</label>
  <select id="project" name="project" required>
    <option value="">Choisir une option</option>
    <option value="site-vitrine">Site vitrine</option>
    <option value="landing-page">Landing page</option>
    <option value="maintenance">Maintenance</option>
  </select>

  <label for="budget">Budget estimé</label>
  <input type="number" id="budget" name="budget" min="100" step="50">

  <label for="deadline">Date souhaitée</label>
  <input type="date" id="deadline" name="deadline">

  <button type="submit">Demander un devis</button>
</form>
```

## Bonne pratique

Toujours associer un `label` à chaque champ.

Mauvais :

```html
<input type="email" placeholder="Email">
```

Bon :

```html
<label for="email">Email</label>
<input type="email" id="email" name="email" placeholder="ton@email.fr">
```

---

# 8. Problématiques HTML concrètes

## Problème 1 : mon site n’est pas clair pour Google

### Symptôme

Tu as beaucoup de `div`, mais peu de vrais titres.

### Mauvais exemple

```html
<div class="big-title">Mes services</div>
<div class="service-title">Site vitrine</div>
```

### Correction

```html
<section aria-labelledby="services-title">
  <h2 id="services-title">Mes services</h2>

  <article>
    <h3>Site vitrine</h3>
    <p>Un site simple pour présenter ton activité.</p>
  </article>
</section>
```

## Problème 2 : le formulaire est difficile à utiliser

### Mauvais exemple

```html
<input placeholder="Nom">
<input placeholder="Email">
<textarea placeholder="Message"></textarea>
```

### Correction

```html
<label for="name">Nom</label>
<input id="name" name="name" type="text" required>

<label for="email">Email</label>
<input id="email" name="email" type="email" required>

<label for="message">Message</label>
<textarea id="message" name="message" required></textarea>
```

## Problème 3 : trop de titres `h1`

### Mauvais exemple

```html
<h1>Accueil</h1>
<h1>Services</h1>
<h1>Contact</h1>
```

### Correction

```html
<h1>Création de sites web rapides et professionnels</h1>
<h2>Services</h2>
<h2>Contact</h2>
```

---

# 9. CSS : comprendre la mise en forme

CSS signifie **Cascading Style Sheets**.  
Il sert à styliser le HTML.

## Exemple simple

HTML :

```html
<h1 class="hero-title">Votre site web livré rapidement</h1>
```

CSS :

```css
.hero-title {
  color: #7c3aed;
  font-size: 48px;
  line-height: 1.1;
}
```

## Où écrire le CSS ?

### 1. CSS dans le HTML

```html
<h1 style="color: red;">Titre</h1>
```

À éviter pour un vrai projet.

### 2. CSS dans une balise `style`

```html
<style>
  h1 {
    color: red;
  }
</style>
```

Possible pour tester, mais pas idéal.

### 3. CSS dans un fichier externe

```html
<link rel="stylesheet" href="assets/css/style.css">
```

C’est la meilleure méthode.

---

# 10. Les sélecteurs CSS

## Sélecteur de balise

```css
h1 {
  color: #111827;
}
```

S’applique à tous les `h1`.

## Sélecteur de classe

```css
.btn {
  padding: 12px 20px;
  border-radius: 999px;
}
```

HTML :

```html
<a class="btn" href="#contact">Demander un devis</a>
```

## Sélecteur d’ID

```css
#contact {
  padding: 80px 0;
}
```

HTML :

```html
<section id="contact"></section>
```

À utiliser avec modération. Pour le style, préfère les classes.

## Sélecteur descendant

```css
.hero p {
  color: #4b5563;
}
```

Cible les paragraphes à l’intérieur de `.hero`.

## Sélecteur direct

```css
.card > h3 {
  margin-bottom: 12px;
}
```

Cible uniquement le `h3` directement enfant de `.card`.

## Pseudo-classes

```css
.btn:hover {
  transform: translateY(-2px);
}
```

```css
input:focus {
  outline: 2px solid #7c3aed;
}
```

## Pseudo-éléments

```css
.hero-title::after {
  content: "";
  display: block;
  width: 80px;
  height: 4px;
  background: #7c3aed;
  margin-top: 16px;
}
```

---

# 11. Couleurs, typographie, espacements

## Couleurs

```css
:root {
  --color-primary: #7c3aed;
  --color-secondary: #2563eb;
  --color-bg: #f8fafc;
  --color-text: #111827;
  --color-muted: #6b7280;
}
```

Utilisation :

```css
body {
  background: var(--color-bg);
  color: var(--color-text);
}
```

## Typographie

```css
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
```

## Titres

```css
h1,
h2,
h3 {
  line-height: 1.1;
  letter-spacing: -0.03em;
}
```

## Espacements

```css
.section {
  padding: 96px 24px;
}
```

## Largeur de contenu

```css
.container {
  width: min(1120px, calc(100% - 48px));
  margin-inline: auto;
}
```

Cette ligne veut dire :

- largeur maximum : 1120 px,
- sinon largeur de l’écran moins 48 px,
- centré automatiquement.

---

# 12. Box model : margin, padding, border

Chaque élément HTML est une boîte.

```txt
margin
  border
    padding
      content
```

## Padding

Espace intérieur.

```css
.card {
  padding: 24px;
}
```

## Margin

Espace extérieur.

```css
.card {
  margin-bottom: 32px;
}
```

## Border

Bordure.

```css
.card {
  border: 1px solid #e5e7eb;
}
```

## Border-radius

Coins arrondis.

```css
.card {
  border-radius: 24px;
}
```

## Box-sizing

Très important :

```css
* {
  box-sizing: border-box;
}
```

Cela rend les tailles plus faciles à gérer.

---

# 13. Display : block, inline, inline-block

## Block

Un élément block prend toute la largeur disponible.

Exemples :

- `div`
- `section`
- `p`
- `h1`

```css
section {
  display: block;
}
```

## Inline

Un élément inline prend seulement la place de son contenu.

Exemples :

- `span`
- `a`
- `strong`

## Inline-block

Prend la taille du contenu, mais accepte largeur, hauteur, padding.

```css
.tag {
  display: inline-block;
  padding: 6px 12px;
}
```

---

# 14. Flexbox

Flexbox sert à aligner des éléments sur un axe.

## Exemple : aligner logo et menu

HTML :

```html
<header class="site-header">
  <a class="logo" href="#">ChronoSite</a>

  <nav class="nav">
    <a href="#services">Services</a>
    <a href="#pricing">Tarifs</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
```

CSS :

```css
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
}
```

## Propriétés principales Flexbox

| Propriété | Rôle |
|---|---|
| `display: flex` | Active Flexbox |
| `flex-direction` | Direction des éléments |
| `justify-content` | Alignement horizontal |
| `align-items` | Alignement vertical |
| `gap` | Espace entre les éléments |
| `flex-wrap` | Permet le retour à la ligne |
| `flex` | Contrôle la largeur flexible d’un enfant |

## Exemples

```css
.cards {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
```

```css
.card {
  flex: 1 1 280px;
}
```

Cela signifie :

- la carte peut grandir,
- elle peut rétrécir,
- sa base idéale est 280 px.

## Situation concrète

Tu as 3 cartes de services.

```html
<div class="service-grid">
  <article class="service-card">Site vitrine</article>
  <article class="service-card">Landing page</article>
  <article class="service-card">Maintenance</article>
</div>
```

```css
.service-grid {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.service-card {
  flex: 1 1 260px;
}
```

Résultat :

- sur grand écran : 3 cartes côte à côte,
- sur petit écran : les cartes passent à la ligne.

---

# 15. CSS Grid

CSS Grid sert à créer des grilles en lignes et colonnes.

## Exemple simple

```css
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

## Responsive avec Grid

```css
.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}
```

C’est très puissant.

Cette ligne signifie :

- crée autant de colonnes que possible,
- chaque colonne fait minimum 260 px,
- sinon elle prend une fraction de l’espace.

## Exemple concret

HTML :

```html
<section class="services">
  <article class="card">
    <h3>Site vitrine</h3>
    <p>Idéal pour présenter ton activité.</p>
  </article>

  <article class="card">
    <h3>Landing page</h3>
    <p>Parfait pour vendre une offre précise.</p>
  </article>

  <article class="card">
    <h3>Maintenance</h3>
    <p>Pour garder ton site propre et sécurisé.</p>
  </article>
</section>
```

CSS :

```css
.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.card {
  padding: 24px;
  border-radius: 24px;
  background: white;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
}
```

## Flexbox ou Grid ?

| Besoin | Meilleur choix |
|---|---|
| Aligner un menu | Flexbox |
| Centrer un bouton | Flexbox |
| Faire une grille de cartes | Grid |
| Faire une mise en page complexe | Grid |
| Aligner verticalement | Flexbox |
| Créer un layout 2 colonnes | Grid ou Flexbox |

Mon avis :  
Pour un site moderne, utilise souvent **Grid pour les grandes structures** et **Flexbox pour aligner le contenu à l’intérieur**.

---

# 16. Responsive design

Un site responsive s’adapte aux écrans :

- ordinateur,
- tablette,
- smartphone.

## Règle de base

Toujours mettre dans le HTML :

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Exemple mobile first

On commence par le mobile, puis on améliore pour les grands écrans.

```css
.hero {
  display: grid;
  gap: 32px;
  padding: 64px 24px;
}

.hero-title {
  font-size: 40px;
}

@media (min-width: 768px) {
  .hero {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 96px 48px;
  }

  .hero-title {
    font-size: 64px;
  }
}
```

## Pourquoi mobile first ?

Aujourd’hui, beaucoup de visiteurs arrivent par téléphone.  
Donc on crée d’abord une version mobile propre, puis on adapte pour ordinateur.

## Breakpoints utiles

```css
/* Tablette */
@media (min-width: 768px) {
}

/* Desktop */
@media (min-width: 1024px) {
}

/* Grand écran */
@media (min-width: 1280px) {
}
```

## Images responsives

```css
img {
  max-width: 100%;
  height: auto;
}
```

## Texte responsive avec clamp

```css
.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
}
```

Cela veut dire :

- minimum : 2.5rem,
- idéal : 6vw,
- maximum : 5rem.

Très utile pour les titres modernes.

---

# 17. Variables CSS

Les variables CSS permettent de garder une charte graphique propre.

## Exemple

```css
:root {
  --primary: #7c3aed;
  --secondary: #2563eb;
  --bg: #f8fafc;
  --surface: #ffffff;
  --text: #111827;
  --muted: #6b7280;
  --radius: 24px;
  --shadow: 0 24px 80px rgba(15, 23, 42, 0.12);
}
```

## Utilisation

```css
.card {
  background: var(--surface);
  color: var(--text);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
```

## Avantage concret

Si tu veux changer tout le violet du site, tu modifies seulement :

```css
--primary: #7c3aed;
```

au lieu de chercher la couleur partout.

---

# 18. Effets modernes : transitions, animations, ombres, gradients

## Transition

```css
.btn {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(124, 58, 237, 0.25);
}
```

## Gradient

```css
.hero {
  background:
    radial-gradient(circle at top left, rgba(124, 58, 237, 0.25), transparent 35%),
    linear-gradient(135deg, #f8fafc, #eef2ff);
}
```

## Texte en dégradé

```css
.gradient-text {
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  -webkit-background-clip: text;
  color: transparent;
}
```

HTML :

```html
<h1>Votre site web <span class="gradient-text">professionnel</span></h1>
```

## Animation simple

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
}

.mockup {
  animation: float 6s ease-in-out infinite;
}
```

## Accessibilité : réduire les animations

Certaines personnes sont sensibles aux animations.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

---

# 19. Positionnement CSS

## Position static

Valeur normale par défaut.

```css
.box {
  position: static;
}
```

## Position relative

Permet de déplacer légèrement un élément.

```css
.badge {
  position: relative;
  top: -4px;
}
```

## Position absolute

Place un élément par rapport au parent positionné.

```css
.card {
  position: relative;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 24px;
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  opacity: 0.08;
}
```

## Position fixed

Reste fixé à l’écran.

```css
.whatsapp-button {
  position: fixed;
  right: 24px;
  bottom: 24px;
}
```

## Position sticky

Reste collé après un certain scroll.

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
}
```

## Z-index

Contrôle la profondeur.

```css
.menu {
  position: fixed;
  z-index: 100;
}
```

Attention : `z-index` marche surtout sur les éléments positionnés.

---

# 20. Propriétés CSS importantes à connaître

## Propriétés de texte

| Propriété | Rôle |
|---|---|
| `font-family` | Police |
| `font-size` | Taille |
| `font-weight` | Graisse |
| `line-height` | Hauteur de ligne |
| `letter-spacing` | Espacement des lettres |
| `text-align` | Alignement |
| `text-transform` | Majuscules/minuscules |
| `color` | Couleur du texte |

## Propriétés de boîte

| Propriété | Rôle |
|---|---|
| `width` | Largeur |
| `height` | Hauteur |
| `max-width` | Largeur maximum |
| `min-height` | Hauteur minimum |
| `padding` | Espace intérieur |
| `margin` | Espace extérieur |
| `border` | Bordure |
| `border-radius` | Coins arrondis |
| `box-shadow` | Ombre |
| `box-sizing` | Calcul de taille |

## Propriétés de layout

| Propriété | Rôle |
|---|---|
| `display` | Type d’affichage |
| `flex-direction` | Direction Flexbox |
| `justify-content` | Alignement principal |
| `align-items` | Alignement secondaire |
| `gap` | Espace entre éléments |
| `grid-template-columns` | Colonnes Grid |
| `place-items` | Centrage rapide |
| `position` | Positionnement |
| `z-index` | Profondeur |

## Propriétés de fond

| Propriété | Rôle |
|---|---|
| `background` | Fond complet |
| `background-color` | Couleur de fond |
| `background-image` | Image ou gradient |
| `background-size` | Taille du fond |
| `background-position` | Position du fond |
| `background-repeat` | Répétition |

## Propriétés d’effet

| Propriété | Rôle |
|---|---|
| `transition` | Animation entre deux états |
| `transform` | Déplacement, rotation, zoom |
| `animation` | Animation complète |
| `opacity` | Transparence |
| `filter` | Flou, luminosité |
| `backdrop-filter` | Flou derrière un élément |

## Propriétés responsive modernes

| Propriété / Fonction | Utilisation |
|---|---|
| `clamp()` | Taille fluide avec min et max |
| `min()` | Prend la plus petite valeur |
| `max()` | Prend la plus grande valeur |
| `vw` | Pourcentage de largeur d’écran |
| `vh` | Pourcentage de hauteur d’écran |
| `rem` | Unité basée sur la taille de police racine |
| `%` | Pourcentage du parent |
| `auto-fit` | Colonnes automatiques Grid |
| `minmax()` | Taille minimum/maximum Grid |

---

# 21. Problématiques CSS concrètes

## Problème 1 : mes cartes ne sont pas alignées

### Cause fréquente

Tu utilises des marges approximatives.

### Mauvais exemple

```css
.card {
  display: inline-block;
  width: 30%;
  margin-right: 20px;
}
```

### Correction avec Grid

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}
```

## Problème 2 : mon site déborde sur mobile

### Cause fréquente

Un élément a une largeur fixe trop grande.

```css
.hero-img {
  width: 900px;
}
```

### Correction

```css
.hero-img {
  max-width: 100%;
  height: auto;
}
```

## Problème 3 : mon menu ne reste pas en haut

### Correction

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.8);
}
```

## Problème 4 : mes boutons ne font pas premium

### Version basique

```css
.btn {
  background: blue;
  color: white;
}
```

### Version plus professionnelle

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 22px;
  border-radius: 999px;
  border: 0;
  background: linear-gradient(135deg, #7c3aed, #2563eb);
  color: white;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 16px 40px rgba(37, 99, 235, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 60px rgba(37, 99, 235, 0.32);
}
```

## Problème 5 : mon texte est trop large et difficile à lire

### Mauvais exemple

```css
p {
  width: 100%;
}
```

### Correction

```css
p {
  max-width: 65ch;
}
```

`ch` correspond approximativement à la largeur d’un caractère.  
Un paragraphe entre 55 et 75 caractères de largeur est souvent plus lisible.

---

# 22. JavaScript : rendre le site vivant

JavaScript permet d’ajouter de l’interaction.

Exemples :

- ouvrir un menu mobile,
- valider un formulaire,
- afficher une FAQ,
- sauvegarder un choix utilisateur,
- charger des données,
- animer des éléments,
- filtrer une galerie,
- afficher un message après clic.

## Ajouter JavaScript au HTML

En bas du `body` :

```html
<script src="assets/js/script.js"></script>
</body>
```

Ou dans le `head` avec `defer` :

```html
<script src="assets/js/script.js" defer></script>
```

Mon conseil :

```html
<script src="assets/js/script.js" defer></script>
```

Cela charge le script sans bloquer la page.

---

# 23. Variables, conditions, fonctions et tableaux

## Variables

```js
const siteName = "ChronoSite";
let visitorCount = 0;
```

- `const` : valeur qui ne change pas.
- `let` : valeur qui peut changer.

Évite `var` dans les projets modernes.

## Types de données

```js
const name = "Julien";       // string
const age = 37;              // number
const isOnline = true;       // boolean
const services = ["Site", "SEO", "Maintenance"]; // array
```

## Conditions

```js
const budget = 300;

if (budget >= 500) {
  console.log("Projet complet possible");
} else if (budget >= 250) {
  console.log("Projet simple possible");
} else {
  console.log("Prévoir une formule mini");
}
```

## Fonctions

```js
function calculatePrice(basePrice, optionsPrice) {
  return basePrice + optionsPrice;
}

const total = calculatePrice(300, 80);
console.log(total);
```

## Fonction fléchée

```js
const calculatePrice = (basePrice, optionsPrice) => {
  return basePrice + optionsPrice;
};
```

## Tableaux

```js
const services = ["Site vitrine", "Landing page", "Maintenance"];

services.forEach((service) => {
  console.log(service);
});
```

## Objets

```js
const offer = {
  name: "Site vitrine",
  price: 490,
  duration: "5 jours",
  includedHosting: true
};

console.log(offer.name);
```

---

# 24. Manipuler le DOM

Le DOM est la représentation HTML de la page dans JavaScript.

## Sélectionner un élément

HTML :

```html
<h1 id="hero-title">Bienvenue</h1>
```

JS :

```js
const title = document.querySelector("#hero-title");
console.log(title);
```

## Modifier du texte

```js
title.textContent = "Votre site web professionnel livré rapidement";
```

## Modifier une classe

```js
title.classList.add("is-visible");
title.classList.remove("is-hidden");
title.classList.toggle("active");
```

## Modifier un attribut

```js
const link = document.querySelector(".cta-link");
link.setAttribute("href", "#contact");
```

## Créer un élément

```js
const badge = document.createElement("span");
badge.textContent = "Nouveau";
badge.classList.add("badge");

document.body.appendChild(badge);
```

---

# 25. Événements JavaScript

Un événement est une action :

- clic,
- scroll,
- saisie clavier,
- soumission de formulaire,
- chargement de page.

## Clic

HTML :

```html
<button id="menu-button">Menu</button>
```

JS :

```js
const button = document.querySelector("#menu-button");

button.addEventListener("click", () => {
  console.log("Bouton cliqué");
});
```

## Input

```html
<input id="name" type="text">
<p id="preview"></p>
```

```js
const input = document.querySelector("#name");
const preview = document.querySelector("#preview");

input.addEventListener("input", () => {
  preview.textContent = input.value;
});
```

## Formulaire

```js
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Formulaire intercepté");
});
```

`event.preventDefault()` empêche le comportement par défaut.

---

# 26. Menu mobile

## HTML

```html
<header class="site-header">
  <a class="logo" href="#">ChronoSite</a>

  <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
    Menu
  </button>

  <nav class="main-nav" id="main-nav">
    <a href="#services">Services</a>
    <a href="#pricing">Tarifs</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
```

## CSS

```css
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
}

.main-nav {
  display: none;
}

.main-nav.is-open {
  display: flex;
  position: absolute;
  top: 72px;
  right: 24px;
  left: 24px;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 24px;
  background: white;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.18);
}

@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }

  .main-nav {
    display: flex;
    gap: 24px;
  }
}
```

## JavaScript

```js
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", isOpen);
});
```

## Pourquoi `aria-expanded` ?

C’est utile pour l’accessibilité.  
Quand le menu est ouvert, la valeur passe à `true`.

---

# 27. Formulaire interactif

## Objectif

Afficher un message si le formulaire est bien rempli.

## HTML

```html
<form class="contact-form">
  <label for="name">Nom</label>
  <input id="name" name="name" type="text" required>

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>

  <label for="message">Message</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Envoyer</button>

  <p class="form-message" aria-live="polite"></p>
</form>
```

## JavaScript

```js
const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Merci de remplir tous les champs.";
    formMessage.classList.add("error");
    return;
  }

  formMessage.textContent = "Merci, votre message est prêt à être envoyé.";
  formMessage.classList.remove("error");

  contactForm.reset();
});
```

## CSS

```css
.form-message {
  margin-top: 16px;
  font-weight: 700;
  color: #047857;
}

.form-message.error {
  color: #dc2626;
}
```

## Limite importante

Ce code ne remplace pas un vrai envoi serveur.  
Pour recevoir le mail, il faudra :

- PHP,
- service externe,
- API,
- WordPress,
- formulaire Hostinger,
- Formspree,
- Netlify Forms,
- ou backend personnalisé.

---

# 28. FAQ accordéon

## HTML

```html
<section class="faq">
  <h2>Questions fréquentes</h2>

  <div class="faq-item">
    <button class="faq-question" type="button">
      Combien de temps pour créer un site ?
    </button>
    <div class="faq-answer">
      <p>Un site simple peut être livré en quelques jours selon les contenus fournis.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question" type="button">
      Le nom de domaine est-il inclus ?
    </button>
    <div class="faq-answer">
      <p>Oui, il peut être inclus selon la formule choisie.</p>
    </div>
  </div>
</section>
```

## CSS

```css
.faq-answer {
  display: none;
  padding: 0 0 16px;
}

.faq-item.is-open .faq-answer {
  display: block;
}

.faq-question {
  width: 100%;
  padding: 18px 0;
  border: 0;
  background: transparent;
  font: inherit;
  font-weight: 700;
  text-align: left;
  cursor: pointer;
}
```

## JavaScript

```js
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");
    item.classList.toggle("is-open");
  });
});
```

## Amélioration : fermer les autres réponses

```js
questions.forEach((question) => {
  question.addEventListener("click", () => {
    const currentItem = question.closest(".faq-item");

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("is-open");
      }
    });

    currentItem.classList.toggle("is-open");
  });
});
```

---

# 29. Mode sombre

## HTML

```html
<button class="theme-toggle" type="button">
  Changer le thème
</button>
```

## CSS

```css
:root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --text: #111827;
  --muted: #6b7280;
}

body.dark {
  --bg: #020617;
  --surface: #0f172a;
  --text: #f8fafc;
  --muted: #cbd5e1;
}

body {
  background: var(--bg);
  color: var(--text);
}

.card {
  background: var(--surface);
}
```

## JavaScript

```js
const themeButton = document.querySelector(".theme-toggle");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
```

---

# 30. Sauvegarde avec localStorage

`localStorage` permet de garder une information dans le navigateur.

Exemple :

- thème sombre,
- préférence utilisateur,
- dernière catégorie ouverte.

## Sauvegarder le mode sombre

```js
const themeButton = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
```

## Attention

Ne stocke jamais de données sensibles dans `localStorage`.

À éviter :

- mots de passe,
- données bancaires,
- informations privées importantes.

---

# 31. Fetch API : préparer un site dynamique

`fetch()` permet de récupérer des données.

## Exemple simple

```js
fetch("data/services.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

## Version moderne avec async/await

```js
async function loadServices() {
  const response = await fetch("data/services.json");
  const services = await response.json();

  console.log(services);
}

loadServices();
```

## Exemple de fichier JSON

```json
[
  {
    "title": "Site vitrine",
    "price": "À partir de 490 €",
    "description": "Un site professionnel pour présenter votre activité."
  },
  {
    "title": "Landing page",
    "price": "À partir de 290 €",
    "description": "Une page optimisée pour vendre une offre précise."
  }
]
```

## Afficher les services dans la page

HTML :

```html
<div class="services-list"></div>
```

JS :

```js
async function loadServices() {
  const response = await fetch("data/services.json");
  const services = await response.json();

  const container = document.querySelector(".services-list");

  services.forEach((service) => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <strong>${service.price}</strong>
    `;

    container.appendChild(card);
  });
}

loadServices();
```

## Attention sécurité

Ne mets pas directement du contenu utilisateur dans `innerHTML` si tu ne le contrôles pas.  
Pour du contenu venant d’un formulaire ou d’une source inconnue, préfère `textContent`.

---

# 32. Problématiques JavaScript concrètes

## Problème 1 : mon JavaScript ne marche pas

### Cause fréquente

Le script s’exécute avant que le HTML existe.

### Solution 1 : mettre `defer`

```html
<script src="assets/js/script.js" defer></script>
```

### Solution 2 : placer le script avant `</body>`

```html
<script src="assets/js/script.js"></script>
</body>
```

## Problème 2 : querySelector retourne null

### Exemple

```js
const button = document.querySelector(".menu-button");
button.addEventListener("click", () => {});
```

Erreur possible :

```txt
Cannot read properties of null
```

### Cause

L’élément `.menu-button` n’existe pas dans le HTML.

### Correction défensive

```js
const button = document.querySelector(".menu-button");

if (button) {
  button.addEventListener("click", () => {
    console.log("Menu ouvert");
  });
}
```

## Problème 3 : je veux ajouter une classe au scroll

```js
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});
```

CSS :

```css
.site-header.is-scrolled {
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.12);
  background: rgba(255, 255, 255, 0.92);
}
```

## Problème 4 : je veux filtrer un portfolio

HTML :

```html
<div class="filters">
  <button data-filter="all">Tous</button>
  <button data-filter="site">Sites</button>
  <button data-filter="logo">Logos</button>
</div>

<div class="portfolio">
  <article class="project" data-category="site">Projet site web</article>
  <article class="project" data-category="logo">Projet logo</article>
</div>
```

JS :

```js
const filterButtons = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    projects.forEach((project) => {
      const category = project.dataset.category;

      if (filter === "all" || filter === category) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});
```

## Problème 5 : je veux afficher un prix selon les options

HTML :

```html
<form class="price-form">
  <label>
    <input type="checkbox" value="80" class="option">
    Page supplémentaire
  </label>

  <label>
    <input type="checkbox" value="120" class="option">
    Formulaire avancé
  </label>

  <label>
    <input type="checkbox" value="150" class="option">
    Optimisation SEO
  </label>

  <p>Total estimé : <strong id="total-price">490 €</strong></p>
</form>
```

JS :

```js
const basePrice = 490;
const options = document.querySelectorAll(".option");
const totalPrice = document.querySelector("#total-price");

function updateTotal() {
  let total = basePrice;

  options.forEach((option) => {
    if (option.checked) {
      total += Number(option.value);
    }
  });

  totalPrice.textContent = `${total} €`;
}

options.forEach((option) => {
  option.addEventListener("change", updateTotal);
});
```

---

# 33. Mini-projet complet : améliorer une landing page

Objectif : créer une base de landing page moderne pour un site de création web.

## Fichier `index.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ChronoSite - Sites web rapides et professionnels</title>
  <meta name="description" content="Création de sites web rapides, modernes et abordables à Parempuyre et Bordeaux Métropole.">
  <link rel="stylesheet" href="assets/css/style.css">
  <script src="assets/js/script.js" defer></script>
</head>
<body>

  <header class="site-header">
    <a class="logo" href="#">ChronoSite</a>

    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
      Menu
    </button>

    <nav class="main-nav" id="main-nav">
      <a href="#services">Services</a>
      <a href="#process">Process</a>
      <a href="#pricing">Tarifs</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <p class="badge">Création de sites web • Parempuyre & Bordeaux Métropole</p>
        <h1>Votre site web <span>professionnel</span> livré rapidement.</h1>
        <p class="hero-text">
          Je crée des sites modernes, rapides et abordables pour les indépendants,
          associations et petites entreprises qui veulent être visibles sans exploser leur budget.
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="#contact">Obtenir mon devis</a>
          <a class="btn btn-secondary" href="#pricing">Voir les formules</a>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="mockup mockup-desktop">
          <div class="mockup-bar"></div>
          <div class="mockup-content">
            <div class="mockup-title"></div>
            <div class="mockup-line"></div>
            <div class="mockup-line small"></div>
            <div class="mockup-grid">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="services">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2>Ce que je peux créer pour toi</h2>
          <p>Des solutions simples, propres et efficaces pour lancer ou améliorer ta présence en ligne.</p>
        </div>

        <div class="cards">
          <article class="card">
            <h3>Site vitrine</h3>
            <p>Présente ton activité, tes services, tes photos, tes horaires et tes contacts.</p>
          </article>

          <article class="card">
            <h3>Landing page</h3>
            <p>Une page claire pour vendre une offre précise ou générer des demandes de devis.</p>
          </article>

          <article class="card">
            <h3>Maintenance</h3>
            <p>Correction, sauvegarde, sécurité, mises à jour et petites améliorations.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-soft" id="process">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Méthode</p>
          <h2>Un process simple</h2>
        </div>

        <ol class="steps">
          <li>Tu choisis une ambiance ou un modèle.</li>
          <li>Tu m’envoies tes textes, photos et informations.</li>
          <li>Je crée une première version temporaire.</li>
          <li>Tu valides ou demandes des retouches.</li>
          <li>Le site est mis en ligne avec le nom de domaine.</li>
        </ol>
      </div>
    </section>

    <section class="section" id="pricing">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Formules</p>
          <h2>Choisis la formule adaptée</h2>
        </div>

        <div class="cards">
          <article class="card pricing-card">
            <h3>Essentiel</h3>
            <p class="price">À partir de 290 €</p>
            <p>Une page professionnelle pour présenter une offre simple.</p>
          </article>

          <article class="card pricing-card featured">
            <h3>Site vitrine</h3>
            <p class="price">À partir de 490 €</p>
            <p>Un site complet avec plusieurs sections et formulaire de contact.</p>
          </article>

          <article class="card pricing-card">
            <h3>Abonnement</h3>
            <p class="price">Dès 39 €/mois</p>
            <p>Site hébergé, maintenance incluse et accompagnement régulier.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-soft" id="faq">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h2>Questions fréquentes</h2>
        </div>

        <div class="faq-item">
          <button class="faq-question" type="button">Combien de temps pour créer un site ?</button>
          <div class="faq-answer">
            <p>Un site simple peut être livré en quelques jours si les contenus sont prêts.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" type="button">Est-ce que le site est responsive ?</button>
          <div class="faq-answer">
            <p>Oui, le site est pensé pour ordinateur, tablette et mobile.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question" type="button">Puis-je demander des retouches ?</button>
          <div class="faq-answer">
            <p>Oui, les retouches peuvent être incluses ou facturées selon la formule.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container contact-grid">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>Parle-moi de ton projet</h2>
          <p>Explique ton besoin, ton activité, ton délai et ton budget approximatif.</p>
        </div>

        <form class="contact-form">
          <label for="name">Nom</label>
          <input id="name" name="name" type="text" required>

          <label for="email">Email</label>
          <input id="email" name="email" type="email" required>

          <label for="project">Type de projet</label>
          <select id="project" name="project" required>
            <option value="">Choisir une option</option>
            <option value="site-vitrine">Site vitrine</option>
            <option value="landing-page">Landing page</option>
            <option value="maintenance">Maintenance</option>
          </select>

          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button class="btn btn-primary" type="submit">Envoyer la demande</button>
          <p class="form-message" aria-live="polite"></p>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© 2026 ChronoSite. Tous droits réservés.</p>
  </footer>

</body>
</html>
```

## Fichier `assets/css/style.css`

```css
:root {
  --primary: #7c3aed;
  --secondary: #2563eb;
  --bg: #f8fafc;
  --soft: #eef2f7;
  --surface: #ffffff;
  --text: #111827;
  --muted: #6b7280;
  --border: #e5e7eb;
  --radius: 24px;
  --shadow: 0 24px 80px rgba(15, 23, 42, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 24px;
  background: rgba(248, 250, 252, 0.82);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(229, 231, 235, 0.8);
}

.logo {
  font-weight: 900;
  font-size: 1.25rem;
  text-decoration: none;
  letter-spacing: -0.04em;
}

.menu-toggle {
  border: 1px solid var(--border);
  background: white;
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
}

.main-nav {
  display: none;
}

.main-nav.is-open {
  position: absolute;
  top: 72px;
  left: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: var(--radius);
  background: white;
  box-shadow: var(--shadow);
}

.main-nav a {
  font-weight: 700;
  color: var(--muted);
  text-decoration: none;
}

.main-nav a:hover {
  color: var(--primary);
}

.hero {
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 48px;
  min-height: 88vh;
  padding: 80px 24px;
  background:
    radial-gradient(circle at 10% 10%, rgba(124, 58, 237, 0.22), transparent 34%),
    radial-gradient(circle at 90% 20%, rgba(37, 99, 235, 0.18), transparent 32%),
    linear-gradient(135deg, #f8fafc, #eef2ff);
}

.hero-content {
  align-self: center;
  max-width: 720px;
}

.badge,
.eyebrow {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 8px 14px;
  border: 1px solid rgba(124, 58, 237, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.75);
  color: var(--primary);
  font-weight: 800;
  font-size: 0.875rem;
}

.hero h1 {
  margin: 24px 0;
  max-width: 760px;
  font-size: clamp(2.7rem, 8vw, 5.8rem);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.hero h1 span {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  color: transparent;
}

.hero-text {
  max-width: 62ch;
  color: var(--muted);
  font-size: 1.125rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 14px 22px;
  border-radius: 999px;
  font-weight: 850;
  text-decoration: none;
  border: 0;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  box-shadow: 0 18px 50px rgba(37, 99, 235, 0.28);
}

.btn-secondary {
  background: white;
  color: var(--text);
  border: 1px solid var(--border);
}

.hero-visual {
  display: grid;
  place-items: center;
}

.mockup {
  width: min(520px, 100%);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: var(--shadow);
  backdrop-filter: blur(20px);
  animation: float 6s ease-in-out infinite;
}

.mockup-bar {
  height: 42px;
  border-bottom: 1px solid rgba(229, 231, 235, 0.85);
}

.mockup-content {
  padding: 32px;
}

.mockup-title {
  width: 70%;
  height: 36px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
}

.mockup-line {
  width: 90%;
  height: 14px;
  margin-top: 18px;
  border-radius: 999px;
  background: #dbe4f0;
}

.mockup-line.small {
  width: 60%;
}

.mockup-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 32px;
}

.mockup-grid span {
  height: 100px;
  border-radius: 20px;
  background: #eef2f7;
}

.section {
  padding: 88px 24px;
}

.section-soft {
  background: var(--soft);
}

.container {
  width: min(1120px, 100%);
  margin-inline: auto;
}

.section-heading {
  max-width: 680px;
  margin-bottom: 40px;
}

.section-heading h2,
.contact-grid h2 {
  margin: 18px 0;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1;
  letter-spacing: -0.05em;
}

.section-heading p,
.contact-grid p {
  color: var(--muted);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.card {
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.06);
}

.card h3 {
  margin-top: 0;
  font-size: 1.35rem;
}

.card p {
  color: var(--muted);
}

.pricing-card.featured {
  border-color: rgba(124, 58, 237, 0.35);
  box-shadow: 0 24px 80px rgba(124, 58, 237, 0.16);
}

.price {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--primary) !important;
}

.steps {
  display: grid;
  gap: 16px;
  padding-left: 24px;
  font-weight: 700;
}

.faq-item {
  border-bottom: 1px solid var(--border);
}

.faq-question {
  width: 100%;
  padding: 22px 0;
  border: 0;
  background: transparent;
  font: inherit;
  font-weight: 900;
  text-align: left;
  cursor: pointer;
}

.faq-answer {
  display: none;
  padding-bottom: 22px;
  color: var(--muted);
}

.faq-item.is-open .faq-answer {
  display: block;
}

.contact-grid {
  display: grid;
  gap: 40px;
}

.contact-form {
  display: grid;
  gap: 12px;
  padding: 28px;
  border-radius: var(--radius);
  background: white;
  box-shadow: var(--shadow);
}

.contact-form label {
  font-weight: 800;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 14px 16px;
  font: inherit;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: 3px solid rgba(124, 58, 237, 0.18);
  border-color: var(--primary);
}

.form-message {
  margin: 0;
  font-weight: 800;
  color: #047857;
}

.form-message.error {
  color: #dc2626;
}

.site-footer {
  padding: 32px 24px;
  text-align: center;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-14px);
  }
}

@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }

  .main-nav {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .hero {
    grid-template-columns: 1.05fr 0.95fr;
    padding: 96px 48px;
  }

  .contact-grid {
    grid-template-columns: 0.9fr 1.1fr;
    align-items: start;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

## Fichier `assets/js/script.js`

```js
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const currentItem = question.closest(".faq-item");

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("is-open");
      }
    });

    currentItem.classList.toggle("is-open");
  });
});

const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const project = document.querySelector("#project").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !project || !message) {
      formMessage.textContent = "Merci de remplir tous les champs.";
      formMessage.classList.add("error");
      return;
    }

    formMessage.textContent = "Merci, ta demande est prête à être envoyée.";
    formMessage.classList.remove("error");

    contactForm.reset();
  });
}

const header = document.querySelector(".site-header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  });
}
```

---

# 34. Checklist finale pour améliorer ton site

## HTML

- [ ] Chaque page a un seul `h1`.
- [ ] Les sections importantes ont des `h2`.
- [ ] Le menu est dans une balise `nav`.
- [ ] Le contenu principal est dans `main`.
- [ ] Les images ont un `alt` utile.
- [ ] Les formulaires ont des `label`.
- [ ] Le fichier contient bien la meta viewport.
- [ ] Les liens ont des textes clairs.
- [ ] Les boutons sont utilisés pour les actions, les liens pour naviguer.

## CSS

- [ ] Le site utilise `box-sizing: border-box`.
- [ ] Les couleurs principales sont dans des variables CSS.
- [ ] Les images ne débordent pas.
- [ ] Les cartes utilisent Grid ou Flexbox.
- [ ] Les tailles de titres sont responsives avec `clamp()`.
- [ ] Les boutons ont des états `hover` et `focus`.
- [ ] Le menu mobile est lisible.
- [ ] Les espacements sont cohérents.
- [ ] Les animations respectent `prefers-reduced-motion`.

## JavaScript

- [ ] Le script est chargé avec `defer`.
- [ ] Les éléments sont testés avant d’ajouter des événements.
- [ ] Le menu mobile modifie `aria-expanded`.
- [ ] Les formulaires empêchent l’envoi vide.
- [ ] Les erreurs sont affichées clairement.
- [ ] Les classes CSS sont ajoutées avec `classList`.
- [ ] `localStorage` n’est pas utilisé pour des données sensibles.
- [ ] Le code est rangé en petites fonctions.

## Performance

- [ ] Images compressées.
- [ ] Images en `.webp` si possible.
- [ ] CSS non utilisé supprimé.
- [ ] JavaScript inutile supprimé.
- [ ] Polices limitées.
- [ ] Pas trop d’animations lourdes.
- [ ] Page testée sur mobile.

## SEO

- [ ] `title` différent pour chaque page.
- [ ] `meta description` claire.
- [ ] Un vrai `h1`.
- [ ] Des textes utiles avec mots-clés naturels.
- [ ] Des URLs propres.
- [ ] Images nommées correctement.
- [ ] Liens internes entre les pages.
- [ ] Page contact facilement accessible.

---

# 35. Exercices pratiques

## Exercice 1 : créer une section services

Crée une section avec :

- un `h2`,
- un paragraphe d’introduction,
- 3 cartes de services,
- un bouton “Demander un devis”.

Objectif :

- utiliser `section`,
- utiliser `article`,
- utiliser CSS Grid.

## Exercice 2 : rendre une hero section responsive

Crée une hero section avec :

- texte à gauche,
- image ou mockup à droite,
- boutons,
- passage en une colonne sur mobile.

Objectif :

- utiliser `display: grid`,
- utiliser `@media`,
- utiliser `clamp()`.

## Exercice 3 : créer un menu mobile

Crée :

- un bouton menu,
- une navigation cachée sur mobile,
- un clic qui ouvre/ferme le menu.

Objectif :

- utiliser `querySelector`,
- utiliser `addEventListener`,
- utiliser `classList.toggle`.

## Exercice 4 : créer une FAQ

Crée 4 questions/réponses.

Objectif :

- une question s’ouvre au clic,
- les autres se ferment,
- le code reste simple.

## Exercice 5 : calculateur de prix

Crée un formulaire avec :

- prix de base,
- options en checkbox,
- total dynamique.

Objectif :

- utiliser `Number()`,
- utiliser `forEach`,
- modifier `textContent`.

## Exercice 6 : améliorer une page existante

Prends une page de ton site et vérifie :

1. Est-ce qu’il y a un vrai `h1` ?
2. Les sections sont-elles claires ?
3. Les titres sont-ils dans le bon ordre ?
4. Le site est-il lisible sur mobile ?
5. Les images sont-elles trop lourdes ?
6. Les boutons sont-ils visibles ?
7. Le formulaire est-il propre ?
8. Le CSS est-il rangé ?
9. Le JavaScript est-il utile ?
10. Le site donne-t-il envie de demander un devis ?

---

# 36. Plan d’apprentissage conseillé sur 30 jours

## Semaine 1 : HTML propre

- Jour 1 : structure HTML de base.
- Jour 2 : titres, paragraphes, listes.
- Jour 3 : liens, images, boutons.
- Jour 4 : formulaires.
- Jour 5 : HTML sémantique.
- Jour 6 : refaire la structure d’une page d’accueil.
- Jour 7 : correction et nettoyage.

## Semaine 2 : CSS solide

- Jour 8 : couleurs, polices, espacements.
- Jour 9 : box model.
- Jour 10 : Flexbox.
- Jour 11 : Grid.
- Jour 12 : responsive.
- Jour 13 : boutons, cartes, ombres.
- Jour 14 : refaire une section services premium.

## Semaine 3 : JavaScript utile

- Jour 15 : variables, conditions, fonctions.
- Jour 16 : DOM.
- Jour 17 : événements.
- Jour 18 : menu mobile.
- Jour 19 : FAQ.
- Jour 20 : formulaire.
- Jour 21 : calculateur de prix.

## Semaine 4 : mini-projet complet

- Jour 22 : créer la landing page.
- Jour 23 : styliser la hero.
- Jour 24 : créer les services.
- Jour 25 : créer les formules.
- Jour 26 : créer la FAQ.
- Jour 27 : créer le formulaire.
- Jour 28 : responsive complet.
- Jour 29 : optimisation.
- Jour 30 : mise en ligne ou préparation GitHub/Vercel.

---

# 37. Erreurs fréquentes à éviter

## HTML

- Utiliser uniquement des `div`.
- Mettre plusieurs `h1` sans raison.
- Oublier les `label`.
- Mettre des boutons sous forme de `div`.
- Oublier la meta viewport.
- Mettre des images sans `alt`.

## CSS

- Mettre trop de tailles fixes.
- Utiliser `position: absolute` partout.
- Oublier le responsive.
- Répéter les mêmes couleurs partout sans variables.
- Mettre trop d’animations.
- Ne pas gérer le `hover` et le `focus`.
- Ne pas tester sur mobile.

## JavaScript

- Écrire du code sans vérifier que l’élément existe.
- Mélanger tout dans un seul énorme bloc.
- Utiliser `innerHTML` avec du contenu non sûr.
- Oublier `event.preventDefault()` sur un formulaire.
- Stocker des données sensibles dans `localStorage`.
- Mettre trop d’interactions inutiles.

---

# 38. Sources et documentation officielle utile

Ces liens sont utiles pour approfondir :

- MDN HTML Reference : https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements
- MDN HTML Accessibility : https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML
- MDN CSS Reference : https://developer.mozilla.org/fr/docs/Web/CSS/Reference
- MDN Media Queries : https://developer.mozilla.org/fr/docs/Web/CSS/Guides/Media_queries/Using
- MDN JavaScript Guide : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide
- MDN DOM Events : https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events
- MDN Web Storage API : https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API
- MDN Fetch API : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API

---

# 39. Résumé final

Pour améliorer ton site, retiens cette méthode :

1. **HTML propre** : une structure claire, sémantique, lisible.
2. **CSS maîtrisé** : variables, Grid, Flexbox, responsive, design cohérent.
3. **JavaScript utile** : interactions simples qui servent vraiment l’utilisateur.
4. **Performance** : images légères, code propre, peu d’effets inutiles.
5. **Conversion** : boutons visibles, textes clairs, formulaire simple.
6. **Mobile d’abord** : ton site doit être beau sur téléphone avant tout.

Mon avis : pour progresser vite, ne cherche pas à tout apprendre théoriquement d’un coup.  
Le meilleur chemin, c’est de refaire section par section un vrai site : hero, services, tarifs, FAQ, contact. À chaque bloc, tu travailles HTML, CSS et JavaScript ensemble. C’est là que tu vas vraiment comprendre.
