const request = require("supertest");
const app = require("./app");
const mongoose = require("mongoose");
require('dotenv').config();

const dbConnection = async () =>{
    await mongoose.connect(`${process.env.MONGO_URI}/studentTest`);
    console.log(process.env.MONGO_URI);
}


dbConnection()
describe("POST /students", () => {
    test('should return status code 201', async () => {
        const response = await request(app).post("/api/v1/students").send({
            name: "Abhi",
            email: "abhi2bamnote@gmail.com",
            phone: "9876543210",
            address: "xyz abcd efgh"
        })

        expect(response.statusCode).toBe(201)
        
    })

    test('should return status code 201', async () => {
        const response = await request(app).post("/api/v1/students").send({
            name: "Some",
            email: "some@gmail.com",
            phone: "9876543211",
            address: "xyz abcd efgh"
        })
    
        expect(response.statusCode).toBe(201)
        
    })

    test('should return status code 400', async () => {
        const response = await request(app).post("/api/v1/students").send({
            name: "Some",
            email: "some@gmail.com",
            phone: "9876543210",
            address: "xyz abcd efgh"
        })
    
        expect(response.statusCode).toBe(400)
        
    })

    test('should return status code 400', async () => {
        const response = await request(app).post("/api/v1/students").send({
            name: "Some",
            email: "some@gmail.com",
            address: "xyz abcd efgh"
        })
    
        expect(response.statusCode).toBe(400)
        
    })
})

describe("Get /students/:id", () => {
    test('should return status code 200', async () => {
        const response = await request(app).get("/api/v1/students/4")

        expect(response.statusCode).toBe(200)
    })

    test('should return status code 200', async () => {
        const response = await request(app).get("/api/v1/students/5")

        expect(response.statusCode).toBe(200)
    })

    test('should return status code 404', async () => {
        const response = await request(app).get("/api/v1/students/10")
    
        expect(response.statusCode).toBe(404)
    })
    
    test('should return status code 404', async () => {
        const response = await request(app).get("/api/v1/students/11")
    
        expect(response.statusCode).toBe(404)
    })
})

describe("Get /students", () => {
    test('should return status code 200', async () => {
        const response = await request(app).get("/api/v1/students")

        expect(response.statusCode).toBe(200)
    })
})

describe("Put /students/:id", () => {
    test('should return status code 200', async () => {
        const response = await request(app).put("/api/v1/students/1").send({
            name: "TBH"
        })

        expect(response.statusCode).toBe(201)
    })

    test('should return status code 200', async () => {
        const response = await request(app).put("/api/v1/students/1").send({

        })

        expect(response.statusCode).toBe(201)
    })

    test('should return status code 200', async () => {
        const response = await request(app).put("/api/v1/students/1").send({
            random: "TTT"
        })

        expect(response.statusCode).toBe(201)
    })
})

describe("Delete /students/:id", () => {
    test('should return status code 200', async () => {
        const response = await request(app).delete("/api/v1/students/2")

        expect(response.statusCode).toBe(201)
    })

    test('should return status code 200', async () => {
        const response = await request(app).delete("/api/v1/students/10")

        expect(response.statusCode).toBe(201)
    })
})

afterAll(async () =>{
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    console.log(process.env.MONGO_URI);
});