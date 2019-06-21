FROM node:lts

WORKDIR /usr/app/t721
COPY ./ ./
ENV NODE_ENV=production
RUN npm install \
&& npm run build \
&& npm install -g serve

CMD ["serve", "-s", "build"]
