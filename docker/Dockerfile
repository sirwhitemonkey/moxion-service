#node
FROM node:6.9.2

MAINTAINER moxion

#apt
RUN apt-get update
#gulp
RUN npm install gulp -g

#create dir
RUN mkdir -p /moxion/app
RUN mkdir -p /moxion/swagger

#set dir
WORKDIR /moxion

#copy modules
COPY Gulpfile.js .
COPY package.json .
COPY server.js .
COPY app app
COPY swagger swagger

#install dependencies
RUN npm install

#export port
EXPOSE 7004

#run node
CMD node server.js


