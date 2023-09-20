# base image using nodejs
FROM node

# install angular cli
RUN npm install -g @angular/cli

WORKDIR /projects

# port foward
EXPOSE 4200