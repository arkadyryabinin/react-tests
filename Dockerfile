FROM node:18.12.1-alpine

WORKDIR /app

COPY ./package.json .
COPY ./src .
COPY ./public .

RUN npm i



RUN apk update && \
    apk add --no-cache tzdata

EXPOSE 3000



CMD ["npm", "start"]
# ENTRYPOINT [ "npm" ]