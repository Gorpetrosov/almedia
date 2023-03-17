# Base image
FROM node:16.15.0 As production

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
