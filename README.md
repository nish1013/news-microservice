# news-microservice

# News Management Node.js App using TypeScript and Dependency Injection

This is a simple News Management Node.js application developed using TypeScript and tsyringe. The app demonstrates the use of dependency injection with tsyringe to manage dependencies and provide a NewsService to handle news-related operations.

## Libs
1. [tsyringe](https://github.com/microsoft/tsyringe)
2. [reflect-metadata](https://github.com/rbuckton/reflect-metadata)

## Database 
- [MongoDB] (https://mongodb.com)

For Dev we use a MongoDB Free tier cluster
https://cloud.mongodb.com/

## Getting Started

To run the application locally, follow the steps below:

### Prerequisites

- Node.js and npm should be installed on your machine.
- Define following ENVIRONMENT variables.
   - DB_CONN_STRING
   - DB_NAME
   - COLLECTION_NAME

### Installation

1. Clone this repository to your local machine.

2. Install the required dependencies using npm:

   ```bash
   npm install
   ```

### Running the App

1. Build the TypeScript code using:

   ```bash
   npm run build
   ```

2. Start the application:

   ```bash
   npm start
   ```

The app should now be running locally at http://localhost:3000.

## Usage

The application provides simple APIs for managing news articles. The news data is loaded from a sample JSON file stored in the `data` folder.

### Endpoints

- `GET /news`: Get all news articles.
- `GET /news/:id`: Get a specific news article by ID.
- `POST /news`: Create a new news article. (Note: This is a sample app, and no data will be saved persistently.)
- `PUT /news/:id`: Update a news article by ID. (Note: This is a sample app, and no data will be saved persistently.)
- `DELETE /news/:id`: Delete a news article by ID. (Note: This is a sample app, and no data will be saved persistently.)

## References

1. [Mongodb with Typescript](https://www.mongodb.com/compatibility/using-typescript-with-mongodb-tutorial)

## Contributing

Contributions are welcome! Feel free to submit issues, suggest improvements, or open pull requests.

## License

This project is licensed under the [MIT License](LICENSE).