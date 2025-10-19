## Multi-stage Dockerfile for MominTrust-web (Vite + React)
# Builder stage
## NOTE: for strict reproducibility we pin the base image to a digest.
FROM node:20-alpine@sha256:1ab6fc5a31d515dc7b6b25f6acfda2001821f2c2400252b6cb61044bd9f9ad48 AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --silent

# Copy sources and build
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Production stage (nginx to serve built assets)
FROM nginx:stable-alpine@sha256:30f1c0d78e0ad60901648be663a710bdadf19e4c10ac6782c235200619158284 AS runtime
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

# copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
