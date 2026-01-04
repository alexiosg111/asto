# VSS Website - Test Guide

## 🎯 VSS Website Test Environment

**Lokaler Test-Server starten:**
```bash
cd /home/engine/project/vss
npm install
npm run dev
```

**Website unter:** http://localhost:3000

## 📱 Test-Checkliste

### Desktop Tests:
- [ ] Hero-Sektion lädt korrekt
- [ ] Navigation funktioniert (scroll zu Sektionen)
- [ ] Services-Karten haben Hover-Effekte
- [ ] Contact-Buttons reagieren
- [ ] Responsive Design auf verschiedenen Bildschirmgrößen

### Mobile Tests:
- [ ] Mobile Navigation funktioniert
- [ ] Touch-Interaktionen reagieren
- [ ] Text ist lesbar auf kleinen Bildschirmen
- [ ] Buttons sind gut touchbar

### Performance Tests:
- [ ] Ladezeit < 3 Sekunden
- [ ] Animationen laufen smooth
- [ ] Keine Console-Errors

### Browser Compatibility:
- [ ] Chrome (empfohlen)
- [ ] Firefox
- [ ] Safari (falls verfügbar)
- [ ] Edge

## 🔧 Nach Testen

### Wenn Änderungen gewünscht:
1. Code in `/vss/` anpassen
2. `npm run dev` für Tests
3. `npm run build` für Production-Check
4. Bei Gefallen: Deployment-Guides nutzen

### Für Firma:
- VSS-Ordner komplett übergeben
- QUICK-DEPLOY.md als Anleitung nutzen
- Vercel-Deployment (5 Minuten)

## 📋 Dokumentation verfügbar:

- **README.md**: Projekt-Übersicht
- **QUICK-DEPLOY.md**: Sofort-Deployment Anleitung
- **DEPLOYMENT.md**: Vollständiger Deployment-Guide

---
**Status**: Version 0.1 - Test-bereit ✅