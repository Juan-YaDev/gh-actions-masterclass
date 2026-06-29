#!/bin/sh
# .github/actions/docker-cowsay/entrypoint.sh

MESSAGE="${1:-Muuu!}"

echo "🐮 Docker Action - Cowsay ejecutándose..."
echo "=========================================="
cowsay "$MESSAGE"
echo "=========================================="
echo "✅ Mensaje entregado por la vaca"