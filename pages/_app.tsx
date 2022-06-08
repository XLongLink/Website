import '../styles/globals.css'
import colors from '../styles/colors';
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import store from "../components/authenticate/redux/store";
import { useStorage, Storage } from '../customHooks/useStorage';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

    // load colors as css variables
    useEffect(() => {
        for (const [key, value] of Object.entries(colors)) {
            document.documentElement.style.setProperty(`--${key}`, value);
        }
    }, [])


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