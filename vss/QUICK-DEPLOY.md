# 🚀 Quick Deployment für Vertical Service Solutions

## Sofort-Deployment (Vercel - Empfohlen)

### 1. Repository vorbereiten
```bash
# GitHub Repository erstellen
# Repository Name: vss-website
# Private Repository empfohlen

# Code zu GitHub
git remote add origin https://github.com/IHR-USERNAME/vss-website.git
git branch -M main
git push -u origin main
git push origin v0.1
```

### 2. Vercel Deployment (5 Minuten Setup)

**Schritt 1:** https://vercel.com aufrufen und mit GitHub anmelden

**Schritt 2:** "New Project" klicken

**Schritt 3:** Repository `vss-website` auswählen

**Schritt 4:** Konfiguration (automatisch erkannt):
```
Framework Preset: Next.js
Build Command: npm run build (automatisch)
Output Directory: .next (automatisch)
Install Command: npm install (automatisch)
```

**Schritt 5:** "Deploy" klicken

**Schritt 6:** Domain einrichten
- Settings > Domains
- `vertical-service-solutions.com` hinzufügen
- DNS Records beim Domain-Anbieter setzen:
  ```
  Type: CNAME
  Name: @
  Value: cname.vercel-dns.com
  
  Type: CNAME
  Name: www  
  Value: cname.vercel-dns.com
  ```

## 🔧 Alternative: Manuelle Installation

### Für eigenen Server:
```bash
# Server Setup
sudo apt update && sudo apt install -y nodejs npm nginx

# Website hochladen
scp -r vss/ user@server:/var/www/

# Auf Server
cd /var/www/vss
npm install
npm run build

# Mit PM2 starten
sudo npm install -g pm2
pm2 start npm --name "vss" -- start
pm2 save
pm2 startup
```

### Nginx Konfiguration:
```nginx
# /etc/nginx/sites-available/vss
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

# SSL mit Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d vertical-service-solutions.com -d www.vertical-service-solutions.com
```

## 📱 Für Mobile/Responsive Test

### Lokal testen:
```bash
cd vss
npm run dev
# http://localhost:3000 aufrufen
```

### Responsive Testen:
1. **Chrome DevTools**: F12 > Toggle Device Toolbar
2. **Test Resolutions**: 375px, 768px, 1024px, 1440px
3. **Touch Testing**: Mobile Geräte verwenden

## 🔄 Update Workflow

### Für Firma (einfach):
```bash
# 1. Änderungen lokal testen
npm run dev

# 2. Build testen  
npm run build

# 3. Bei Vercel: Automatisches Deployment bei Git Push
git add .
git commit -m "Update: Beschreibung der Änderung"
git push origin main
```

### Bei eigenem Server:
```bash
# Code aktualisieren
git pull origin main
npm install
npm run build

# PM2 neustarten
pm2 restart vss
```

## 🎯 Domain Migration von alter Website

### Schritt 1: Backup erstellen
```bash
# Alte Website sichern (falls noch aktiv)
cp -r /var/www/html /var/www/html-backup-$(date +%Y%m%d)
```

### Schritt 2: DNS umstellen
1. **TTL auf 300 Sekunden setzen** (eine Stunde vor Umstellung)
2. **DNS Records ändern:**
   ```
   A Record: @ -> <neue-server-ip> (bei eigenem Server)
   CNAME: @ -> cname.vercel-dns.com (bei Vercel)
   ```

### Schritt 3: SSL aktivieren
- **Vercel**: Automatisch
- **Eigener Server**: Let's Encrypt (siehe Konfiguration oben)

## 📊 Monitoring einrichten

### Kostenlos:
- **Vercel Analytics**: Eingebaut
- **Google Analytics**: In HTML einbinden
- **UptimeRobot**: https://uptimerobot.com für Uptime Monitoring

### Performance prüfen:
1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **WebPageTest**: https://www.webpagetest.org/

## ⚡ Schneller Test-Check

Nach Deployment prüfen:
- [ ] Website lädt unter der Domain
- [ ] Mobile Ansicht funktioniert
- [ ] Alle Links funktionieren
- [ ] Kontakt-Buttons funktionieren
- [ ] SSL Zertifikat aktiv (grünes Schloss)
- [ ] Google PageSpeed Score > 90

## 🆘 Support bei Problemen

### Häufige Lösungen:

**Website lädt nicht:**
- DNS Propagation prüfen: https://www.whatsmydns.net/
- Browser Cache leeren (Ctrl+F5)

**Build Fehler:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Performance langsam:**
- Vercel Analytics prüfen
- Image Größen optimieren
- Unnötige Dependencies entfernen

## 💡 Für die Firma

**Empfehlung:** Mit Vercel starten
- ✅ Kostenlos
- ✅ Einfach zu verwalten
- ✅ Automatische Updates
- ✅ Professionelle Performance
- ✅ SSL inklusive

**Bei Fragen:** Development Team kontaktieren oder Vercel Support nutzen.