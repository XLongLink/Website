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
                sx={{ margin: 5 }}
            >
                Descrizione di chi siamo
            </Typography>
            <div style={{ display: "grid", grid: "auto-flow / 50% 50%" }}>
                <Collaborator
                    side="left"
                    description="Descrizione del collaboratoreeeeeeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeee eeeeeeee e eeeeeeeeee "
                    image="Immagine del collaboratore"
                    haveDiscord={false}
                />
                <Collaborator
                    side="left"
                    description="Descrizione del collaboratore"
                    image="Immagine del collaboratore"
                />
                <Collaborator
                    side="right"
                    description="Descrizione del collaboratore"
                    image="Immagine del collaboratore"
                />
                <Collaborator
                    side="right"
                    description="Descrizione del collaboratore"
                    image="Immagine del collaboratore"
                />
                <Collaborator
                    side="left"
                    description="Descrizione del collaboratore"
                    image="Immagine del collaboratore"
                />
                <Collaborator
                    side="left"
                    description="Descrizione del collaboratore"
                    image="Immagine del collaboratore"
                />
            </div>
            <Footbar />
        </>

    )
}

export default About