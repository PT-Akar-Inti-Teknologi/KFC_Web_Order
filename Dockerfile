# Stage 1: Build the Vue/Vite application
FROM node:20.0.0-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the application
FROM nginx:alpine

# Copy the Next.js build output from the build stage
COPY --from=build /app/.next /usr/share/nginx/html/_next
COPY --from=build /app/public /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

