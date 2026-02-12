# 🚀 Quick Start Guide

## Installation Rapide

### 1. Installer les dépendances
```bash
npm install
```

### 2. Préparer vos fichiers

#### Audio
Votre fichier audio est déjà configuré :
```
src/sfx/jazzPresentation.mp3 ✅
```

#### Images (optionnel)
Créez un dossier `public/images/` et ajoutez vos images :
```bash
mkdir -p public/images
```

Puis placez vos images :
```
public/images/
├── hopper-selfportrait.jpg
└── hopper-chopsuey.jpg
```

### 3. Lancer l'application
```bash
npm run dev
```

L'application s'ouvrira automatiquement dans votre navigateur à `http://localhost:3000`

## ⌨️ Raccourcis Clavier

| Touche | Action |
|--------|--------|
| `←` | Slide précédente |
| `→` | Slide suivante |
| `ESPACE` | Zoom sur l'image |
| `ESC` | Sortir du zoom |

## 🎨 Personnalisation Rapide

### Changer les couleurs principales

Dans `App.css`, modifiez :
```css
/* Néon rouge/orange */
--primary: #ff4500;

/* Néon vert */
--secondary: #00ff88;

/* Fond */
--background: #0a0a14;
```

### Ajouter/Modifier des slides

Dans `src/App.tsx`, dans le tableau `slides` :
```typescript
const slides = [
  {
    id: 1,
    type: 'intro',
    title: 'Votre Titre',
    hasAudio: true
  },
  // Ajoutez vos slides ici...
];
```

### Désactiver certains effets

Dans `RadioStudio.tsx`, commentez les éléments :
```typescript
{/* <div className="dust-particles">...</div> */}
{/* Désactive les particules de poussière */}
```

## 🎵 Configuration Audio

### Changer le volume par défaut
Dans `App.tsx` :
```typescript
<audio ref={audioRef} loop volume={0.5}> {/* 0.0 à 1.0 */}
```

### Utiliser un autre fichier audio
1. Placez votre fichier dans `src/sfx/`
2. Modifiez dans `App.tsx` :
```typescript
<source src="/sfx/votre-musique.mp3" type="audio/mpeg" />
```

## 📱 Test Responsive

### Desktop
```bash
npm run dev
# Ouvrez http://localhost:3000
```

### Mobile
```bash
# Trouvez votre IP locale
ipconfig  # Windows
ifconfig  # Mac/Linux

# Accédez depuis mobile
http://[votre-ip]:3000
```

## 🏗️ Build pour Production

```bash
npm run build
```

Les fichiers optimisés seront dans `dist/`

### Déployer sur Netlify/Vercel
```bash
# Après le build
npm run build

# Déployez le dossier dist/
```

## 🐛 Problèmes Courants

### L'audio ne joue pas
- Vérifiez que le fichier existe dans `src/sfx/`
- Certains navigateurs bloquent l'autoplay
- Cliquez dans la page pour activer l'audio

### Les images ne s'affichent pas
- Vérifiez le chemin dans le code
- Les chemins doivent commencer par `/` pour public/
- Exemple : `/images/photo.jpg` pour `public/images/photo.jpg`

### Erreur TypeScript
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 déjà utilisé
Dans `vite.config.ts`, changez :
```typescript
server: {
  port: 3001, // Changez le port
}
```

## 🎯 Checklist de Démarrage

- [ ] `npm install` exécuté
- [ ] Fichier audio présent dans `src/sfx/`
- [ ] Images ajoutées dans `public/images/` (optionnel)
- [ ] `npm run dev` lancé
- [ ] Application ouverte dans le navigateur
- [ ] Audio fonctionne
- [ ] Navigation entre slides OK
- [ ] Zoom fonctionne (touche ESPACE)

## 📞 Aide

Si vous rencontrez des problèmes :
1. Vérifiez la console du navigateur (F12)
2. Consultez le README.md complet
3. Vérifiez les chemins des fichiers
4. Redémarrez le serveur dev

---

Bon développement ! 🎨✨
