import { maxWidth, padding } from '@mui/system';
import type { NextPage } from 'next'
import NavBar from '../components/navbar'

interface Style {
    [key: string]: React.CSSProperties;
}

const style: Style = {
    div_title: {
        position: "relative",
        display: "inline-grid",
        gridTemplateColumns: "50% 50%",
        width: "100%",
        height: "auto",
    },
    div_grid_title_left: {
        right: 0,
        paddingTop: 200,
        paddingBottom: 200,
    },
    div_grid_title_right: {
        paddingTop: 200,
        paddingBottom: 200,
        paddingLeft: 100,
        paddingRight: 100,
    },
    title_font: {
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 60,
        fontWeight: "bold",
        textAlign: "right",
        padding: 0,
        margin: 0,
        textShadow: "0px 4px 7px rgba(81,67,21,0.8)"
    },
    title_image_box: {
        border: "1px solid black",
        height: "100%"
    }
}

const Home: NextPage = () => {
    return (
        <>
            <NavBar />
            <div style={style.div_title}>
                <div style={style.div_grid_title_left}>
                    <p style={style.title_font}> LongLink synmplify</p>
                    <p style={style.title_font}> development into</p>
                    <p style={style.title_font}> Algorand ecosystem </p>
                </div>
                <div style={style.div_grid_title_right}>
                    <h1 style={style.title_image_box}> Qua ci va l'immagine </h1>
                </div>
            </div>
        </>
    )
}

export default Home
