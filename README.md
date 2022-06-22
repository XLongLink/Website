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

- Home:

1. Pensare a che grafica far fare a cla
2. [ci pensa bongo] Ripensare frasi
3. Sezione bianca telefono ridimensionare margine

- News:

1. Caricare immagini di copertina da ./public/news
2. Data in copertina
3. Caricare body e creare demo layout in formato markdown

- Docs:

1. Impostare colori tema scuro come sito LL
2. Settare il giusto re-indirizamanto quando si clicca il logo github
3. Fare che di apre con \_blank

- About:

1. Sistemare link icone

## Media

Per settare il css a media, usare.

```css
@media (max-width: 900px) {
}
```

Per effettuare development, usare l'editor per telefoni di google

## Auth token

Import `Storage` from `customHooks/useStorage` then:

```js
const { token, setToken } = useContext(Storage);
```

token can be used like state

setToken set the token in localstorage("authToken")

## Elemento news

per creare un nuovo elemento basta scrivere un file markdown nella sezione articles
che deve contenere un titolo, la data, un immagine che va messa nella sezione public/news, la dimensione dell'immagine che verrà visualizzata ed infine la descrizione che si vuole fare vedere quando si clicca sopra.
Dovrà uscira una roba del genere:
```mdx
---
title: "titolo"
date: "data"
image: "immagine.png"
size: "1x2" 
---

## Descrizione immagine

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget urna ut dui pretium scelerisque. Donec ac leo at elit scelerisque elementum. Quisque sit amet rhoncus neque.

```
