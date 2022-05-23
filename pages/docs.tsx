import type { NextPage } from 'next'
import BodyStyle from '../styles/bodystyle'
import Example from "../components/docs/example"


const Dashboard: NextPage = () => {
    return (
        <>
            <BodyStyle background="white" />
            <Example
                title="pollo arrosto"
                subtitle="tutte le ore"
            />
            <Example
                title="capone arrosto"
                subtitle="solo alle 7"
            />
        </>
    )
}

export default Dashboard