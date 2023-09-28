# Business Card App Node Server

This Node server is designed for the "Business Card App," a web application that provides website management capabilities to business users. With this server, users can post content, edit existing content, and delete it. The server utilizes various Node.js libraries to enhance functionality and security.

## Features

- **Morgan**: Morgan is used to create a logger that prints all incoming requests to the console. It also saves all errors in a log file, providing detailed insights into server activity.

- **Chalk**: Chalk is employed to add color to console outputs, making it easier to distinguish between different types of log messages.

- **Cors**: The server uses CORS (Cross-Origin Resource Sharing) to allow HTTP requests only from authorized addresses, ensuring secure communication with the web application.

- **Joi**: Joi is utilized for data validation, ensuring that objects received from clients meet specified criteria. This helps maintain data integrity and security.

- **Bcryptjs**: Bcryptjs is used to encrypt a new user's password before storing it in the MongoDB database. It also enables password verification during login, enhancing user account security.

- **Json Web Token (JWT)**: JWT is employed to create encrypted tokens for user authentication. The payload object contains the following keys: `_id` (user ID), `isBusiness` (flag indicating if the user is a business user), and `isAdmin` (flag indicating if the user has administrative privileges).

- **Passport**: Passport is integrated to verify users connecting through Google. It provides a secure and convenient way for users to authenticate using their Google accounts.

- **MongoDB & Atlas**: The server uses two databases, one on-premises and one in the cloud, for data storage and retrieval.

- **Mongoose**: Mongoose is used to create models of Cards and Users, facilitating interaction with the MongoDB databases.

- **JSON Support**: The server allows receiving JSON in the body of HTTP requests, enhancing data exchange capabilities.

- **Configuration Files**: Configuration files for development and production environments are stored in the "config" folder, with "development.json" and "production.json" files.

## Getting Started

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/davidRokach/node.git
   ```

2. Install the required dependencies using npm:

   ```shell
   npm install
   ```

3. Configure your environment variables for the server based on the "config/development.json" or "config/production.json" file as needed.

4. To start the server, you have two options:

   - For **development**, run the following command:

     ```shell
     npm run dev
     ```

   - For **production**, run the following command:

     ```shell
     npm start
     ```

## Configuration

The server's configuration is managed through environment variables, which can be set using the appropriate JSON configuration file.

### Configuration Files

Create a folder named "config" and inside it, place the following JSON files:

#### development.json:

```json
{
  "NODE_ENV": "production",
  "PORT": 9191,
  "TOKEN_GENERATOR": "jwt",
  "DB_USER_NAME": "your atlas user",
  "DB_PASSWORD": "your atlas password",
  "GOOGLE_CLIENT_ID": "your google client id",
  "GOOGLE_CLIENT_SECRET": "your google client secret",
  "LOGGER": "morgan",
  "DB": "MONGODB",
  "DB_HOST": "your db host",
  "DB_NAME": "business-cards"
}
```

#### production.json:

```json
{
  "NODE_ENV": "development",
  "PORT": 8181,
  "TOKEN_GENERATOR": "jwt",
  "DB_USER_NAME": null,
  "DB_PASSWORD": null,
  "GOOGLE_CLIENT_ID": "your google client id",
  "GOOGLE_CLIENT_SECRET": "your google client secret",
  "LOGGER": "morgan",
  "DB": "MONGODB",
  "DB_HOST": "your db host",
  "DB_NAME": "business-cards"
}
```

Make sure to provide the necessary values in these configuration files.

## Authorization Endpoints

Here's a table of endpoints with their respective authorization requirements:

### Users

| Action                   | Authorization Method | URL          | Authorization                |
| ------------------------ | -------------------- | ------------ | ---------------------------- |
| Register User            | POST                 | /users       | all                          |
| Login                    | POST                 | /users/login | all                          |
| Get All Users            | GET                  | /users       | admin                        |
| Get User                 | GET                  | /users/:id   | The registered user or admin |
| Edit User                | PUT                  | /users/:id   | The registered user          |
| Change isBusiness Status | PATCH                | /users/:id   | The registered user          |
| Delete User              | DELETE               | /users/:id   | The registered user or admin |

### Cards

| Action          | Authorization Method | URL             | Authorization                          |
| --------------- | -------------------- | --------------- | -------------------------------------- |
| Get All Cards   | GET                  | /cards          | all                                    |
| Get User Cards  | GET                  | /cards/my-cards | The registered user                    |
| Get Card by ID  | GET                  | /cards/:id      | all                                    |
| Create New Card | POST                 | /cards          | Business user                          |
| Edit Card       | PUT                  | /cards/:id      | The user who created the card          |
| Like Card       | PATCH                | /cards/:id      | A registered user                      |
| Delete Card     | DELETE               | /cards/:id      | The user who created the card or admin |

## Usage

This server serves as the backend for the Business Card App web application. It provides RESTful API endpoints for managing content, user authentication, and more. Refer to the API documentation or the client-side application for detailed usage instructions.

## API Documentation

For detailed information on the available API endpoints and how to use them, please refer to the API documentation provided separately.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

---

Enjoy using the Business Card App Node Server! If you encounter any issues or have questions, please don't hesitate to contact us.

**Contact Information**:

- Email: davidrokach111@gmail.com

Thank you for choosing our server for your web application needs!

```

This README includes all the requested changes and provides a complete guide for using the Business Card App Node Server.
```
