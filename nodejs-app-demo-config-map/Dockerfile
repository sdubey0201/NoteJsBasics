# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY . .

# Set environment variables (can be overridden at runtime)
ENV APP_NAME="DockerApp"
ENV PORT=3000
ENV CONFIGMAP1="CONFIGMAP1 from dockerfile"
ENV CONFIGMAP2="CONFIGMAP2 from dockerfile "

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]