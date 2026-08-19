FROM node:22-alpine AS node

WORKDIR /app

COPY --chown=node:node package*.json .

RUN npm ci

COPY --chown=node:node . .

EXPOSE 3000

#######################################################################
FROM node AS dev

RUN chown -R node:node /app

USER node

CMD ["node", "local-server.mjs"]