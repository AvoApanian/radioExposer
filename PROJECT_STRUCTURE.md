# 📁 Structure Complète du Projet

## 🎯 Architecture Globale

```
radio-studio-80s/
├── public/
│   └── images/              # Vos images (à créer)
│       ├── hopper-selfportrait.jpg
│       └── hopper-chopsuey.jpg
├── src/
│   ├── components/          # Composants React
│   │   ├── RadioStudio/
│   │   │   ├── RadioStudio.tsx
│   │   │   └── RadioStudio.css
│   │   ├── OnAirLight/
│   │   │   ├── OnAirLight.tsx
│   │   │   └── OnAirLight.css
│   │   ├── VUMeter/
│   │   │   ├── VUMeter.tsx
│   │   │   └── VUMeter.css
│   │   ├── MiniRadio/
│   │   │   ├── MiniRadio.tsx
│   │   │   └── MiniRadio.css
│   │   ├── Slide/
│   │   │   ├── Slide.tsx
│   │   │   └── Slide.css
│   │   └── SlideShow/
│   │       ├── SlideShow.tsx
│   │       └── SlideShow.css
│   ├── sfx/
│   │   └── jazzPresentation.mp3  # Votre fichier audio
│   ├── App.tsx              # Composant principal
│   ├── App.css              # Styles globaux
│   └── main.tsx             # Point d'entrée React
├── index.html               # HTML principal
├── package.json             # Dépendances npm
├── tsconfig.json            # Config TypeScript
├── tsconfig.node.json       # Config TypeScript (Vite)
├── vite.config.ts           # Configuration Vite
├── .gitignore               # Fichiers à ignorer
├── README.md                # Documentation complète
├── QUICK_START.md           # Guide de démarrage rapide
├── ENHANCEMENTS.md          # Idées d'améliorations
└── PROJECT_STRUCTURE.md     # Ce fichier
```

## 📝 Description des Fichiers

### Configuration (Racine)
| Fichier | Description |
|---------|-------------|
| `package.json` | Dépendances npm et scripts |
| `tsconfig.json` | Configuration TypeScript |
| `tsconfig.node.json` | Config TypeScript pour Vite |
| `vite.config.ts` | Configuration du bundler Vite |
| `.gitignore` | Fichiers exclus du versioning |
| `index.html` | Point d'entrée HTML avec loading screen |

### Application Source (src/)
| Fichier | Description |
|---------|-------------|
| `main.tsx` | Point d'entrée React |
| `App.tsx` | Composant racine, gestion slides et clavier |
| `App.css` | Styles globaux, effet grain, controls |

### Composants (src/components/)

#### RadioStudio/
- **RadioStudio.tsx** : Fond studio avec tous les éléments
- **RadioStudio.css** : Console, micro, vinyles, câbles, affiches

#### OnAirLight/
- **OnAirLight.tsx** : Lumière "ON AIR" clignotante
- **OnAirLight.css** : Animation de clignotement, néon rouge

#### VUMeter/
- **VUMeter.tsx** : Indicateurs de niveau audio L/R
- **VUMeter.css** : Barres LED vertes/jaunes/rouges

#### MiniRadio/
- **MiniRadio.tsx** : Radio rétro dans le coin
- **MiniRadio.css** : Design bois, écran LCD, égaliseur

#### Slide/
- **Slide.tsx** : Contenu de chaque slide (intro/artwork/outro)
- **Slide.css** : Styles pour les 3 types de slides

#### SlideShow/
- **SlideShow.tsx** : Gestion de l'affichage des slides
- **SlideShow.css** : Navigation, dots, compteur

### Médias (src/sfx/)
| Fichier | Description |
|---------|-------------|
| `jazzPresentation.mp3` | Audio de fond pour intro/outro |

## 🎨 Composants Détaillés

### 1. RadioStudio (Fond Principal)
**Éléments inclus :**
- Console analogique avec 8 channels
- Boutons rotatifs (knobs)
- Faders verticaux
- VU-mètres L/R animés
- Microphone rétro argenté
- Pile de 5 vinyles
- Câbles néon (rouge/vert/orange)
- 2 affiches murales ("LIVE", "RADIO")
- 20 particules de poussière
- Vignette cinématique
- Fond dégradé bleu nuit

**Animations :**
- Particules flottantes
- VU-mètres réactifs
- Effet grain vintage

### 2. OnAirLight (Lumière "ON AIR")
**Caractéristiques :**
- Boîtier métallique 3D
- Texte "ON AIR" en néon rouge
- Clignotement synchronisé (2s)
- 2 LEDs vertes latérales
- Réflexions lumineuses

### 3. VUMeter (Indicateurs Audio)
**Fonctionnalités :**
- 20 segments par canal
- Couleurs : Vert (0-70%), Jaune (70-90%), Rouge (90-100%)
- Animation temps réel
- Labels L/R
- Indicateur PEAK

### 4. MiniRadio (Radio d'Angle)
**Composants :**
- Corps en bois marron
- Antenne avec LED rouge
- Écran LCD vert (88.5 FM)
- 6 barres d'égaliseur animées
- 2 boutons (power, volume)
- Grille haut-parleur
- Ondes radio pulsantes
- LED indicatrice

**États :**
- `isPlaying={true}` : Égaliseur actif, ondes visibles
- `isPlaying={false}` : Barres au minimum, pas d'ondes

### 5. Slide (Contenu)
**3 Types :**

**Intro :**
- Titre principal animé
- Sous-titre avec icône vinyle
- Indication "Press SPACE to zoom"

**Artwork :**
- Cadre photo 3D
- Image de l'œuvre
- Titre + artiste + description
- Zoom plein écran disponible

**Outro :**
- Message de fin
- Mots animés séparément
- Décoration avec étoile

### 6. SlideShow (Navigation)
**Fonctionnalités :**
- Dots de navigation cliquables
- Compteur de slides (01/04)
- Gestion du zoom
- Transitions fluides

## 🎮 Interactions

### Clavier
```typescript
Space    → Zoom sur image principale
←        → Slide précédente
→        → Slide suivante
Esc      → Sortir du zoom
```

### Souris
```typescript
Click sur dot     → Aller à la slide
Hover sur radio   → Scale 1.05
Hover sur poster  → Rotation 0deg + scale 1.05
```

## 🎨 Variables CSS Principales

```css
/* Couleurs */
--primary: #ff4500      /* Rouge/orange néon */
--secondary: #00ff88    /* Vert néon */
--background: #0a0a14   /* Bleu nuit profond */

/* Effets */
--grain-opacity: 0.3
--vignette-intensity: 0.6
--glow-blur: 20px

/* Animations */
--transition-speed: 0.8s
--easing: cubic-bezier(0.4, 0, 0.2, 1)
```

## 📊 Performance

### Optimisations
- Transitions CSS (GPU accelerated)
- Lazy loading des composants
- Minification en production
- Tree shaking automatique
- Compression terser

### Taille Estimée
```
Development : ~2MB (non minifié)
Production  : ~150KB (gzip)
Audio       : ~3MB (selon fichier)
Images      : Variable
```

## 🚀 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build production
npm run preview  # Preview du build
npm run lint     # Vérification ESLint
```

## 🎯 Points d'Extension

### Facile à Modifier
1. **Couleurs** : `App.css`, variables CSS
2. **Slides** : `App.tsx`, tableau `slides`
3. **Audio** : `src/sfx/`, référence dans `App.tsx`
4. **Images** : `public/images/`, chemins dans slides

### Moyennement Complexe
1. **Nouveaux composants** : Créer dans `src/components/`
2. **Animations** : Modifier les `@keyframes` CSS
3. **Effets audio** : Web Audio API dans composants
4. **Transitions** : Modifier les CSS transitions

### Avancé
1. **Easter eggs** : Voir `ENHANCEMENTS.md`
2. **Modes de vue** : Nouveaux états dans `App.tsx`
3. **Analytics** : Intégration tracking
4. **PWA** : Service workers, manifest

## 📚 Documentation

| Fichier | Contenu |
|---------|---------|
| `README.md` | Documentation complète |
| `QUICK_START.md` | Guide de démarrage rapide |
| `ENHANCEMENTS.md` | Idées d'améliorations |
| `PROJECT_STRUCTURE.md` | Ce fichier |

## 🔗 Dépendances

### Production
```json
"react": "^18.2.0"
"react-dom": "^18.2.0"
```

### Development
```json
"typescript": "^5.2.2"
"vite": "^5.0.8"
"@vitejs/plugin-react": "^4.2.1"
"eslint": "^8.55.0"
```

---

Toute l'architecture est modulaire et extensible ! 🎨✨
