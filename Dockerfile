# -----------------------------
# Dependencies
# -----------------------------
FROM node:22-alpine AS deps

WORKDIR /app

# Required for Prisma on Alpine
RUN apk add --no-cache libc6-compat openssl

COPY package*.json ./
RUN npm ci

# -----------------------------
# Builder
# -----------------------------
FROM node:22-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat openssl

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build Next.js
RUN npm run build

# -----------------------------
# Production
# -----------------------------
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN apk add --no-cache libc6-compat openssl

# Create non-root user
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/next.config.* ./

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]