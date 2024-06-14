FROM node:20

WORKDIR .

RUN npm install http-server -g

COPY "./src/" .
COPY "./user-tracker.min.js" .

CMD [ "http-server", "./", "-p", "3000" ]

