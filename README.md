# Vexlo Business Automation Website

A modern, high-converting landing page for Vexlo (vexlo.co.uk) - a business automation service for UK SMBs.

## Tech Stack

- **Frontend**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Railway-hosted)
- **ORM**: Prisma
- **Deployment**: Railway with Docker

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL (or use Docker Compose)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Vexlo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
```
DATABASE_URL="postgresql://user:password@host:port/database"
ADMIN_EMAIL="admin@vexlo.co.uk"
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASSWORD=""
NEXT_PUBLIC_SITE_URL="https://vexlo.co.uk"
```

4. Set up the database:
```bash
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker Development

To run the entire stack with Docker Compose:

```bash
docker-compose up
```

This will start:
- PostgreSQL database on port 5432
- Next.js application on port 3000

## Database Management

- View database: `npm run db:studio`
- Push schema changes: `npm run db:push`
- Create migration: `npm run db:migrate`

## Project Structure

```
vexlo/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── enquiry/          # Enquiry page
│   ├── services/         # Services page
│   └── privacy/          # Privacy policy
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/               # Prisma schema
└── public/               # Static assets
```

## Deployment to Railway

1. Connect your GitHub repository to Railway
2. Add a PostgreSQL service
3. Set environment variables in Railway dashboard
4. Railway will automatically detect the Dockerfile and deploy

## Features

- ✅ Modern, responsive design
- ✅ SEO optimised (meta tags, schema.org, sitemap)
- ✅ Form validation and rate limiting
- ✅ Email notifications
- ✅ Health check endpoint
- ✅ GDPR compliant privacy policy
- ✅ Docker support for easy deployment

## Environment Variables

See `.env.example` for all required environment variables.

## Development Workflow

Changes are automatically committed and pushed to the GitHub repository.

## License

Copyright © 2024 Vexlo. All rights reserved.


