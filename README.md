# Quote API

This project is a simple Express server that serves quotes realted to Computer Science.

## Modules

- Express: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

## Usage

To run this project, you will need to add the following line to your command line:

```bash
git clone <This_repoLink>
npm install 
npm start
```

> You can interact with this using using the webinterface provided in /public directory or use POSTMAN. 


This will start the server, and you can interact with it at http://localhost:4001.

## API Endpoints

- `GET /api/quotes/random`: Returns a random quote.
- `GET /api/quotes`: Returns all quotes, or quotes from a specified person.
- `POST /api/quotes`: Adds a new quote to the server.
- `PUT /api/quotes/:id`: Updates a quote on the server.
- `DELETE /api/quotes/:id`: Deletes a quote from the server.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
MIT
