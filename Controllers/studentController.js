import mssql from 'mssql'
import { v4 } from 'uuid'
import { sqlConfig } from '../Config/config.js'

const pool = mssql.connect(sqlConfig)

export const getStudents = async (req, res) => {
    try{
    const conn = await pool
    if (conn.connected) {
        const results = await conn.request().execute("uspGetStudents")
        if (results.recordset.length == 0) {
            res.status(404).json("no database record found")
        }
        else {
            res.status(200).json({ data: results.recordset })
        }
    }
    else {
        res.status(500).json({ Error: "error connecting to db" })
    }
}
catch (error) {
    res.status(500).json(error)
}
}

export const getStudent = async (req, res) => {
    try{
    const { id } = req.params
    const conn = await pool
    if (conn.connected) {
        const results = await conn.request().input("id", id).execute("uspGetStudent")
        if (results.recordset.length == 0) {
            res.status(404).json("no database record found")
        }
        else {
            res.status(200).json({ data: results.recordset })
        }
    }
    else {
        res.status(500).json({ Error: "error connecting to db" })
    }

    res.json("success")
}
catch (error) {
    res.status(500).json(error)
}
}


export const registerStudent = async (req, res) => {
    try {
        const { name, studenClass, fees } = req.body
        const id = v4()
        const conn = await pool
        if (conn.connected) {
            const results = await conn.request()
            .input("id", id)
            .input("name", name)
            .input("class", studenClass)
            .input("fees", fees)
            .execute("uspCreateStudent")
            if (results.recordset.length == 0) {
                res.status(404).json("no database record found")
            }
            else {
                res.status(200).json({ data: results.recordset })
            }
        }
        else {
            res.status(500).json({ Error: "error connecting to db" })
        }

        res.json("success")
    }
    catch (error) {
        res.status(500).json(error)
    }
}


export const updateFees = async (req, res) => {
    try {
        const { id, fees } = req.body
        const conn = await pool
        if (conn.connected) {
            const results = await conn.request()
            .input("id", id)
            .input("fees", fees)
            .execute("uspUpdateFees")
            if (results.rowsAffected[0] == 1) {
                res.status(200).json({message:"Record updated successifully"})
            }
            else {
                res.json({data:results.recordset})
            }
        }
        else {
            res.status(500).json({ Error: "error connecting to db" })
        }

    }
    catch (error) {
        res.status(500).json(error)
    }
}


export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params
        const conn = await pool
        if (conn.connected) {
            const results = await conn.request().execute("uspDeleteStudent")
            if (results.rowsAffected[0] == 1) {
                res.status(204).json("Record deleted successifully")
            }
            else{
                res.json(results)
            }
        }
        else {
            res.status(500).json({ Error: "error connecting to db" })
        }

    }
    catch (error) {
        res.status(500).json(error)
    }
}