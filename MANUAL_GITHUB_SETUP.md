# Manual GitHub Setup Instructions

Since there's a certificate issue with automated authentication, please follow these steps:

## Step 1: Authenticate with GitHub CLI

Run this command in your terminal:

```bash
gh auth login
```

You'll be prompted to:
1. Choose "GitHub.com"
2. Choose "HTTPS" or "SSH" (HTTPS is recommended)
3. Authenticate via web browser or token

**If web browser doesn't work**, choose the token option:
- Go to: https://github.com/settings/tokens
- Click "Generate new token (classic)"
- Select scopes: `repo` (full control of private repositories)
- Copy the token
- Paste it when prompted

## Step 2: Create Repository and Push

Once authenticated, run:

```bash
cd /Users/juan/Desktop/Vexlo

# Option A: Use the script
./publish-to-github.sh

# Option B: Manual commands
gh repo create vexlo --public --source=. --remote=origin --push
```

## Alternative: Manual Setup (No GitHub CLI)

If GitHub CLI doesn't work:

1. **Create repository on GitHub:**
   - Go to: https://github.com/new
   - Name: `vexlo`
   - Description: "Business automation website for UK SMBs"
   - Choose Public or Private
   - **Don't** initialize with README
   - Click "Create repository"

2. **Add remote and push:**
   ```bash
   cd /Users/juan/Desktop/Vexlo
   
   # Get your username from GitHub
   git remote add origin https://github.com/YOUR_USERNAME/vexlo.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

   You'll be prompted for credentials:
   - Username: Your GitHub username
   - Password: Use a Personal Access Token (not your password)
     - Create one at: https://github.com/settings/tokens
     - Select `repo` scope

## Verify

After pushing, visit:
- `https://github.com/YOUR_USERNAME/vexlo`

Your code should be there! 🎉

