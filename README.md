# RabbitMQ Nodejs Exemple
This repository contains a exemple of communication between two applications using RabbitMQ as a broker

The application `rabbitmq-producer` is a web api responsible for catch the client message and send to the queue, and the `rabbitmq-consumer` is listening the broker and consuming his data

## Getting Started
* Run the RabbitMQ container with `docker-compose`
  * `docker-compose up`

* Create a .env file based on .env.exemple inside the following folders `rabbitmq-consumer` and `rabbitmq-producer`

* Use the `rest.http` file to send a request to the product application

## Acessing the Panel
You can check the messages sent to RabbitMQ acessing the RabbitMQ `host` in the port `15672`
e.g http://localhost:15672/

