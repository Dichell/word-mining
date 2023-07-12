import express from 'express';
import cors from 'cors';
import { dbConnect } from './db';
import api from './api'
import { config } from './config';

const app = express()
const host = config.HOST
const port = config.PORT

app.use(express.json({ limit: 1024102420, type: "application/json" }))
app.use(cors())

app.use(api)

const run = async() => {
    await dbConnect()
    app.listen(port, host, () => { console.log(`Server runs on ${host}: ${port}`) })
}

run()
