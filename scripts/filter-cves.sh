#!/bin/bash

# List of CVEs to search for
cves=(
  "CVE-2023-37920"
  "CVE-2022-46337"
)

# Directory to search in
search_dir="24.1.10-2/"

# Loop through each CVE and grep for it in the specified directory
for cve in "${cves[@]}"; do
  echo "Searching for $cve..."
  grep -r "$cve" "$search_dir"
done
