import type { NextPage } from 'next'
import NavBar from '../components/navabar/navbar'
import Footbar from '../components/footbar/footbar'
import Collaborators from '../components/about/collaborators'
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
            <Collaborators/>
            <Footbar/>
        </>        
        
    )
}

export default About