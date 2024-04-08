# Use the official Node.js image with Alpine Linux as a base
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY ./package.json ./
COPY ./package-lock.json ./

# Install dependencies
RUN npm install

# Install sequelize-cli globally
RUN npm install -g sequelize-cli

# Copy the rest of the application code
COPY ./config ./config
COPY ./controllers ./controllers
COPY ./helpers ./helpers
COPY ./middleware ./middleware
COPY ./migrations ./migrations
COPY ./models ./models
COPY ./routes ./routes
COPY ./seeders ./seeders
COPY ./uploads ./uploads
COPY ./db ./db
COPY ./app.js ./app.js
COPY ./server.js ./server.js
COPY ./.env ./

# Command to run the application
CMD ["node", "server.js"]
