FROM httpd:latest

COPY ./basic-web-app/ /usr/local/apache2/htdocs/

EXPOSE 8080
