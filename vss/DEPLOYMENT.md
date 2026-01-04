# VSS Website Deployment Guide

## 🎯 Deployment Options für Vertical Service Solutions

### Option 1: Vercel (Empfohlen für Next.js)
**Vorteile:**
- Optimiert für Next.js
- Automatisches Deployment bei Git Push
- Kostenlos für private Repositories
- Automatische HTTPS Zertifikate
- Einfache Domain-Konfiguration

**Setup Schritte:**
1. GitHub Repository erstellen
2. Vercel Account mit GitHub verknüpfen
3. Repository importieren
4. Framework Preset: Next.js wählen
5. Build Command: `npm run build`
6. Output Directory: `.next`
7. Automatisches Deployment

**Domain Setup:**
- In Vercel: Settings > Domains
- Domain hinzufügen: `vertical-service-solutions.com`
- DNS Records bei Domain-Anbieter:
  ```
  Type: CNAME
  Name: @
  Value: cname.vercel-dns.com
  
  Type: CNAME  
  Name: www
  Value: cname.vercel-dns.com
  ```

### Option 2: Netlify
**Vorteile:**
- Einfaches Setup
- Gute Performance
- Automatische Deployments
- Form Handling eingebaut

**Setup Schritte:**
1. Repository zu GitHub
2. Netlify Account erstellen
3. "New site from Git" wählen
4. Repository verbinden
5. Build Settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

### Option 3: Self-Hosted (Eigener Server)
**Für Firmen mit eigenem IT:**

**Vorbereitung:**
```bash
# Server Setup (Ubuntu/Debian)
sudo apt update
sudo apt install nodejs npm nginx

# PM2 für Process Management
sudo npm install -g pm2

# Repository clonen
git clone <repository-url>
cd vss

# Dependencies installieren
npm install

# Build erstellen
npm run build

# PM2 Config
pm2 start npm --name "vss-website" -- start
pm2 save
pm2 startup
```

**Nginx Konfiguration:**
```nginx
server {
    listen 80;
    server_name vertical-service-solutions.com www.vertical-service-solutions.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔄 Migration von der alten Website

### Schritt 1: Backup erstellen
```bash
# Alte Website sichern
sudo cp -r /var/www/html /var/www/html-backup-$(date +%Y%m%d)
```

### Schritt 2: DNS Konfiguration
1. **TTL reduzieren** (24h vor Migration)
2. **DNS Records vorbereiten**:
   ```
   A Record: @ -> <neue-server-ip>
   CNAME: www -> vertical-service-solutions.com
   ```

### Schritt 3: Testing
1. **Staging Environment** aufsetzen
2. **Alle Funktionen testen**
3. **Performance check**
4. **Mobile Responsiveness prüfen**

### Schritt 4: Go-Live
1. **DNS Records umstellen**
2. **SSL Zertifikat aktivieren**
3. **Monitoring aktivieren**
4. **Alte Website offline nehmen**

## 🚀 Empfohlener Workflow

### Für Entwicklung:
```bash
# Feature Branch erstellen
git checkout -b feature/new-section
# Development
npm run dev
# Testen
npm run build
# Commit & Push
git add .
git commit -m "feat: neue Sektion"
git push origin feature/new-section
```

### Für Production:
```bash
# Main Branch auf aktuellem Stand
git checkout main
git pull origin main

# Feature Branch mergen
git checkout feat/vss-modern-landing-industrial-hightech
git merge main
# Conflicts lösen falls nötig

# Build testen
npm run build

# Deploy (Vercel Beispiel)
git push origin feat/vss-modern-landing-industrial-hightech
# Vercel deployed automatisch
```

## 📊 Monitoring & Maintenance

### Performance Monitoring:
- **Vercel Analytics** (eingebaut)
- **Google PageSpeed Insights**
- **GTmetrix** für detaillierte Analyse

### Uptime Monitoring:
- **UptimeRobot** (kostenlos)
- **Pingdom**
- **StatusCake**

### Updates & Security:
```bash
# Regelmäßige Updates
npm audit
npm update

# Security check
npm audit fix

# Dependencies prüfen
npm outdated
```

## 💰 Kosten Übersicht

### Vercel (Empfohlen):
- **Personal**: Kostenlos
- **Pro**: $20/Monat (mehrere Team Members, Analytics)
- **Enterprise**: Custom Pricing

### Netlify:
- **Starter**: Kostenlos
- **Pro**: $19/Monat
- **Business**: $99/Monat

### Self-Hosted:
- **Server**: €10-50/Monat (je nach Traffic)
- **SSL Zertifikat**: Let's Encrypt (kostenlos)
- **Domain**: €10-15/Jahr

## 🔧 Troubleshooting

### Häufige Probleme:

**Build Fehler:**
```bash
# Cache leeren
rm -rf .next
npm install
npm run build
```

**Performance Issues:**
- Images optimieren
- Bundle size analysieren: `npm run build && npx @next/bundle-analyzer`
- CDN für statische Assets

**Domain Probleme:**
- DNS Propagation prüfen: https://www.whatsmydns.net/
- SSL Zertifikat Status prüfen
- Browser Cache leeren

## 📞 Support

Bei Problemen:
1. **Development Logs prüfen**
2. **Build Logs analysieren**
3. **Browser Developer Tools nutzen**
4. **Performance Tools einsetzen**

---

**Empfehlung für VSS:** Start mit Vercel (kostenlos), einfaches Setup, professionelle Performance. Bei hohem Traffic oder spezifischen Anforderungen auf Self-Hosted umstellen.