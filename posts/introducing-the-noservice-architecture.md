---
author: ''
date: 2020-04-29T18:57:48Z
title: Introducing the "noservice" architecture
secondary_title: Utilizing webpack 5 module federation in the back-end

---
Unless you've had your head under a rock, you've seen how Webpack 5 Module Federation has enabled true micro front-ends, allowing SPA's to share components between individually deployed services. This allows for "Service A" to deploy with an update to "Service A/SharedComponent", and "Service B" will receive the update to the shared component without a deployment of it's own.

This is arguably really cool, but Module Federation allows us to apply this idea to back-ends and work in what I'm calling a "noservice" architecture.

## What is a noservice?

![](/microservice-architecture.jpg)