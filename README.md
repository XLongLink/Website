## Website di LongLink

For dependencies

```bash
npm install
```

To develop [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

## To Do list:

-   Generale:

1. Mettere logo LongLink al posto del nome
2. Mettere logo LL corto al posto del favicon
3. Dare titoli alle pagine

-   Home:

1. Pensare a che grafica far fare a cla
2. Modificare backgound
3. Ripenare frasi

-   News:

1. Backgound stesso colore di about
2. Caricare immagini di copertina da ./public/news
3. Data in copertina
4. Caricare body e creare demo layout in formato markdown

-   Docs:

1. Impostare colori tema scuro come sito LL
2. Settare il giusto re-indirizamanto quando si clicca il logo github
3. Fare che di apre con \_blank

-   About:

1. Aumentare dimensione icone
2. Creare feedback quando user entra con mouse
3. Impostare link ad icone con \_blank

-   Dashboard:

1. Creare base dashboard dove developers possono sperimentare con la demo.
   La demo di LL sarà 1 solo server dove tutti possono modificare dati per sperimentare

## Auth token

Import `Storage` from `customHooks/useStorage` then:

```js
const { token, setToken } = useContext(Storage);
```

token can be used like state
setToken set the token in localstorage("authToken")
