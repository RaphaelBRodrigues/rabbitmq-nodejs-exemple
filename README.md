![RabbitMQ Logo](https://devoxsoftware.com/wp-content/uploads/2020/11/Rabbit-QL.png)

# RabbitMQ Nodejs Exemple
This repository contains a exemple of communication between two applications using RabbitMQ as a broker

The application `rabbitmq-producer` is a web api responsible for capture the client's message and send to the queue, and the `rabbitmq-consumer` is listening the broker and consuming its data

## Getting Started
* Start the docker containers
  * `docker-compose up`

* Use the `rest.http` file to send a request to producer application

## Acessing the Panel
  * Enters in the panel using a browser
    * http://localhost:15672/

  * Use the following credentials to login
    * Username
      * `rabbit`
    * Password
      * `test`

## References
  * [RabbitMQ](https://www.rabbitmq.com/)
  * [Amqplib](https://github.com/amqp-node/amqplib)
  * [Express](https://expressjs.com/pt-br/)
  * [TypeScript](https://www.typescriptlang.org/)
  * [AmqpLib](https://github.com/amqp-node/amqplib)



