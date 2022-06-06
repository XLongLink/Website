import type { NextPage } from 'next'
import NavBar from '../components/navabar/navbar'
import Footbar from '../components/footbar/footbar'
import Collaborator from '../components/about/collaborator'
import Description from '../components/about/description'
import BodyStyle from '../styles/bodystyle'


const About: NextPage = () => {

    return (
        <>
            <BodyStyle background="white" />
            <NavBar />

            <Description />

            <div style={{ display: "grid", grid: "auto-flow / 50% 50%" }}>
                <Collaborator
                    side="left"
                    name="Leonardo Saurwein"
                    description="Founder e Developer"
                    image="sau.jpg"
                    discord=""
                    github="https://github.com/sau1707"
                    linkedin=""
                />
                <Collaborator
                    side="left"
                    name="Adriano Saurwein"
                    description="Developer"
                    image="adri.jpg"
                    discord=""
                    github=""
                    telegram=""
                    twitter=""
                    instagram=""
                    facebook=""
                    youtube=""
                    linkedin=""
                />
                <Collaborator
                    side="right"
                    name="Leo Liviabella"
                    description="Marketing manager"
                    image="leo.jpg"
                    discord=""
                    github=""
                    telegram=""
                    twitter=""
                    instagram=""
                    facebook=""
                    linkedin=""
                />
                <Collaborator
                    side="right"
                    name="Claudio Casarella"
                    description="Graphic Designer"
                    image="cla.jpg"
                    discord=""
                    github=""
                    telegram=""
                    twitter=""
                    instagram=""
                    facebook=""
                    linkedin=""
                />
                <Collaborator
                    side="left"
                    name="Christian Corti"
                    description="Financial director"
                    image="corti.jpg"
                    discord=""
                    github=""
                    telegram=""
                    twitter=""
                    instagram=""
                    facebook=""
                    linkedin=""
                />
                <Collaborator
                    side="left"
                    name="Franceso Casarella"
                    description=""
                    image="fra.jpg"
                    discord=""
                    github=""
                    telegram=""
                    twitter=""
                    instagram=""
                    facebook=""
                    linkedin=""
                />
            </div>
            <Footbar />
        </>

    )
}

export default About