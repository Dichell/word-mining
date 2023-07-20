# words-mining

Gives word translations, keeps & organizes history, provides exercises to remember words from the history, and offers statistics of exercise completion.

**DICTIONARY** (most of functionality finished)

Completed:
1. Translation of a word
2. Meaning
3. Pronouncing
4. Alternative translations
5. Examples
6. Last 50 translations

To-do:
Suggestions while typing
Correction if typing wrong
Picture for the word


**TRANSLATION HISTORY**

If user logged in, translation history is saving in DB. User can see all words history or see history by day/month etc.
In another way the history is saving in localstorage.


**EXERCISES** (in progress)

User can run an exercice to remember words from his history. All words, or words by day/month.
Suggests exercises based on wrong/right answers in previous exercices.

Some base exercises are available for all auth users. 
Most of the exercises are available for a paid subscription.


**PROGRESS**

Showed amount of translations, languiuges, failed/succes exercices and etc.
Some base statistics are available for all auth users. 
Most of statistics are available for a paid subscription.


**Technologies:**

Front: 
- Vue 3 / Vite / Pinia / Vuetify

Back: 
- NodeJS / ExpressJS

DB: 
- Mongo DB

Services:
- Azure Translator (translation, alternatives, examples)
- Youglish.com (pronouncing)
- Google OAuth
- OpenAI (description)


