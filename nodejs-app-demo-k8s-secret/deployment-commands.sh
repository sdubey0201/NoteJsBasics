#!/bin/bash

# Correct command to create deployment and output to YAML
kubectl create deployment hello-world-nodejs-app-deployment \
  --image=sdubey321/hello-world-node-app:1.0.0 \
  --replicas=3 \
  --dry-run=client \
  -o yaml > hello-world-nodejs-app-deployment.yaml

echo "Deployment YAML file created: hello-world-nodejs-app-deployment.yaml"