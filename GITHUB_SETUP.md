# Publishing to GitHub

Your code has been committed locally. Follow these steps to publish to GitHub:

## Option 1: Create Repository on GitHub Website

1. **Go to GitHub** and create a new repository:
   - Visit: https://github.com/new
   - Repository name: `vexlo` (or your preferred name)
   - Description: "Business automation website for UK SMBs"
   - Choose **Public** or **Private**
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

2. **Copy the repository URL** (it will look like: `https://github.com/yourusername/vexlo.git`)

3. **Run these commands in your terminal:**

```bash
cd /Users/juan/Desktop/Vexlo

# Add the remote (replace with your actual GitHub URL)
git remote add origin https://github.com/yourusername/vexlo.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Option 2: Use GitHub CLI (if installed)

If you have GitHub CLI (`gh`) installed:

```bash
cd /Users/juan/Desktop/Vexlo

# Create repo and push in one command
gh repo create vexlo --public --source=. --remote=origin --push
```

## After Publishing

Once pushed, you can:
- View your code at: `https://github.com/yourusername/vexlo`
- Connect to Railway for deployment
- Share the repository with others

## Railway Deployment

After pushing to GitHub:
1. Go to [Railway](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `vexlo` repository
5. Add a PostgreSQL service
6. Set environment variables
7. Railway will auto-deploy!

## Troubleshooting

If you get authentication errors:
- Use a Personal Access Token instead of password
- Or set up SSH keys for GitHub

If the remote already exists:
```bash
git remote set-url origin https://github.com/yourusername/vexlo.git
```

