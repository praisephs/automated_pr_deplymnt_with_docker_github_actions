# Use the official Node.js image from the Docker Hub.
# This image includes Node.js and npm.
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available) to the container.
COPY package*.json ./

# Install the application dependencies.
RUN npm install

# Copy the application source code to the container.
COPY . .

# Expose port 3000 to the outside world.
EXPOSE 3000

# Run the application.
CMD ["npm", "start"]
