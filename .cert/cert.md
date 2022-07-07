# SSL Cert for local development

Runing the react app with trusted ssl for development.

Use mkcert to solve local trusted SSL certification.

Documantation and guide at: <https://github.com/FiloSottile/mkcert> It's discribed how to use for Mac Os, Windows and Linux.

When the cert and key files are generated and stored on the root folder `.cert`

add or create on the root file `.env.developmen.local` and add these 2 lines

```text
SSL_CRT_FILE=./.cert/cert.pem
SSL_KEY_FILE=./.cert/key.pem
```

now run the app with `npm start`

NOTE: Don't use this for production
