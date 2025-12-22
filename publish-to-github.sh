#!/bin/bash

# Script to authenticate with GitHub and publish the Vexlo repository

echo "🔐 Authenticating with GitHub..."
echo "Please follow the prompts to authenticate."
gh auth login

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Authentication successful!"
    echo ""
    echo "📦 Creating GitHub repository and pushing code..."
    
    # Create repository and push
    gh repo create vexlo --public --source=. --remote=origin --push
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 Success! Your repository has been published to GitHub!"
        echo ""
        gh repo view --web
    else
        echo ""
        echo "❌ Failed to create repository. You may need to:"
        echo "   1. Create the repository manually on GitHub.com"
        echo "   2. Then run: git remote add origin https://github.com/YOUR_USERNAME/vexlo.git"
        echo "   3. Then run: git push -u origin main"
    fi
else
    echo ""
    echo "❌ Authentication failed. Please try again manually:"
    echo "   Run: gh auth login"
fi

