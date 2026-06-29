# .github/actions/docker-cowsay/Dockerfile
FROM alpine:latest

# Instalar cowsay
RUN apk add --no-cache cowsay

# Copiar entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]