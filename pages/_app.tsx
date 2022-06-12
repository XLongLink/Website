import '../styles/globals.css'
import colors from '../styles/colors';
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import store from "../components/authenticate/redux/store";
import { useStorage, Storage } from '../customHooks/useStorage';
import { useEffect } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {

    // load colors as css variables
    useEffect(() => {
        for (const [key, value] of Object.entries(colors)) {
            document.documentElement.style.setProperty(`--${key}`, value);
        }
    }, [])


    const [token, setToken] = useStorage("authToken")
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="/favicon-16x16.png" />
            </Head>
            <Provider store={store}>
                <Storage.Provider value={{ token: token, setToken: setToken }}>
                    <Component {...pageProps} />
                </Storage.Provider>
            </Provider>
        </div>

    )
}

export default MyApp