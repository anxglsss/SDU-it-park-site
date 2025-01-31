# Use the official Node.js image as the base image
FROM node:23.6

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Expose port 5173
EXPOSE 5173

CMD ["npm", "start"]