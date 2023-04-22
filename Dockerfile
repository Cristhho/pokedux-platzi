FROM node:alpine3.17 AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json ./

RUN npm i

FROM node:alpine3.17 AS runner

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm i react-scripts nodemon -g

ENV WATCHPACK_POLLING true
ENV WDS_SOCKET_HOST 127.0.0.1
ENV CHOKIDAR_USEPOLLING true
ENV PORT 3003

EXPOSE 3003

CMD [ "nodemon", "--exec", "npm", "start" ]