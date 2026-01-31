#!/bin/bash

# Script to update Docker registry secret for Kubernetes
# Replace <YOUR_NEW_DOCKER_HUB_TOKEN> with your actual token

echo "=== Updating Docker Registry Secret ==="
echo ""

# Step 1: Delete the old secret (if it exists)
