#!/bin/bash

# VSS Website - One Click Test Script
# Einfacher geht es nicht!

echo "🚀 VSS Website wird gestartet..."

# Prüfe Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js ist nicht installiert!"
    echo "📥 Bitte installiere Node.js zuerst: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js gefunden: $(node --version)"

# Installiere Dependencies falls nötig
if [ ! -d "node_modules" ]; then
    echo "📦 Installiere Dependencies..."
    npm install
fi

# Starte Website
echo ""
echo "🌐 Website wird gestartet..."
echo "📱 Öffne nach dem Start: http://localhost:3000"
echo ""
echo "⏹️  Zum Stoppen: Strg+C"
echo ""

npm run dev