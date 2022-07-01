import type { NextPage } from "next";
import Head from "next/head";
import Script from 'next/script'

import NavBar from "../components/navabar/navbar";
import Switch from "../components/index/switch";
import Title from "../components/index/title";
import Footbar from "../components/footbar/footbar";
import About from "../components/index/about";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title> Home</title>
                <meta charSet='utf-8' />
                <meta name='description' content='Official LongLink website' />
                <meta name='author' content='LongLink' />
                <meta name='keywords' content='longlink, xlonglink' />
            </Head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-W8T9TZZDTK"></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {
                    `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-W8T9TZZDTK');
                `}
            </Script>
            <NavBar />
            <Title />
            <About />
            <Switch />
            <Footbar />
        </>
    );
};

export default Home;
