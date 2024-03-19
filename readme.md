# One2N SRE Bootcamp

This is an assignment from SRE bootcamp from [One2N](https://playbook.one2n.in/sre-bootcamp/sre-bootcamp-exercises). This is a basic REST API with CRUD operation. Technologies used in this are NodeJS, Express and MongoDB. Docker has been used to containerize the application.

## Prerequisites

1. NodeJS v20 or later must be installed.

2. Use the package manager npm to install this application.

3. MongoDB must be installed and running.

```bash
node -v
v20.7.0

mongo --version
MongoDB shell version v5.0.4

npm install
```

## Setup

Create a .env file and add these environment variables into it.

```env
PORT={PORT_NUMBER}
MONGO_URI={MONGO_URI}
```

## Run the project

Run test cases for the api

This will create a new test database and delete it after testing.

```bash
npm run test
```

Run the api in local development environment

```bash
npm run dev
```
Use [this](https://www.postman.com/restless-robot-286687/workspace/one2n-bootcamp/collection/17462355-720aa868-f6fd-4327-8e49-20903149337f?action=share&creator=17462355) postman collection for API request lists and documentation.