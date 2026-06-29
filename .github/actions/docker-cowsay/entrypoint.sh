#!/bin/sh
# .github/actions/docker-cowsay/entrypoint.sh

MESSAGE="${1:-Muuu!}"

echo "🐮 Ejecutando dentro del contenedor Docker (Alpine)..."
echo "========================================"

# Ejecutar cowsay
cowsay "$MESSAGE"

echo "========================================"