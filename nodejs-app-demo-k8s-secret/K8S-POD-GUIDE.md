# Kubernetes Pod Deployment Guide

This guide explains how to deploy the Node.js Hello World application as a single Kubernetes Pod.

## Prerequisites

- Docker installed
- Kubernetes cluster running (minikube, Docker Desktop, or any K8s cluster)
- kubectl configured

## Step 1: Build Docker Image

First, build the Docker image locally:

```bash
cd /Users/sunildubey/Documents/sunil_doc/learning/docker_and_kubernetes/NodeJs-App/nodejs-hello-world

# Build the Docker image
docker build -t nodejs-hello-world:latest .

# Verify the image was created
docker images | grep nodejs-hello-world
```

### Test Docker Image Locally (Optional)

```bash
# Run the container
docker run -d -p 3000:3000 --name nodejs-test nodejs-hello-world:latest

# Test the application
curl http://localhost:3000
# Expected output: Hello World

curl http://localhost:3000/health
# Expected output: {"status":"ok","message":"Server is running"}

# Stop and remove the test container
docker stop nodejs-test
docker rm nodejs-test
```

## Step 2: Load Image to Kubernetes (if using minikube)

If you're using minikube, you need to load the image into minikube's Docker daemon:

```bash
# Option 1: Load the image
minikube image load nodejs-hello-world:latest

# Option 2: Use minikube's Docker daemon (alternative)
eval $(minikube docker-env)
docker build -t nodejs-hello-world:latest .
```

For Docker Desktop Kubernetes, skip this step as it uses the same Docker daemon.

## Step 3: Deploy the Pod

Deploy the pod using the pod.yaml manifest:

```bash
# Apply the pod configuration
kubectl apply -f pod.yaml

# Verify the pod was created
kubectl get pods

# Expected output:
# NAME                       READY   STATUS    RESTARTS   AGE
# nodejs-hello-world-pod     1/1     Running   0          10s
```

## Step 4: Check Pod Status

```bash
# Get detailed pod information
kubectl describe pod nodejs-hello-world-pod

# View pod logs
kubectl logs nodejs-hello-world-pod

# Follow logs in real-time
kubectl logs -f nodejs-hello-world-pod

# Check pod events
kubectl get events --sort-by=.metadata.creationTimestamp
```

## Step 5: Access the Application

### Method 1: Port Forwarding (Recommended for testing)

```bash
# Forward local port 8080 to pod port 3000
kubectl port-forward pod/nodejs-hello-world-pod 8080:3000

# In another terminal, test the application
curl http://localhost:8080
# Output: Hello World

curl http://localhost:8080/health
# Output: {"status":"ok","message":"Server is running"}
```

### Method 2: Execute Commands Inside Pod

```bash
# Get a shell inside the pod
kubectl exec -it nodejs-hello-world-pod -- sh

# Inside the pod, test the application
wget -qO- http://localhost:3000
# Output: Hello World

# Exit the pod
exit
```

### Method 3: Create a Service (for persistent access)

Create a service to expose the pod:

```bash
# Create a NodePort service
kubectl expose pod nodejs-hello-world-pod --type=NodePort --port=3000 --name=nodejs-service

# Get the service details
kubectl get svc nodejs-service

# For minikube, get the URL
minikube service nodejs-service --url

# For Docker Desktop, access via localhost and the NodePort
kubectl get svc nodejs-service -o jsonpath='{.spec.ports[0].nodePort}'
# Then access: http://localhost:<NodePort>
```

## Pod Configuration Explained

The `pod.yaml` file includes:

- **Container Image**: `nodejs-hello-world:latest` (local image)
- **Port**: Exposes port 3000
- **Environment Variables**: 
  - `PORT=3000`
  - `NODE_ENV=production`
- **Resource Limits**:
  - Memory: 128Mi (request) / 256Mi (limit)
  - CPU: 100m (request) / 200m (limit)
- **Health Checks**:
  - Liveness Probe: Checks `/health` endpoint every 10s
  - Readiness Probe: Checks `/health` endpoint every 5s
- **Restart Policy**: Always (pod will restart if it crashes)

## Troubleshooting

### Pod is not starting

```bash
# Check pod status
kubectl get pod nodejs-hello-world-pod

# View detailed information
kubectl describe pod nodejs-hello-world-pod

# Check logs
kubectl logs nodejs-hello-world-pod
```

### Common Issues:

1. **ImagePullBackOff**: Image not found
   - Solution: Ensure image is built and loaded into cluster
   - For minikube: `minikube image load nodejs-hello-world:latest`

2. **CrashLoopBackOff**: Application is crashing
   - Solution: Check logs with `kubectl logs nodejs-hello-world-pod`
   - Verify the application works in Docker first

3. **Pod stuck in Pending**: Resource constraints
   - Solution: Check cluster resources with `kubectl describe nodes`

## Update the Pod

To update the pod with changes:

```bash
# Delete the existing pod
kubectl delete pod nodejs-hello-world-pod

# Rebuild the Docker image
docker build -t nodejs-hello-world:latest .

# Load to minikube (if using minikube)
minikube image load nodejs-hello-world:latest

# Recreate the pod
kubectl apply -f pod.yaml
```

## Clean Up

Remove the pod and related resources:

```bash
# Delete the pod
kubectl delete pod nodejs-hello-world-pod

# Delete the service (if created)
kubectl delete service nodejs-service

# Verify deletion
kubectl get pods
kubectl get services
```

## Next Steps

For production deployments, consider using:
- **Deployment**: For managing multiple replicas and rolling updates
- **Service**: For load balancing and service discovery
- **Ingress**: For external HTTP/HTTPS access
- **ConfigMap/Secret**: For managing configuration and sensitive data

See the deployment examples in the `k8s/` directory (if available).

## Quick Reference Commands

```bash
# View pod
kubectl get pod nodejs-hello-world-pod

# View logs
kubectl logs nodejs-hello-world-pod

# Port forward
kubectl port-forward pod/nodejs-hello-world-pod 8080:3000

# Execute command in pod
kubectl exec nodejs-hello-world-pod -- node -v

# Get shell in pod
kubectl exec -it nodejs-hello-world-pod -- sh

# Delete pod
kubectl delete pod nodejs-hello-world-pod

# Recreate pod
kubectl apply -f pod.yaml