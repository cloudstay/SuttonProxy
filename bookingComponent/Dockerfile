FROM node:8.15.1

RUN mkdir -p /public/app/


WORKDIR /public/app/

COPY . /public/app/ 

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]