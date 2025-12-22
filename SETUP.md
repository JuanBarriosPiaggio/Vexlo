# Local Setup Guide

## Prerequisites

Make sure you have the following installed:
- **Node.js 20+** and npm
- **PostgreSQL** (or use Docker Compose)

## Option 1: Using Docker Compose (Recommended)

This is the easiest way to run everything locally:

```bash
# Start PostgreSQL and the app
docker-compose up

# The app will be available at http://localhost:3000
# PostgreSQL will be available at localhost:5432
```

## Option 2: Manual Setup

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
# Database (use your local PostgreSQL or Railway connection string)
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/vexlo"

# Admin email for notifications
ADMIN_EMAIL="admin@vexlo.co.uk"

# SMTP settings (optional - form will still work without email)
SMTP_HOST=""
SMTP_PORT="587"
SMTP_USER=""
SMTP_PASSWORD=""

# Site URL
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=""
```

### Step 3: Set Up Database

```bash
# Push the Prisma schema to your database
npx prisma db push

# (Optional) Open Prisma Studio to view data
npx prisma studio
```

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Troubleshooting

### Database Connection Issues

If you're using a local PostgreSQL:
1. Make sure PostgreSQL is running
2. Create a database: `createdb vexlo`
3. Update `DATABASE_URL` in `.env`

### Port Already in Use

If port 3000 is already in use:
```bash
# Use a different port
PORT=3001 npm run dev
```

### Prisma Client Not Generated

If you see Prisma errors:
```bash
npx prisma generate
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push Prisma schema to database
- `npm run db:studio` - Open Prisma Studio
- `npm run db:migrate` - Create a migration

## Testing the Form

1. Navigate to http://localhost:3000/enquiry
2. Fill out the form
3. Submit - it will save to your database
4. Check Prisma Studio: `npm run db:studio`

## Email Notifications

Email notifications are optional. If SMTP is not configured:
- Form submissions will still work
- Data will be saved to the database
- You'll see a console warning (this is expected)

To enable emails, configure SMTP settings in `.env`.

