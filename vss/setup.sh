#!/bin/bash

# VSS Website Quick Setup Script
# Für einfache Installation und Tests

echo "🚀 VSS Website Setup wird gestartet..."

# Prüfe Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js ist nicht installiert. Bitte installiere Node.js 18+ zuerst."
    echo "   Download: https://nodejs.org/"
    exit 1
fi

# Zeige Node.js Version
echo "✅ Node.js Version: $(node --version)"

# Wechsle zum VSS Verzeichnis
cd "$(dirname "$0")"

# Prüfe package.json
if [ ! -f "package.json" ]; then
    echo "❌ package.json nicht gefunden. Bitte Script im vss/ Ordner ausführen."
    exit 1
fi

echo "📦 Installiere Dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installiert"
else
    echo "❌ Fehler bei der Installation"
    exit 1
fi

echo ""
echo "🎯 Setup abgeschlossen!"
echo ""
echo "🌐 Website testen:"
echo "   npm run dev"
echo ""
echo "📱 Website läuft dann unter:"
echo "   http://localhost:3000"
echo ""
echo "📋 Verfügbare Befehle:"
echo "   npm run dev     - Entwicklungsserver starten"
echo "   npm run build   - Production Build erstellen"
echo "   npm run start   - Production Server starten"
echo ""
echo "🧪 Test-Guide: Siehe TEST-GUIDE.md"