const projectId = 'mining-words';

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Instantiates a client
const translate = new Translate({projectId});

export async function translateText(text: string, target: string) {

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  return translation
}
