#!/usr/bin/env bash

if [ -z "$DOCKER_HUB_REPOSITORY" ]; then
  echo "The '\$DOCKER_HUB_REPOSITORY environment variable is not set."
  exit 1
fi

if [ -z "$RELEASE_APP_EXPLICIT" ]; then
  echo "The '\$RELEASE_APP_EXPLICIT environment variable is not set."
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
  --bundles docker.io/$DOCKER_HUB_REPOSITORY/release-operator-bundle:$RELEASE_APP_EXPLICIT \
  --tag docker.io/$DOCKER_HUB_REPOSITORY/release-operator-index:25.3 \
  --generate
docker build -f index.Dockerfile -t docker.io/$DOCKER_HUB_REPOSITORY/release-operator-index:25.3 .
docker push docker.io/$DOCKER_HUB_REPOSITORY/release-operator-index:25.3
