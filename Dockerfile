FROM node:latest as node

WORKDIR /app

COPY . .

CMD npm install

RUN npm run build --prod
