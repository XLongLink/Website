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
- Index: (```/pages/index.tsx```)
    - Spostare style in sezione a parte (fatto)

- Footbar: (```/components/footbar/footbar.tsx```)
    - Da creare, inderire link social    

- Autenticate button: (```/components/connect/connect.tsx```)
    - Spostare in (```/components/navbar/user.tsx```)
    - Modificare buttone + parte da visualizzare on login 

- Adri:
    - I componenti metitli sotto una sezione loro (```/components/index/features.tsx```)
    la parte di css va messa in un file a parte  (```./features.module.css```), va un po modificata, vedi esempio da altri componenti (fatto)
    - Fai in modo che è possibile scegliere l'orientamento passando il props "side" che ha valori "left" o "right" (fatto)


- Ordinare codice autenticazione

#### Auth token

Import `Storage` from `customHooks/useStorage` then:

```js
const { token, setToken } = useContext(Storage);
```

token can be used like state
setToken set the token in localstorage("authToken")
