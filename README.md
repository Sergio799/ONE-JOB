# One Job

A comprehensive career discovery platform for finding job opportunities at top companies, startups, and organizations. Built with Next.js 16, Zustand for state management, and Tailwind CSS.

## Project Structure

```
├── frontend/                 # Next.js 16 full-stack app
│   ├── app/
│   │   ├── api/companies/   # API routes for company management
│   │   ├── page.tsx         # Main application page
│   │   ├── layout.tsx       # Root layout
│   │   └── globals.css      # Global styles
│   ├── lib/
│   │   └── store.ts         # Zustand state management
│   ├── public/
│   │   └── logo.svg         # App logo
│   ├── data/
│   │   └── companies.json   # Companies database
│   └── package.json
└── README.md
```

## Setup

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation & Development

```bash
cd frontend
npm install
npm run dev
```

App runs on `http://localhost:3000`

## Features

### Navigation Tabs
- **Platforms** - Job search platforms and career resources
- **Lists** - Google Sheets trackers for opportunity management
- **FAANG** - Direct links to FAANG company career pages
- **All Companies** - Centralized company database (under construction)
- **YC Startups** - Y Combinator companies directory
- **Contract Jobs** - Contract and freelance opportunities
- **Networking** - Networking templates and guides
- **H1B Sponsored** - 187+ companies sponsoring H1B visas with search
- **OPT & STEM OPT** - 205+ companies hiring OPT/STEM OPT candidates
- **Recruiter Email** - LinkedIn search strategies and email finder tools

### Key Features
- **Search Functionality** - Filter companies by name across searchable sections
- **Scrollable Lists** - Large datasets with smooth scrolling
- **Direct Career Links** - One-click access to company career pages
- **State Management** - Zustand for efficient global state
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Dark Sidebar** - Modern UI with dark sidebar and white content area

## API Endpoints

All endpoints are Next.js API routes:

- `GET /api/companies` - Get all companies
- `GET /api/companies/:id` - Get single company
- `POST /api/companies` - Create company
- `PATCH /api/companies/:id` - Update company
- `DELETE /api/companies/:id` - Delete company

## Data Structure

Companies are stored in `frontend/data/companies.json`:

```json
{
  "id": "uuid",
  "name": "Company Name",
  "careersUrl": "https://...",
  "category": "Tech",
  "isFaang": true,
  "description": "Company description"
}
```

## Tech Stack

- **Framework**: Next.js 16 with Turbopack
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Storage**: JSON file-based (can migrate to database)

## Future Enhancements

- Complete "All Companies" section with full database
- User authentication and saved lists
- Company details page with reviews
- Database migration (PostgreSQL/MongoDB)
- Email notifications for new opportunities
- Deploy to Vercel
