---
author: ''
date: 2020-04-29T18:57:48Z
title: Introducing the "noservice" architecture
secondary_title: Utilizing webpack 5 module federation in the back-end

---
Unless you've had your head under a rock, you've seen how Webpack 5 Module Federation has enabled true micro front-ends, allowing SPA's to share components between individually deployed services. This allows for "Service A" to deploy with an update to "Service A/SharedComponent", while "Service B" receive the update to the shared component without a deployment of it's own.

This is arguably really cool, but Module Federation allows us to apply this idea to back-ends and work in what I'm calling a "noservice" architecture.

## What is a noservice?

Before we jump into what a noservice is, let's review the microservice architecture through the lens of Apollo Federation. An Apollo Federated Graph consists normally of a single "Gateway" that is responsible for receiving a query from a client then delegating parts of that query out to your microservices to fulfill the request.

![](/microservice-architecture.jpg)

One issue with this type of approach comes when you have multiple microservices interacting with the same external services / databases, leading each microservice to load / fetch the same data.

The noservice architecture enables each team to work autonomously in their own repositories, just like in a microservice architecture, while sharing the same runtime at the gateway enabling us to not just get rid of network requests to microservices, but also share dataloaders throughout the execution of each query from the gateway to the noservices.

![](/no-service-architecture.jpg)