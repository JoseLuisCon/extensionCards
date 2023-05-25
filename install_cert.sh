#!/usr/bin/env bash
mkcert -install \
    -cert-file cert.pem \
    -key-file key.pem \
    localhost
cat cert.pem key.pem > node_modules/webpack-dev-server/server.pem
rm cert.pem key.pem