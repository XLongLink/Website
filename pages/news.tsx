import type { NextPage } from 'next'
import BodyStyle from '../styles/bodystyle'
import NavBar from '../components/navabar/navbar'
import Footbar from '../components/footbar/footbar'
import ElementGrid from '../components/news/elementGrid'

const News: NextPage = () => {
    return (
        <>
            <NavBar />
            <BodyStyle background="white" />
            <ElementGrid />
            <Footbar />
        </>
    )
}

export default News