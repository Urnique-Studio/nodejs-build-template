FROM node:20.18.0-alpine3.19

WORKDIR /app

COPY package.json package-lock.json ./
ADD src ./src
COPY .env.* .

RUN npm ci --only=production

CMD npm start
