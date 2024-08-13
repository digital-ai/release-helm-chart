#!/usr/bin/env bash

# Check if the value ends with 'redhat-slim'
if [[ "$RELEASE_APP_EXPLICIT" != *"-redhat-slim" ]]; then
  echo "The '\$RELEASE_APP_EXPLICIT=$RELEASE_APP_EXPLICIT' environment variable does not end with '-redhat-slim'."
fi
if [ -z "$RELEASE_REGISTRY" ]; then
  echo "The '\$RELEASE_REGISTRY environment variable is not set."
  exit 1
fi
if [ -z "$RELEASE_EXPLICIT" ]; then
  echo "The '\$RELEASE_EXPLICIT environment variable is not set."
  exit 1
fi
./gradlew clean publishBundleToDockerHub -x updateDocs -x buildReadme -x test --stacktrace --info
