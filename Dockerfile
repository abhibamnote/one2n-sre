FROM node:20.1.0 as base

WORKDIR /user/src/app
FROM base as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

# Builder stage
FROM development as builder

WORKDIR /usr/src/app
RUN rm -rf node_modules
RUN npm ci --only=production
CMD [ "npm", "start" ]

# Test stage

FROM base as test

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "test"]

# Deployment stage

FROM alpine:3.19.1 as production

RUN apk --no-cache add nodejs=20.11.1-r0 ca-certificates=20240226-r0
WORKDIR /root/
COPY --from=builder /usr/src/app ./
CMD [ "node", "src/index.js" ]