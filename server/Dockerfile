FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Copy the rest of the backend files into the container
COPY . .

# the backend port
EXPOSE 7000

CMD ["npm", "start"]
