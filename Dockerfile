# FROM node:10-alpine as build-step
# RUN mkdir -p /app
# WORKDIR /app
# COPY package.json /app
# RUN npm install
# COPY . /app
# RUN npm run build --prod

# FROM nginx:stable-alpine
# COPY --from=build-step /app/dist/UTS /usr/share/nginx/html

FROM node:14.20.1-alpine as build-step

# setup workspace
RUN mkdir -p /home/app
WORKDIR /home/app

# install angular
RUN npm install -g @angular/cli

# copy dependency files
COPY package.json /home/app/package.json

# install dependencies
RUN npm install

# RUN server
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll=2000", "--port", "4200", "--disable-host-check"]
