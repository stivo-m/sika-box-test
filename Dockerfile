FROM node:20.11.1

ARG VITE_SERVER_URL=''
ENV VITE_SERVER_URL=$VITE_SERVER_URL

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .
RUN cp .env.example .env

RUN pnpm run build
EXPOSE 3000

CMD ["pnpm", "run", "preview"]
