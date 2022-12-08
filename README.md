## Overview

Ticket selling app based on Microservices architecture built with Node, React, Docker and Kubernetes. This project focuses on the production ready back-end, a simple React front-end is made just for demonstration and testing purposes.

## What Technology I Used

I built a full stack application, I used a variety of technologies. On the frontend, I used React and Next JS to present content to users. Each service is created using NodeJS and Express. Data for each service is held in either a MongoDB database or Redis and NATS Streaming Server to communicate via events. The entire app is deployed and runs in Docker containers executed in a Kubernetes cluster. For routing the `ingress-nginx` controller is used. The app also uses Sendgrid as an email API provider. Finally, almost all of the code in this app is written with Typescript.

All services include a shared library as a dependency, called `@tick-it/common`, where all crucial type definitions live. This shared library is also included in this repository as a submodule.

List of microservices:

- `client` - Service responsible for the front-end.
- `auth` - Service responsible for authentication.
- `tickets` - Service responsible tickets.
- `orders` - Service responsible for orders.
- `payments` - Service managing payments.
- `expiration` - Service handling an order expiration time.
- `emails` - Service sending email confirmations after order completion.

## Development

To manage all the Docker containers inside the Kubernetes cluster and simplify development workflow the project uses Skaffold.

To run the app in development environment, make sure Docker, Kubernetes and Skaffold are installed on your local machine.

Before running the app environment variables inside the Kubernetes cluster must be set. Execute commands below to set these environment variables:

```bash
# kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=<your_stripe_key>

# kubectl create secret generic jwt-secret --from-literal=JWT_KEY=<your_jwt_key>

# kubectl create secret generic sendgrid-api-key --from-literal=SENDGRID_API_KEY=<your_sendgrid_key>
```

Be sure to expose the ingress-nginx-controller with:

```bash
# kubectl expose deployment ingress-nginx-contoller --target-port=80 --type=NodePort -n kube-system
```

Start the app with `skaffold dev`.

### Microservice Architecture Diagram

![alt text](https://github.com/abd0hrz/Ticketing_App_Microservices_Node_JS_React/blob/master/Microservice_architecture.png?raw=true)
