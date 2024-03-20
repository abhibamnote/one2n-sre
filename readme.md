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

There are three environment variables for this project which needs to be added in .env file in same directory:
1. PORT 
2. MONGO_URI
3. ENVIRONMENT = test / production / developement

Both of these variables are mandatory.

To run the project run this command after setting up environment variables
```bash
docker-compose up
```

Use [this](https://www.postman.com/restless-robot-286687/workspace/one2n-bootcamp/collection/17462355-720aa868-f6fd-4327-8e49-20903149337f?action=share&creator=17462355) postman collection for API request lists and documentation.