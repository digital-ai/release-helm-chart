#!/usr/bin/env bash

if [ -z "$RELEASE_EXPLICIT" ]; then
  echo "The '\$RELEASE_EXPLICIT environment variable is not set."
  exit 1
fi

# Check if the database directory exists and delete it if it does
if [ -d "database" ]; then
  rm -rf "database"
fi

# Check if the index.Dockerfile file exists and delete it if it does
if [ -f "index.Dockerfile" ]; then
  rm "index.Dockerfile"
fi

opm index add \
  --bundles docker.io/$RELEASE_REGISTRY/release-operator-bundle:$RELEASE_EXPLICIT \
  --from-index docker.io/$RELEASE_REGISTRY/release-operator-index:24.3 \
  --tag docker.io/$RELEASE_REGISTRY/release-operator-index:24.3 \
  --generate
docker build -f index.Dockerfile -t docker.io/$RELEASE_REGISTRY/release-operator-index:24.3 .
docker push docker.io/$RELEASE_REGISTRY/release-operator-index:24.3
