# 📻 Studio Radio Années 80 - Présentation Interactive

Une présentation immersive avec un décor de studio radio anglais des années 1980, créée en React. **TOUT est interactif !** 🎮

## 🎨 Fonctionnalités

### 🔊 NOUVEAU : Sons Générés Automatiquement
- **Pas besoin de fichier MP3 !** L'application génère ses propres sons avec Web Audio API
- Sons de clics, switches, vinyles, boutons, câbles électriques
- Ambiance sonore de fond si le fichier audio est manquant
- Tous les éléments interactifs ont leur propre son

### ✨ Éléments Interactifs du Studio

#### 💡 Lampe de Bureau (NOUVEAU !)
- **Clic** : Allumer/Éteindre la lampe
- Son de mise sous tension/extinction
- Effet de lumière qui s'illumine et pulse
- Animation de scintillement quand allumée

#### 🎚️ Console Analogique
- **8 boutons rotatifs** : Cliquer pour tourner de 45°
- Petit son "clic" à chaque rotation
- Les VU-mètres animés (L/R) fonctionnent en temps réel
- Faders décoratifs avec niveaux aléatoires

#### 💿 Vinyles Empilés
- **Clic sur un vinyle** : Le fait tourner comme un DJ
- Son de scratch de vinyle
- Animation de rotation continue
- Re-cliquer pour arrêter

#### 🖼️ Affiches Murales
- **"LIVE"** et **"RADIO"** cliquables
- Effet flip 3D quand on clique
- Verso révélé : "80s" et "VIBE"
- Son de clic satisfaisant

#### 🔌 Câbles Électriques
- **3 câbles colorés** cliquables
- Son de buzz électrique
- Effet de brillance néon qui pulse
- Timeout automatique après 1 seconde

#### 📻 Mini Radio (Coin Bas-Droite)
- **Antenne** : Cliquer pour rétracter/étendre
- **Bouton Power** : Son de switch
- **Bouton Volume** : Cycle 0% → 25% → 50% → 75% → 100%
- Indicateur visuel du volume
- Égaliseur à 6 barres animées
- Ondes radio pulsantes

### Navigation
- **Flèches ← →** : Naviguer entre les slides
- **ESPACE** : Zoom sur l'image principale
- **ESC** : Sortir du zoom
- Dots de navigation cliquables
- Compteur de slides (01/04)

## 🎮 Guide d'Utilisation

### Explorez le Studio !
Tous les éléments avec un curseur pointeur sont cliquables :

1. **Lampe** (haut gauche) → Allumer/Éteindre
2. **8 Boutons** (console) → Tourner les knobs
3. **5 Vinyles** (bas droite) → Faire tourner comme un DJ
4. **2 Affiches** (gauche) → Retourner pour voir le verso
5. **3 Câbles** → Faire briller
6. **Radio** (coin bas-droite) :
   - Antenne → Rétracter/Étendre
   - Bouton volume → Augmenter
   - Bouton power → Son de switch

## 🚀 Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer l'application
npm run dev
```

**C'est tout !** Pas besoin de fichier audio, tout fonctionne out-of-the-box ! 🎉

## 🎯 Tableau des Interactions

| Élément | Interaction | Son | Animation |
|---------|-------------|-----|-----------|
| Lampe | Clic | Power on/off | Lumière pulse |
| Boutons | Clic | Knob turn | Rotation 45° |
| Vinyles | Clic | Vinyl scratch | Spin continu |
| Affiches | Clic | Click | Flip 3D |
| Câbles | Clic | Buzz électrique | Glow néon |
| Antenne | Clic | Click | Rétraction |
| Volume | Clic | Knob turn | Indicateur |

## 📁 Structure

```
src/
├── components/       # Tous les composants React
├── utils/
│   └── SoundManager.ts   # Générateur de sons (NOUVEAU)
├── App.tsx          # Application principale
└── App.css          # Styles globaux
```

## 🛠️ Technologies

- React 18+ avec TypeScript
- Web Audio API pour génération de sons
- CSS3 animations et transitions
- Aucune dépendance externe audio !

---

Créé avec ❤️ - **Explorez, cliquez, écoutez ! 🎮🔊**
