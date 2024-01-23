FROM node:20.11.0

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "src/index.js"]
