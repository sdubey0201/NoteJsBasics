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
ENV APP_NAME="DockerApp-k8s-pv-demo"
ENV PORT=3000
ENV CONFIGMAP1="CONFIGMAP1 from dockerfile of k8s-pv-demo"
ENV CONFIGMAP2="CONFIGMAP2 from dockerfile of k8s-pv-demo"
ENV DB_PASSWORD_NODE_DEMO="db_password from dockerfile of k8s-pv-demo"
ENV KEY1="key1 from dockerfile of k8s-pv-demo"
ENV KEY2="key2 from dockerfile of k8s-pv-demo"

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]