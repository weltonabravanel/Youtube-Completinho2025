FROM node:alpine AS builder
WORKDIR /app
ARG SITE_BASE_URL 
ARG YOUTUBE_API_KEY 

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js .
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"] 


