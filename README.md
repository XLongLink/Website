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
    - sistemare spazio tra descrizioni nella parte user-developer
    - sistemare codice footbar, about

#### Auth token

Import `Storage` from `customHooks/useStorage` then:

```js
const { token, setToken } = useContext(Storage);
```

token can be used like state
setToken set the token in localstorage("authToken")
