import type { NextPage } from 'next'
import NavBar from '../components/navabar/navbar'
import Footbar from '../components/footbar/footbar'
import Collaborator from '../components/about/collaborator'
import { Typography } from '@mui/material';

const About: NextPage = () => {

    return (
        <>
            <NavBar />
            <Typography
                align='center'
                variant='h4'
            >
                Descrizione di chi siamo
            </Typography>
            <div>
                <Collaborator/>

            </div>
            <Footbar/>
        </>        
        
    )
}

export default About