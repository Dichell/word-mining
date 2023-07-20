import { Crud } from "../db";
import dictionaryModel from "../models/dictionary.model";

class DictionaryController extends Crud {
    constructor(){
        super(dictionaryModel)
    }

    

}

export default new DictionaryController