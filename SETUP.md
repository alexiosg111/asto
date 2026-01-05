# Setup-Anleitung für ASTO

Diese Anleitung hilft Ihnen bei der Einrichtung und Ausführung des ASTO-Projekts.

## 📋 Inhaltsverzeichnis

1. [Voraussetzungen](#voraussetzungen)
2. [Projekt einrichten](#projekt-einrichten)
3. [Lokal ausführen](#lokal-ausführen)
4. [Entwicklungsumgebung](#entwicklungsumgebung)
5. [Deployment](#deployment)
6. [Troubleshooting](#troubleshooting)

## Voraussetzungen

### Erforderliche Software

- **Git**: Für die Versionskontrolle
  - Installation: https://git-scm.com/downloads
  - Überprüfung: `git --version`

- **Webbrowser**: Beliebiger moderner Browser
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+

### Optionale Software

- **Node.js & npm**: Für fortgeschrittene Entwicklungstools
  - Installation: https://nodejs.org/
- **Python**: Für lokalen Server
  - Installation: https://www.python.org/downloads/

## Projekt einrichten

### Schritt 1: Repository klonen

```bash
# HTTPS
git clone https://github.com/alexiosg111/asto.git

# SSH (wenn SSH-Schlüssel eingerichtet)
git clone git@github.com:alexiosg111/asto.git

# In das Projektverzeichnis wechseln
cd asto
```

### Schritt 2: Projektstruktur verstehen

```
asto/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # Stylesheet für Design
├── README.md           # Projektübersicht
├── SETUP.md            # Diese Setup-Anleitung
└── .git/              # Git-Repository-Metadaten
```

## Lokal ausführen

### Methode 1: Direkt im Browser öffnen (am einfachsten)

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

**Oder**: Doppelklicken Sie auf `index.html` im Datei-Explorer.

### Methode 2: Lokaler Server (empfohlen für Entwicklung)

#### Option A: Mit Python 3

```bash
# Python 3 installiert prüfen
python3 --version

# Server starten
python3 -m http.server 8000
```

Besuchen Sie: `http://localhost:8000`

#### Option B: Mit Python 2

```bash
# Python 2 installiert prüfen
python --version

# Server starten
python -m SimpleHTTPServer 8000
```

Besuchen Sie: `http://localhost:8000`

#### Option C: Mit Node.js und http-server

```bash
# http-server global installieren (einmalig)
npm install -g http-server

# Server starten
http-server -p 8000
```

Besuchen Sie: `http://localhost:8000`

#### Option D: Mit PHP

```bash
# PHP installiert prüfen
php --version

# Server starten
php -S localhost:8000
```

Besuchen Sie: `http://localhost:8000`

#### Option E: Mit VS Code Live Server

1. Installieren Sie die "Live Server" Extension in VS Code
2. Rechtsklick auf `index.html`
3. "Open with Live Server" wählen

Die Seite öffnet sich automatisch im Browser und wird bei Änderungen neu geladen.

## Entwicklungsumgebung

### Empfohlene Editoren

- **Visual Studio Code**: https://code.visualstudio.com/
  - Extensions: Live Server, HTML CSS Support, Prettier
- **Sublime Text**: https://www.sublimetext.com/
- **Atom**: https://atom.io/

### VS Code Setup (empfohlen)

1. Installieren Sie VS Code
2. Installieren Sie diese Extensions:
   - Live Server
   - HTML CSS Support
   - Auto Rename Tag
   - Prettier

3. Öffnen Sie das Projekt:
   ```bash
   code .
   ```

### Browser DevTools

Für die Fehlersuche verwenden Sie die Browser-Entwicklertools:

- **Chrome/Edge**: `F12` oder `Strg+Shift+I` (Windows) / `Cmd+Option+I` (Mac)
- **Firefox**: `F12` oder `Strg+Shift+K` (Windows) / `Cmd+Option+K` (Mac)
- **Safari**: Aktivieren Sie in den Einstellungen unter "Entwicklermenü"

## Deployment

### GitHub Pages (Kostenlos & Einfach)

1. Pushen Sie Ihre Änderungen zu GitHub:
   ```bash
   git add .
   git commit -m "Ihr Commit-Nachricht"
   git push origin main
   ```

2. Gehen Sie zu: https://github.com/alexiosg111/asto/settings/pages

3. Unter "Source" wählen Sie:
   - Branch: `main`
   - Folder: `/ (root)`

4. Klicken Sie auf "Save"

5. Warten Sie 1-2 Minuten

6. Ihre Website ist jetzt verfügbar unter: `https://alexiosg111.github.io/asto/`

### Netlify (Drag & Drop)

1. Gehen Sie zu https://www.netlify.com/
2. Erstellen Sie ein Konto oder melden Sie sich an
3. Ziehen Sie den `asto` Ordner auf die Netlify-Seite
4. Die Website ist sofort live!

### Vercel

1. Gehen Sie zu https://vercel.com/
2. Importieren Sie das GitHub-Repository
3. Konfiguration ist automatisch (Standardwerte)
4. Klicken Sie auf "Deploy"

### AWS S3 (Statisches Website-Hosting)

1. Erstellen Sie einen S3-Bucket
2. Aktivieren Sie "Static website hosting"
3. Laden Sie alle Dateien hoch (außer `.git` Ordner)
4. Konfigurieren Sie Bucket-Policies für öffentlichen Zugriff

## Troubleshooting

### Problem: Seite wird nicht angezeigt

**Lösung:**
- Stellen Sie sicher, dass `index.html` und `styles.css` im selben Ordner liegen
- Prüfen Sie die Browser-Konsole auf Fehler (F12)
- Löschen Sie den Browser-Cache (`Strg+Shift+R` / `Cmd+Shift+R`)

### Problem: Styles werden nicht geladen

**Lösung:**
- Prüfen Sie, ob `styles.css` existiert
- Überprüfen Sie den Link in `index.html`:
  ```html
  <link rel="stylesheet" href="styles.css">
  ```
- Überprüfen Sie die Dateinamen auf Tippfehler

### Problem: Port 8000 ist belegt

**Lösung:**
- Verwenden Sie einen anderen Port:
  ```bash
  python3 -m http.server 3000
  ```
- Oder beenden Sie den anderen Prozess:
  ```bash
  # Mac/Linux
  lsof -ti:8000 | xargs kill -9

  # Windows
  netstat -ano | findstr :8000
  taskkill /PID <PID> /F
  ```

### Problem: Änderungen werden nicht angezeigt

**Lösung:**
- Hard Refresh im Browser: `Strg+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)
- Löschen Sie den Browser-Cache
- Verwenden Sie Live Server für automatische Updates

## Nützliche Ressourcen

- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS Referenz
- [W3Schools](https://www.w3schools.com/) - Tutorials
- [Can I Use](https://caniuse.com/) - Browser-Kompatibilität
- [CSS Tricks](https://css-tricks.com/) - CSS Tipps & Tricks

## Unterstützung

Bei Problemen oder Fragen:

1. Prüfen Sie diese SETUP.md
2. Lesen Sie die README.md
3. Öffnen Sie ein Issue auf GitHub: https://github.com/alexiosg111/asto/issues

Viel Spaß mit ASTO! 🎉