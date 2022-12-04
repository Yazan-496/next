# Install dependencies only when needed
FROM node:14-alpine

WORKDIR /app

COPY . .

CMD ["yarn", "dev"]
