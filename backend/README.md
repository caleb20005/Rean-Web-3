# Rean Backend

## Setup

1. Copy `.env.example` to `.env`.
2. Install dependencies:
   `npm install`
3. Run in development:
   `npm run dev`

Default server URL: `http://localhost:5001`

## Database

- This backend now connects to Postgres; set `DATABASE_URL` in `.env` (defaults to `postgres://postgres:postgres@localhost:5000/clownrean`).
- On first start the server creates the `students` and `contacts` tables and seeds `students` from `src/data/students.json`.

## API Endpoints

- `GET /api/health`
- `GET /api/contacts`
- `POST /api/contacts`
- `GET /api/students/:id/dashboard`

## Sample Contact Payload

```json
{
  "parentName": "Jane Doe",
  "phone": "0712345678",
  "gradeLevel": "Grade 8",
  "message": "Need admission details"
}
```
