# Stage 1: Build Stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /usr/src/app

# Set environment variables
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN npm install --legacy-peer-deps --omit=dev && \
    npm install --global @dolphjs/cli && \
    npm cache clean --force && \
    rm -rf /tmp/*

# Copy the rest of the application code
COPY . .

# Uncomment the following line if you need to build the application
# RUN npm run build

# Stage 2: Runtime Stage
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy built files and dependencies from the build stage
COPY --from=build /usr/src/app .

COPY --from=build /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=build /usr/local/bin /usr/local/bin

# Set environment variables
ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

# Expose the application port
EXPOSE 3300

# Start the application
CMD ["npm",  "start"]