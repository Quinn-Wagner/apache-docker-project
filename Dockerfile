FROM httpd:latest

WORKDIR /usr/local/apache2/htdocs/

COPY ./basic-web-app/ .

EXPOSE 8080