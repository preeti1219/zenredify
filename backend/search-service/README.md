# Search Service

Port: 4002

## Endpoint

GET /api/search?q=atomic&genre=Self-Help

## Description

- Fetches books from Book Service
- Filters by:
  - Title
  - Author
  - Genre

## Environment Variables

PORT=4002
BOOK_SERVICE_URL=http://localhost:4001

## How to run

cd search-service
npm run dev

Make sure Book Service is running on 4001.

Test:

http://localhost:4002/api/search?q=atomic&genre=Self-Help
