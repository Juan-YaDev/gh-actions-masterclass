#!/bin/sh
# .github/actions/docker-cowsay/entrypoint.sh

# $1 es el primer argumento pasado en el 'args' del action.yml
MESSAGE=$1

echo "Ejecutando dentro del contenedor Docker..."
echo "La versión de Alpine es:"
cat /etc/alpine-release || echo "No es Alpine"

# Ejecutamos la herramienta que viene en la imagen
cowsay "$MESSAGE"