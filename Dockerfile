FROM node:16.15.1-alpine3.15 as builder

WORKDIR /app

COPY package.json package-lock.json /app/
RUN  npm ci --only=production

COPY . .

CMD ["node", "/app/index.js"]
