# CRUD API with Express.js, Mongoose, and MongoDB

This CRUD API was built using Express.js and Mongoose, utilizing a MongoDB database for managing a list of items. It also includes CORS support and uses dotenv for managing environmental variables.

## Prerequisites

Before you get started, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (and npm)
- [MongoDB](https://www.mongodb.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Installation

1. Clone the repository to your local machine:

```bash
    git clone https://github.com/kalio007/Task2-Endpoint
```

2. Navigate to the project directory:

```
    cd hng-task2
```

3. Install the project dependencies:

```bash
npm install
```

## Configuration

1. Create and modify an `.env` file in the project root to store your environmental variables. Example:

```env
PORT=3000
MONGODB_URI= <your mongodb uri>
```

- `PORT:` The port on which the API will run.
- `MONGODB_URL:` The URL for your MongoDB database.

## Running the API

To start the API, run the following command:

```bash
npm start
```

The API should now be running on the specified port (default is 3000).

## API Endpoints, Use Cases, and Error Handling

See [documentation]().

## Conclusion

You've now successfully set up and run the CRUD API. You can use the provided API endpoints to create, read, update, and delete items in your MongoDB database.

This `README.md` file provides a clear and structured guide on how to set up, run, and use the CRUD API created with Express.js, Mongoose, and MongoDB. It includes key topics like endpoints, configuration, error management, and additional details.
