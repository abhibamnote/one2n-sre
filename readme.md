# One2N SRE Bootcamp

This is an assignment from SRE bootcamp from [One2N](https://playbook.one2n.in/sre-bootcamp/sre-bootcamp-exercises). This is a basic REST API with CRUD operation. Technologies used in this are NodeJS, Express and MongoDB. Docker has been used to containerize the application.

## Prerequisites

1. Docker v19 or later must be installed.

2. GNU make to run makefile.

Note: Windows users can use [this](https://gnuwin32.sourceforge.net/packages/make.htm) to install make.

```bash
make -v
```
## Run the project

There are two environment variables for this project:
1. PORT 
2. MONGO_URI

Both of these variables are mandatory.

There are 3 ways to run this application
1. run tests
```bash
make PORT=4545 MONGO_URI=mongodb://localhost:27017 test
```
2. run dev
```bash
make PORT=4545 MONGO_URI=mongodb://localhost:27017 dev
```
3. run prod
```bash
make PORT=4545 MONGO_URI=mongodb://localhost:27017 test
```

Note: To stop and delete the container use:
```bash
make delete-container
```

Use [this](https://www.postman.com/restless-robot-286687/workspace/one2n-bootcamp/collection/17462355-720aa868-f6fd-4327-8e49-20903149337f?action=share&creator=17462355) postman collection for API request lists and documentation.