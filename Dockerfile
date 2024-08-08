# Stage 1: Build the Vue/Vite application
FROM node:20.0.0-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build and compile next js
RUN yarn build

# Start Nginx
CMD ["yarn", "run", "start"]

