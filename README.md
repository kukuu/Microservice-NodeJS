# Micro-services

Microservices architecture is an approach to application development in which a large application is built as a suite of modular services. Each module supports a specific business goal and uses a simple, well-defined interface to communicate with other sets of services.

When you choose to build your application as a set of microservices, you need to decide how your application’s clients will interact with the microservices. With a monolithic application there is just one set of (typically replicated, load‑balanced) endpoints. In a microservices architecture, however, each microservice exposes a set of what are typically fine‑grained endpoints.

Services must handle requests from the application’s clients. Furthermore, services must sometimes collaborate to handle those requests. They must use an inter-process communication protocol. Use asynchronous messaging for inter-service communication. Services communicating by exchanging messages over messaging channels. Examples of asynchronous messaging technologies are Apache Kafka and RabbitMQ.

## This pattern has the following benefits:

Loose coupling since it decouples client from services

Improved availability since the message broker buffers messages until the consumer is able to process them

Supports a variety of communication patterns including request/reply, notifications, request/async response, publish/subscribe, publish/async response etc

## Solution patterns:

1. Swagger, NodeJS, Express Framework https://github.com/kukuu/Microservice-NodeJS/tree/master/microservices 

2. GraphQL, REACT & REDUX - https://github.com/kukuu/redux-graphQL-relay

## Architectural patterns:

1. https://github.com/kukuu/AGILITY/blob/master/white-paper/MICRO-SERVICES-oriented%20Architecture.png 

2. https://github.com/kukuu/AGILITY/blob/master/white-paper/SOA-2.png

### Contrast - SOA

1. https://github.com/kukuu/AGILITY/blob/master/white-paper/SOA-1.png 


