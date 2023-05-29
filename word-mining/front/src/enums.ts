export enum LocalStorageKeys {
    PronouncingIsActive = "PronouncingIsActive",
    ReversoIsActive = "ReversoIsActive",
    SourceText = "SourceText",
    PronounceData = "PronounceData",
    TranslateStore = "TranslateStore",
    AlternativeTranslations = "AlternativeTranslations",
    ExamplesTranslations = "ExamplesTranslations"
}

export enum ErrorMessage {
    NoData = "Data was not received",
    NotFound = "Not found"
}

export enum Endpoint {
    Translate = 'translate',
    TranslateAlternative = 'translate-alternative',
    TranslateExamples = 'translate-examples'
}