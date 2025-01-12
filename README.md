# MERN Stack Calculator Demo Application

Welcome to the README for our Calculator Demo Application created using MongoDB, Express, React, Node.js Stack.

This document provides an overview of the project and instructions for setting it up locally.

![Calc Application](https://i.imgur.com/qdJKL85.png)

## Project Structure
Here's an overview of the project structure:

- `backend/`: Contains the `Express.js`, `MongoDB` server and API routes.
  - test-cases: written with `Jest` and `Supertest`.
- `frontend/`: Contains the `React.js` frontend application.
  - styling: `Tailwind` and [@phosphor-icons/react](https://phosphoricons.com/)
  - test-cases: written with `Jest` && `@testing-library/react`.
- `.env.example`: Example environment variable configuration.

## Prerequisites

Before you get started, ensure you have the following software installed on your system:

- Node.js and npm: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

Follow these steps to set up the application on your local machine.

### Setting up the Backend

1. Clone the [Application repository](https://github.com/ajibade3210/react-calc-demo) to your local machine.

2. Navigate to the backend directory.

```bash
cd server
```

3. Install the backend dependencies.

```bash
npm install
```

4. Rename **.env.example** file in the `server` directory to **.env** file. Or create a new **.env** and use the **.env.example** file as a reference.

5. Start the backend server.

```bash
npm start
```

The backend should now be running at `http://localhost:7000`.

Next...

### Setting up the Frontend

1. Open a new terminal and navigate to the client directory.

```bash
cd client
```

2. Install the frontend dependencies.

```bash
npm install
```

3. Rename **.env.example** file in the `client` directory to **.env** file. Or create a new **.env** and use the **.env.example** file content as a reference.

4. Start the frontend development server.

```bash
npm start
```

The frontend should now be running at `http://localhost:3000`.

You can now access the application in your web browser at `http://localhost:3000`.

## Running Test

### Backend
To run the test cases on the server side run the following command in your terminal:

```bash
npm run test
```

### Frontend
To run the test cases on the client side run the following command in your terminal:

```bash
npm run test
```
If No tests found related to files changed since last commit.

**Press a** to run all tests.

Please feel free to customize and expand the project structure to align with your specific requirements, and i am open to receiving your valuable feedback..
