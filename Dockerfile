FROM node:latest

WORKDIR /api
RUN npm install nodemon -g

COPY api/package.json ./

RUN npm i \
 && npm cache clean --force \
 && mv /api/node_modules /node_modules

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]