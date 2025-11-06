# Legal Document Search

A simple web app that allows you to search through a set of legal documents and get a summary of the documents.

## Features

- Search from a set of legal documents with a query
- Get a summary of the documents
- Get a list of matches for a given query

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Hot Toast (For notifications)
- React Lucide (For icons)
- Date Fns (For date formatting)
- clsx-for-tailwind (For tailwind classnames and merging them)

## Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```
VITE_API_BASE_URL=http://localhost:8000
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
# It should serve on http://localhost:5173
```

## Build

```bash
npm run build
```
