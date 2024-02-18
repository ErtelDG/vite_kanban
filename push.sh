#!/bin/bash

# Tailwindcss optimizing for production
if npx tailwindcss -o src/build.css --minify; then
    echo "TailwindCSS optimization successful."
else
    echo "Error: TailwindCSS optimization failed. Exiting without further actions."
    exit 1
fi

# Git Pull to fetch changes from the remote repository
if git pull; then
    echo "Git pull successful."
else
    echo "Error: Git pull failed. Exiting without further actions."
    exit 1
fi

# Add all changes
git add .

# Get current date and time as Unix timestamp
unix_time=$(date +%s)

# Create commit message with Unix timestamp
commit_message="Commit: $unix_time"

# Execute the commit command with the generated commit message
if git commit -m "$commit_message"; then
    echo "Commit successful."
else
    echo "Error: Commit failed. Exiting without further actions."
    exit 1
fi

# Upload changes to the remote repository
if git push; then
    echo "Push to remote repository successful."
else
    echo "Error: Push to remote repository failed."
    exit 1
fi
