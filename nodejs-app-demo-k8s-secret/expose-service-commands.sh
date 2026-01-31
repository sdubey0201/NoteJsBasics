#!/bin/bash

# Method 1: Create ClusterIP Service (internal access only)
kubectl expose deployment hello-world-nodejs-app-deployment \
  --port=3000 \
  --target-port=3000 \
  --name=hello-world-nodejs-service \
  --type=ClusterIP \
  --dry-run=client \
  -o yaml > hello-world-nodejs-service-clusterip.yaml

echo "ClusterIP Service YAML created: hello-world-nodejs-service-clusterip.yaml"

# Method 2: Create NodePort Service (external access via node port)
kubectl expose deployment hello-world-nodejs-app-deployment \
  --port=3000 \
  --target-port=3000 \
  --name=hello-world-nodejs-service-nodeport \
  --type=NodePort \
  --dry-run=client \
  -o yaml > hello-world-nodejs-service-nodeport.yaml

echo "NodePort Service YAML created: hello-world-nodejs-service-nodeport.yaml"

# Method 3: Create LoadBalancer Service (external access via load balancer)
kubectl expose deployment hello-world-nodejs-app-deployment \
  --port=3000 \
  --target-port=3000 \
  --name=hello-world-nodejs-service-lb \
  --type=LoadBalancer \
  --dry-run=client \
  -o yaml > hello-world-nodejs-service-loadbalancer.yaml

echo "LoadBalancer Service YAML created: hello-world-nodejs-service-loadbalancer.yaml"

echo ""
echo "To apply any of these services, run:"
echo "kubectl apply -f <service-yaml-file>"