import type { NextPage } from 'next'
import Head from 'next/head'

import NavBar from '../components/navabar/navbar'
import Switch from "../components/index/switch"
import Title from "../components/index/title"
import Footbar from '../components/footbar/footbar'
import BodyStyle from '../styles/bodystyle'
import About from '../components/index/about'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title> Home</title>
            </Head>
            <BodyStyle background="white" />
            <NavBar />
            <Title />
            <About />
            <Switch />
            <Footbar />
        </>
    )
}

export default Home
