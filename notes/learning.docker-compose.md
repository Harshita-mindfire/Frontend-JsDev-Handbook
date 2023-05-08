---
id: tm1a0lvg2k2ahhwh8xze2j2
title: Docker Compose
desc: ""
updated: 1683525654350
created: 1683525654350
---

## Syntax

```yml
version: '3'
services:
  service_name:
    image: image_name:tag
    ports:
      - host_port:container_port
    volumes:
      - host_path:container_path
    environment:
      - KEY=VALUE
    ...
```
