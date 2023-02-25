FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Copy the rest of the project files/folders into the Docker container
COPY . .

# Set environment variables
ENV OPENAI_API_KEY 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
ENV DATABASE_URL postgresql://admin_user:dprKJzYUddmYFLS0Pi0peg@docker-it-2219.g95.cockroachlabs.cloud:26257/docker-it-prod?sslmode=verify-full

# Pull the environment variable file into the Docker container
COPY .env /usr/src/app

# Expose port
EXPOSE 3000

# Start the app
ENTRYPOINT ["npm", "run", "start"]
