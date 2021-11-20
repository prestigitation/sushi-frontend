FROM node:14-alpine

RUN npm i
RUN npm i -g @vue/cli
RUN npm i -g http-server

CMD [ "http-server", "-p", "8080" ]