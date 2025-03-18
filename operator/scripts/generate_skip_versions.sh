#!/bin/bash

# Input version
input_version=$1
csv_file=$2

# Extract major, minor, and patch versions
IFS='.' read -r major minor patch beta <<< "$input_version"

# Generate versions from 0 to beta-1
versions=""
for ((i=0; i<beta; i++)); do
  versions+="digitalai-release-operator.v$major.$minor.$patch.$i"$'\n'
done

# Convert versions to a YAML list format
versions_yaml=$(echo "$versions" | grep -v '^$' | jq -R -s -c 'split("\n")[:-1]')

# Add the versions list under spec.skips in the CSV file using yq
yq -i ".spec.skips = $versions_yaml" "$csv_file"
