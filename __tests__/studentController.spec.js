import { vi, it, describe, expect } from "vitest";
import request from 'supertest'
import { app } from "..";

describe("students",()=>{
    it("should Get all students",async()=>{
        const res = await request(app).get('/students')

        expect(res.status).toBe(200)
        expect(res.body.data).toEqual(
            expect.objectContaining({
                id:expect.any(Number),
                name:expect.any(String),
                class:expect.any(String),
                fees:expect.any(Number)

            })
        )
    })

    it("Should get single student with id", async()=>{
        const res = await request(app).get("/students/osjdsdsb")

        expect(res.status).toBe(200)
        expect(res.body.data).toEqual(
            expect.objectContaining({
                id:expect.any(Number),
                name:expect.any(String),
                class:expect.any(String),
                fees:expect.any(Number)

            })
        )
    })

    it("Should update fees for single student with id", async()=>{
        const id = "djshdjsd"
        const fees = 2000.00
        const res = await request(app).post("/students").send({id,fees})
        expect(res.status).toBe(200)
        expect(res.body.message).toBe("Record updated successifully")
    })


    it("Should delete a single student with id", async()=>{
        const res = await request(app).post("/students/hajhdaha")
        expect(res.status).toBe(200)
        expect(res.body.message).toBe("Record deleted successifully")
    })

})
