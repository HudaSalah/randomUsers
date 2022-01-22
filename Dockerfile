# Stage 1

FROM node:12.7-alpine AS build

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm i

COPY . /app

RUN npm run build

### STAGE 2: Run ###

FROM nginx:1.17.1-alpine

COPY --from=build /app/dist/randomUsers /usr/share/nginx/html

