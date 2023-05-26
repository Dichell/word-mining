import express, {Request, Response} from 'express';
import cors from 'cors';
import { translateAzure } from './microsoftTranslate';

const app = express()
const host = "localhost"
const port = 4000

app.use(express.json({ limit: 1024102420, type: "application/json" }));
app.use(cors());

app.get('/', function (req: Request, res: Response) {
    res.send('Hello Team5')
    console.log(new Date(), ': get "/"')
  })

app.post('/translate', async function (req: Request, res: Response) {
    try{
        const response = await translateAzure(req.body.textData.text, req.body.textData.targetLang)
        res.send({data: response, status: "ok", message: ""})
    }
    catch(e){
        res.send({status: "error", message:"translate no received"})
        console.log('"/translate" error: ', e)
    }
  })

app.listen(
    port, 
    host, 
    () => {
        console.log(`Server runs on ${host}: ${port}`)
    }
);
