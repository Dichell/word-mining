import { connect } from "mongoose"
import { config } from "../config"
import crud from "./crud";

const dbConectionString = config.DB_CONNECTION_STRING

export const dbConnect = async () => {
    try {
        if(!dbConectionString) throw new Error('db connection are not setup')
        await connect(dbConectionString)
    }
    catch (error) {
        console.log('unexpected error ', error);
    }
}

export const Crud = crud