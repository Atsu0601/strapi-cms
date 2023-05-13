FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
# mysql モジュールをインストール
RUN npm install mysql
COPY . .
EXPOSE 1337
CMD ["npm", "start"]
