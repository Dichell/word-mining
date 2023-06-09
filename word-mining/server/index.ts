import express from 'express';
import cors from 'cors';
import TranslationsController from './modules/translations/controller.translations';

const app = express()
const host = "localhost"
const port = 4130

app.use(express.json({ limit: 1024102420, type: "application/json" }))
app.use(cors())

app.post('/translate', TranslationsController.translateText)
app.post('/translate-alternative', TranslationsController.translateAlternative)
app.post('/translate-examples', TranslationsController.translateExamples)

app.post('/translate-history', TranslationsController.translateHistory)


app.listen(port, host, () => { console.log(`Server runs on ${host}: ${port}`) })
