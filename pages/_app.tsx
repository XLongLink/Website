import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import store from "../components/authenticate/redux/store";
import { useStorage, Storage } from '../customHooks/useStorage';

function MyApp({ Component, pageProps }: AppProps) {

    const [token, setToken] = useStorage("authToken")
    return (
        <Provider store={store}>
            <Storage.Provider value={{ token: token, setToken: setToken }}>
                <Component {...pageProps} />
            </Storage.Provider>
        </Provider>
    )
}

export default MyApp