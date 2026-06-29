# .github/actions/docker-cowsay/Dockerfile
# Usamos una imagen base ligera que ya tiene cowsay
FROM docker/whalesay:latest

# Copiamos nuestro script
COPY entrypoint.sh /entrypoint.sh

# Le damos permisos de ejecución
RUN chmod +x /entrypoint.sh

# El punto de entrada
ENTRYPOINT ["/entrypoint.sh"]