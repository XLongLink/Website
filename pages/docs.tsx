import type { NextPage } from 'next'
import BodyStyle from '../styles/bodystyle'
import Example from "../components/docs/example"


const Dashboard: NextPage = () => {
    return (
        <>
            <BodyStyle background="white" />
            <Example></Example>
        </>
    )
}

export default Dashboard