---
id: jhh8w9bib471ftwnu7vnxc5
title: Docker
desc: "Docker for beginners"
updated: 1683184540928
created: 1683184540928
---

A platform for building, running and shipping applications.

## Container

An isolated environment for running an application.
This is diiferent from a virtual machine.

- lightweight
- all containers uses the OS(to be specific: kernel\*) of the host
- start quickly
- need less hardware resources

\*kernel manages applications and hardware resources

### Virtual Machine

A VM is an abstraction of a machine(physical hardware). We use hypervisor to create and manage VM.

- each VM needs a full blown OS
- resource intensive, takes a portion of the physical hardware resources. For eg: if you have 8GB memory, it is divided among the VM

## volumes

Volumes in Docker are used to persist data generated or used by containers.

- When a container is destroyed or recreated, any data stored within the container's filesystem is lost.

- Volumes provide a way to store and share data between containers or between the host machine and containers, ensuring data persistence even when containers are removed or replaced.



## Commands

- docker network ls
- docker network inspect <network-name>

```bash
# run inside constainer terminal to check if able to connect.
/app  nc -vz rabbitmq 5672

rabbitmq (172.24.0.3:5672) open
```