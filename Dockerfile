FROM node:current-alpine3.16
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./ /usr/src/app
RUN npm install && npm run build && npm cache clean --force
ENV NODE_ENV production
ENV STORM_MONITOR_PORT 3001
ENV PORT 80
EXPOSE 80
EXPOSE 3001
CMD ["npm", "start"]
