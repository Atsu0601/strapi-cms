FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g next@13.3
RUN npm ci --no-optional --only=production

COPY . .

EXPOSE 3000

CMD ["next", "dev"]
