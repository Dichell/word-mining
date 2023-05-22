import LanguageDetect from 'languagedetect';

const lngDetector = new LanguageDetect();
 
export function detectLanguage(value: string): string {
    const result = lngDetector.detect(value, 2)
    if(result && result.length > 0) {
        return result[0][0]
    }
    return "lang not detected"
}
// TODO try to another decode method