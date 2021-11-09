FROM nikolaik/python-nodejs:python3.9-nodejs14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./api/package*.json ./

RUN pip install numpy keras sklearn tensorflow

RUN npm install

# Bundle app source
COPY ./api .

EXPOSE 3000
CMD [ "node", "server.js" ]