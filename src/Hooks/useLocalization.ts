import { ILanguageType } from "../Types"

interface LocalizationDataset {
    ru: string | JSX.Element,
    en: string | JSX.Element
}

export class useLocalization {
    _language: ILanguageType
    constructor(language: ILanguageType) {
        this._language = language
    }
    localize = (data: LocalizationDataset) => {
        return data[this._language]
    }
}