#!/bin/bash

docker stop task23-container || true

docker rm task23-container || true

docker pull anastasiaakimova/task23:1.0

docker run -d \
  --name task23-container \
  -p 80:3000 \
  anastasiaakimova/task23:1.0

docker ps | grep task23-container
