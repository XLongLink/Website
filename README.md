## Website di LongLink

For dependencies

```bash
npm install
```

To develop [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

Prima di fare push su github
```bash
npm run build 
```
e controllare che non ci sono erroi


## To Do list:

-  Generale:

1. [fatto] Mettere logo LongLink al posto del nome
2. Mettere logo LL corto al posto del favicon
3. [fatto] Dare titoli alle pagine

- Appbar
1. Creare menù x telefono (copiare codice da sito babbo)
-> x ora Togliere bottone login da app
2. Far diventare più spessa x cell

- Footbar
1. [fatto]Sistemare x telefono
-> Centrare LL tecnologies al centro e sotto sempre centrato le icone pi?u grandi e cliccabili

-   Home:

1. Pensare a che grafica far fare a cla
2. [fatto] Modificare backgound
3. [ci pensa bongo] Ripensare frasi

-   News:

1. [fatto] Backgound stesso colore di about
2. Caricare immagini di copertina da ./public/news
3. Data in copertina
4. Caricare body e creare demo layout in formato markdown

-   Docs:

1. Impostare colori tema scuro come sito LL
2. Settare il giusto re-indirizamanto quando si clicca il logo github
3. Fare che di apre con \_blank

-   About:

1. [fatto] Aumentare dimensione icone
2. Creare feedback quando user entra con mouse
3. Impostare link ad icone con \_blank

-   Dashboard:

1. Creare base dashboard dove developers possono sperimentare con la demo.
   La demo di LL sarà 1 solo server dove tutti possono modificare dati per sperimentare

- Icone:
1. [fatto] Aggiunto sotto ./icons
2. Aggiungere url in props che si apre in _black
3. Aggiungere size in props che determina la grandezza

## Media
Per settare il css a media, usare.
```css
@media (max-width: 900px) {}
```

Per effettuare development, usare l'editor per telefoni di google

## Auth token

Import `Storage` from `customHooks/useStorage` then:

```js
const { token, setToken } = useContext(Storage);
```

token can be used like state

setToken set the token in localstorage("authToken")
