# .github/actions/docker-cowsay/Dockerfile
FROM alpine:latest

# Agregar repositorio testing (donde está cowsay)
RUN echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories

# Instalar cowsay
RUN apk add --no-cache cowsay

# Copiar entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]