FROM node:16.2.0
RUN mkdir -p /usr/src/rita
WORKDIR /usr/src/rita
COPY package.json /usr/src/rita
RUN npm install
COPY . /usr/src/rita
CMD ["node", "src/bot.js"]