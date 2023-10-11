Certainly! Here's a clear and concise `README.md` file for your RESTful Task Manager API:

# Task Manager API

This is a simple RESTful API for a task manager application built using Node.js and Express.js. The API allows users to perform CRUD operations (Create, Read, Update, Delete) on tasks. Each task has a title, description, and a completion status.

## Table of Contents

- [Getting Started](#getting-started)

   - [Prerequisites](#prerequisites)
   - [Installation](#installation)

- [Usage](#usage)

   - [Running the Server](#running-the-server)
   - [API Endpoints](#api-endpoints)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/jayesh-agrawat/task-manager-api.git
```

2. Navigate to the project directory:

```bash
cd task-manager-api
```

3. Install the required npm packages:

```bash
npm install
```

## Usage

### Running the Server

To start the server, use the following command:

```bash
npm start
```

The server will start and listen on port 3000 by default. You can change the port by setting the `PORT` variable in index.js.

### API Endpoints

The API provides the following endpoints for managing tasks:

- **GET /tasks**: Retrieve all tasks.
- **GET /tasks/:id**: Retrieve a single task by its ID.
- **POST /tasks**: Create a new task. Send a JSON body with `title`, `description`, and `completed` fields.
- **PUT /tasks/:id**: Update an existing task by its ID. Send a JSON body with updated fields.
- **DELETE /tasks/:id**: Delete a task by its ID.

API requests using `curl`:

- Retrieve all tasks:

```bash
curl http://localhost:3000/api/v1/tasks
```

- Retrieve a single task by ID:

```bash
curl http://localhost:3000/api/v1/tasks/1
```

- Create a new task:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"title": "Task 1", "description": "Description for Task 1", "completed": false}' http://localhost:3000/api/v1/tasks
```

- Update an existing task by ID:

```bash
curl -X PUT -H "Content-Type: application/json" -d '{"title": "Updated Task 1", "description": "Updated Description", "completed": true}' http://localhost:3000/api/v1/tasks/1
```

- Delete a task by ID:

```bash
curl -X DELETE http://localhost:3000/api/v1/tasks/1
```

API requests using `POSTMAN`:

- Use this POSTMAN API [collection](/collections/Task_Manager_API.postman_collection.json)
