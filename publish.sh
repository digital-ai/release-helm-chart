#!/usr/bin/env bash

if [ -z "$RELEASE_REGISTRY" ]; then
  echo "The '\$RELEASE_REGISTRY environment variable is not set."
  exit 1
fi
if [ -z "$RELEASE_EXPLICIT" ]; then
  echo "The '\$RELEASE_EXPLICIT environment variable is not set."
  exit 1
fi
./gradlew clean uploadArchives devSnapshot -x updateDocs -x test --stacktrace -Prelease.ignoreSuppliedVersionVerification=true --info
