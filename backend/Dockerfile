FROM nikolaik/python-nodejs:python3.9-nodejs14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./api/package*.json ./

#RUN apt update && apt install -y software-properties-common
#RUN add-apt-repository ppa:deadsnakes/ppa
#RUN apt-get install python3.9
#RUN apt-get install -y python3-pip
#RUN python --version


RUN pip install numpy keras sklearn tensorflow

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./api .

EXPOSE 3000
CMD [ "node", "server.js" ]