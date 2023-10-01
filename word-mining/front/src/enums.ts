export enum LocalStorageKeys {
    PronouncingIsActive = "PronouncingIsActive",
    ReversoIsActive = "ReversoIsActive",
    SourceText = "SourceText",
    PronounceData = "PronounceData",
    TranslateObject = "TranslateObject",
    AlternativeTranslations = "AlternativeTranslations",
    ExamplesTranslations = "ExamplesTranslations",
    TranslationsHistory = "translationsHistory",
    TranslateExplain = 'TranslateExplain'
}

export enum ErrorMessage {
    NoData = "Data was not received",
    NotFound = "Not found"
}

export enum Endpoint {
    Translate = 'translate/text',
    TranslateExplain = 'translate/explanation',
    TranslateAlternative = 'translate/alternative',
    TranslateExamples = 'translate/examples'
}