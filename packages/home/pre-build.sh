#!/bin/bash

# Get the latest commit hash
latest_hash=$(git rev-parse HEAD)

# Get the latest commit date
latest_date=$(git log -1 --format=%cd --date=iso)

# Create the JSON file
cat <<EOF > src/latest-commit.json
{
  "hash": "$latest_hash",
  "date": "$latest_date"
}
EOF

echo "latest-commit.json created successfully."

