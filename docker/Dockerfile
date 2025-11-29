FROM node:lts as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN apt-get update && apt-get install -y brotli
RUN find dist -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" \) \
    | while read f; do \
        gzip -k --best "$f"; \
    done


FROM nginx:stable
COPY docker/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html