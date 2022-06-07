import type { NextPage } from 'next'
import BodyStyle from '../styles/bodystyle'
import NavBar from '../components/navabar/navbar'
import Footbar from '../components/footbar/footbar'
import ElementGrid from '../components/news/elementGrid'
import Head from 'next/head'

const News: NextPage = () => {
    return (
        <>
            <Head>
                <title> News </title>
            </Head>
            <BodyStyle background="#191919" />
            <NavBar />
            <ElementGrid />
            <Footbar />
        </>
    )
}

export default News