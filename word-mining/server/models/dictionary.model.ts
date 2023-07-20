import { Document, Schema, model } from 'mongoose';
import { Dictionary } from "../types";

interface IDictionary extends Dictionary, Document { }

// Create Schema
const DictionarySchema = new Schema({
        word: { type: String, required: true },
        freqvency: { type: Number, required: true },
        translations: { type: Object },
        source: { type: String, required: true },
        added: { type: String, required: true }
})

export default model<IDictionary>("dictionary", DictionarySchema, "dictionary");
