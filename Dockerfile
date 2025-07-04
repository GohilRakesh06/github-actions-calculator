FROM node:18-alpine
 
RUN apk update && apk add --no-cache apache2

COPY . /var/www/localhost/htdocs


EXPOSE 80

CMD ["httpd","-D","FOREGROUND"]