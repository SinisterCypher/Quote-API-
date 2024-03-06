# Quote API

This project is a simple Express server that serves quotes.

## Modules

- Express: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Files

- server.js: This is the main file where the Express server is set up.
- data.js: This file contains an array of quotes that the server can serve.
- utils.js: This file contains utility functions that are used in server.js.
- public/: This directory contains the static files that the server serves.

## Usage

To run this project, you will need to add the following line to your command line:

```bash
npm start


API Endpoints GET /api/quotes/random: Returns a random quote.
GET /api/quotes: Returns all quotes, or quotes from a specified person.
POST /api/quotes: Adds a new quote to the server.
PUT /api/quotes/:id: Updates a quote on the server.
DELETE /api/quotes/:id: Deletes a quote from the server.


Contributing Pull requests are welcome. For major changes, please open and issue first to discuss what you would like to change.

