FROM node:latest
RUN mkdir /src
RUN npm install pm2 -g
WORKDIR /src
COPY /api/package*.json /src
#COPY /api /src
RUN npm install
EXPOSE 3000
#COPY /ecosystem.config.js /src
CMD ["pm2-runtime", "/src/index.js","--watch"]
#CMD node index.js