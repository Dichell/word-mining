import { connect } from "mongoose"
import { config } from "../config"
import crud from "./crud";

const dbConectionString = config.DB_CONNECTION_STRING

export const dbConnect = async () => {
    console.log('Connecting to DB...');
    try {
        if(!dbConectionString) throw new Error('db connection are not setup')
        await connect(dbConectionString)
        console.log('DB connected');
    }
    catch (error) {
        console.log('DB are not connected. Error: ', error);
    }
}

export const Crud = crud