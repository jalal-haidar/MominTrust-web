## Multi-stage Dockerfile for MominTrust-web (Vite + React)
# Builder stage
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --silent

# Copy sources and build
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Production stage (nginx to serve built assets)
FROM nginx:stable-alpine AS runtime
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
