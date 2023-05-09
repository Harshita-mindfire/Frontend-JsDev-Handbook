---
id: tm1a0lvg2k2ahhwh8xze2j2
title: Docker Compose
desc: ""
updated: 1683525654350
created: 1683525654350
---

## References

- [[Yaml|learning.yaml]]

## Docker compose

- used for composing a multi-container application.
- To start such application run: `docker-compose up`
- to build: `docker-compose build`, to build without cache: `docker-compose build --no-emit`
- If you make some changes to the project files, run docker-compose build then re-run the docker-compose up command.

## Syntax

```yml
version: '3'
services:
  service_name:
    image: image_name:tag #image specific service.
    ports:
      - host_port:container_port
    volumes:
      - host_path:container_path
    environment:
      - KEY=VALUE #env ariables
    ...
  service_name2:
    build: ./frontend #tells docker how to build this service. This links to Dockerfile of this service
    ports:
      - 3000:3000
```

## Database

if you want to run PostgreSQL with Docker, then the localhost alias will not work. In this case, your url will be DATABASE_URL="postgresql://postgres:postgres@postgres:5432/Todo?schema=public", where alias postgres will be the container name that runs a PostgreSQL image within Docker.
