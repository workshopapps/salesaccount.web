# syntax=docker/dockerfile:1
# This image is based on the popular Alpine Linux project, available in the alpine official image. Alpine Linux is much smaller than most distribution base images (~5MB), and thus leads to much slimmer images in general.
ARG NODE_IMAGE_VERSION=19-alpine3.15
FROM node:current-alpine
ENV NODE_ENV=production
LABEL name='Chidubem' email='dubemnwabuisi@gmail.com'

# Create a working directory for Docker to use
WORKDIR /app

# Copy any file dependecies to the image
COPY package*.json ./

# Install app dependencies
RUN yarn install --production

# Bundle app source
COPY . .
CMD ["yarn", "start"]
EXPOSE 3000