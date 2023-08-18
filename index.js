import express from 'express'
import cors from 'cors'
import { studentRouter } from './Routers/studentRouter.js'
const PORT = 3030
export const app = express()
app.use(express.json())
app.use(cors())

app.use('/students', studentRouter)



app.listen(PORT,()=>{
    console.log(`app Listening at http://localhost:${PORT}`);
})