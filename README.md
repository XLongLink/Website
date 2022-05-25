## Website di LongLink
For dependencies
```bash
npm install
```

To develop [http://localhost:3000](http://localhost:3000) 
```bash
npm run dev
```

#### To Do list:  
- Adri:
    - Creare la pagina About.tsx, va messa al posto di info nella menù bar
    - Deve contenere navabar
    - Deve contenere foot bar
    - Parte superiore deve avere una descrizione di chi siamo
    - Parte inferiore foto con profilo linkedin/discord/quel che è, affianco e descrizione, prendi esempio da https://astraincubator.com/about
    - Per il css fai un "display: grid" e poi "grid-template-columns: auto auto auto auto", per le colonne non so come fare, inventa qualcosa
    - Crea 2 componenti sotto la cartella ./components/about, 1 per la foto, 1 per testo. 
    - Nota: gli è scaduto il certificato ssl, accedi cmq che è sicura. 

#### Auth token

Import `Storage` from `customHooks/useStorage` then:

```js
const { token, setToken } = useContext(Storage);
```

token can be used like state
setToken set the token in localstorage("authToken")
