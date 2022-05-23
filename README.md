# InTools website
> Made by [unccoderr](https://github.com/unccoderr)

## Content changing 

### Files
Inside [config folder](src/Config) are located localization files with variables.
* [indexScreen--config](src/Config/indexScreen--config.tsx) for IndexScreen
* [authScreen--config](src/Config/authScreen--config.ts) for AuthScreen and LoginScreen
* [builderScreen--config](src/Config/builderScreen--config.ts) for BuilderScreen
* [header--config](src/Config/header--config.ts) for IconedHeader component

### Adding Localization
To add new language to localization config and functionality, follow the instruction below:
1. Select language and find it's short code. As all instruction will be for belorussian, this code will be `by`
2. Add for each variable language alternative. 
```ts 
// for example let's add belorussian language to title's config
const title = {
    en: 'title in english',
    ru: 'title in russian',
    by: 'title in belorussian' // code: 'localiztion'
}
```
3. Change [ILanguageType](src/Types/ILanguageType.ts) file in order to allow use updated configs
```ts 
// and for type do the same 
enum ILanguageType {
     EN = 'en',
     RU = 'ru',
     BY = 'by' // code in uppercase = 'code'
}
```
4. Update functionality of [use Localization hook](src/Hooks/useLocalization.ts)
```ts
import { ILanguageType } from "../Types"

interface LocalizationDataset {
    ru: string | JSX.Element,
    en: string | JSX.Element,
    by: string | JSX.Element // code: string | JSX.Element
}
```
5. Success, you added new supported localization language!
