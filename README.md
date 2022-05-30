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
    - Parte inferiore foto con profilo linkedin/discord/quel che è, affianco e descrizione, prendi esempio da https://astraincubator.com/about
    - sistemare spazio tra descrizioni nella parte user-developer
    - sistemare codice footbar, navbar, about

#### Auth token

Import `Storage` from `customHooks/useStorage` then:

```js
const { token, setToken } = useContext(Storage);
```

token can be used like state
setToken set the token in localstorage("authToken")
