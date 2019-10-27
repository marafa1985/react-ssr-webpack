FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json","package-lock.json", "tsconfig.json", "webpack.config.js", "./"]
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start