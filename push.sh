#!/bin/bash

# Git Pull to fetch changes from the remote repository
git pull

# Add all changes
git add .

# Get current date and time as Unix timestamp
unix_time=$(date +%s)

# Create commit message with Unix timestamp
commit_message="Commit: $unix_time"

# Execute the commit command with the generated commit message
git commit -m "$commit_message"

# Upload changes to the remote repository
git push
