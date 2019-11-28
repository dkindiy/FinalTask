FROM node:8.11.2

RUN mkdir -p /usr/src/todolist

COPY dist/TodoList /usr/src/todolist/dist/TodoList
COPY ssl /usr/src/todolist/ssl
COPY authMiddleware.js /usr/src/todolist/
COPY serverdata.json /usr/src/todolist/
COPY server.js /usr/src/todolist/server.js
COPY deploy-package.json /usr/src/todolist/package.json

WORKDIR /usr/src/todolist

RUN npm install

EXPOSE 80

CMD ["node", "server.js"]