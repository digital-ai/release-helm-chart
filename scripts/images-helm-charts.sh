#!/bin/bash

mkdir -p ./build

docker run --rm \
  -e HOME=/opt/project \
  -v ./:/opt/project:rw \
  --entrypoint helm \
  xldevdocker/kuttl:latest \
  dependency update

docker run --rm \
  -v ./:/opt/project:rw \
  --entrypoint helm \
  xldevdocker/kuttl:latest \
  images get digitalai "/opt/project" -n digitalai \
   --values "/opt/project/tests/values/basic.yaml" \
   --values "/opt/project/tests/values/images.yaml" \
   -o yaml | sed -r "s:\x1B\[[0-9;]*[mK]::g" > "./build/external-dependencies-${1}.yaml"
