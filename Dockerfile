# Step 1

FROM node:10-alpine as build-step

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build
 
# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/build /usr/share/nginx/html

#Explaination
#In Stage 1, we are copying our app code in the “app” folder and installing app dependencies from package.json file and creating production build using Node image.
#In the Stage 2, we are using nginx server image to create nginx server and deploy our app on it by copying build items from */app/build* folder to nginx server at */usr/share/nginx/html* location.
