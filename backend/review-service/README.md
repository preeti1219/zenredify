# Review Service

Port: 4003

## Endpoints

POST /api/reviews/:bookId
GET /api/reviews/:bookId

## Example

POST /api/reviews/65abc123

{
"reviewText": "Amazing book!",
"rating": 5
}
