import express from 'express';
import cors from 'cors';
import TranslationsController from './modules/translations/controller.translations';
import { googleOauthHandler } from './modules/oauth/auth.controller';
import { dbConnect } from './db';
import api from './api'

const app = express()
const host = "localhost"
const port = 4130

app.use(express.json({ limit: 1024102420, type: "application/json" }))
app.use(cors())

app.use(api)


    app.post('/translate', TranslationsController.translateText)

    app.post('/translate-explanation', TranslationsController.translateExplanation)

    app.post('/translate-alternative', TranslationsController.translateAlternative)
    app.post('/translate-examples', TranslationsController.translateExamples)

    app.post('/translate-history', TranslationsController.translateHistory)

    app.get('api/sessions/oauth/google', googleOauthHandler)


const run = async() => {
    await dbConnect()
    app.listen(port, host, () => { console.log(`Server runs on ${host}: ${port}`) })
}

run()
