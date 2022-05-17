import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import NavBar from '../components/navabar/navbar'

interface Style {
    [key: string]: React.CSSProperties;
}

// component for switch
import Box from '@mui/material/Box';

function UserDevSwitch(props: any) {
    const [active, setActive] = useState(false);

    const style_dvs: Style = {
        toggle: {
            position: "relative",
        },
        button: {
            background: "rgba(255, 255, 255, 0.9)",
            backgroundColor: "#12181b",
            borderRadius: 30,
            width: 600,
            textAlign: "center",
            fontSize: 30,
            color: "#FFF",
            position: "relative",
            display: "inline-grid",
            gridTemplateColumns: "50% 50%",
        },
        activeSwitch: {
            background: "#2a2e35",
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            borderRadius: 30,
            transform: active ? "translateX(0)" : "translateX(100%)",
            transition: "transform 300ms",
            zIndex: 1
        },
        text: {
            zIndex: 2
        }
    }

    const toggle = () => {
        setActive(!active)
        props.onSwitch(!active)
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div style={style_dvs.toggle} onClick={() => toggle()}>
                    <div style={style_dvs.activeSwitch} />
                    <div style={style_dvs.button}>
                        <p style={style_dvs.text}> Users </p>
                        <p style={style_dvs.text}> Developer </p>
                    </div>
                </div>
            </Box >
        </>
    )
}


/* Home page*/
const style: Style = {
    div: {
        position: "relative",
        display: "inline-grid",
        gridTemplateColumns: "50% 50%",
        width: "100%",
        height: "auto",
    },
    div_grid_text_left: {
        padding: 10, // Non fa niente
    },
    div_grid_text_right: {
        marginTop: 200, // Non fa niente
        marginBottom: 200,
    },
    div_grid_image_left: {
        paddingTop: 200,
        paddingBottom: 200,
        paddingLeft: 100,
        paddingRight: 100,
    },
    div_grid_image_right: {
        paddingTop: 200,
        paddingBottom: 200,
        paddingLeft: 100,
        paddingRight: 100,
    },
    title_font_left: {
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 60,
        fontWeight: "bold",
        textAlign: "right",
        textShadow: "0px 4px 7px rgba(81,67,21,0.8)",
        padding: 0,
        margin: 0,
    },
    title_font_right: {
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 60,
        fontWeight: "bold",
        textAlign: "left",
        textShadow: "0px 4px 7px rgba(81,67,21,0.8)",
        padding: 0,
        margin: 0,
    },
    text_font_left: {
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 60,
        fontWeight: "normal",
        textAlign: "right",
        textShadow: "0px 4px 7px rgba(81,67,21,0.8)",
        padding: 0,
        margin: 0,
    },
    text_font_right: {
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 60,
        fontWeight: "normal",
        textAlign: "left",
        textShadow: "0px 4px 7px rgba(81,67,21,0.8)",
        padding: 0,
        margin: 0,
    },
    image_box: {
        border: "1px solid black",
        height: "100%"
    },
}

import { useDispatch, useSelector } from "react-redux";
import { UAParser } from "ua-parser-js";
import Authenticate from "../components/connect/authenticate";
import Connect from "../components/connect/connect";
import { useGetDashboardQuery } from "../components/redux/nextApi";
import { setIOS } from "../components/redux/walletSlice";

const Home: NextPage = () => {
    const [activeSection, setActiveSection] = useState(false)

    const { address: wallet } = useSelector((state: any) => state.wallet);
    const { currentData, isFetching, error } = useGetDashboardQuery(wallet, { skip: !wallet });
    const dispatch = useDispatch();

    useEffect(() => {
        const ClientUAInstance = new UAParser();
        const os = ClientUAInstance.getOS();
        let iOS = false;
        if (os?.name === "Mac OS" || os?.name === "iOS") {
            iOS = true;
        }
        dispatch(setIOS(iOS));
    }, [dispatch]);

    return (
        <>
            <Connect />
            <Authenticate />
            <NavBar />
            <div style={style.div}>
                <div style={style.div_grid_title_left}>
                    <p style={style.title_font_left}> LongLink synmplify</p>
                    <p style={style.title_font_left}> development into</p>
                    <p style={style.title_font_left}> Algorand ecosystem </p>
                </div>
                <div style={style.div_grid_image_right}>
                    <h1 style={style.image_box}> Qua ci va l'immagine </h1>
                </div>
            </div>
            <UserDevSwitch onSwitch={(e: boolean) => {
                setActiveSection(e)
            }} />
            {activeSection ?
                <>
                    <div style={style.div}>
                        <div style={style.div_grid_title_left}>
                            <p style={style.title_font_left}> Nickname </p>
                            <p style={style.text_font_left}> Chose an username </p>
                            <p style={style.text_font_left}> to use in all dApp </p>
                            <p style={style.text_font_left}> created with LongLink </p>

                        </div>
                        <div style={style.div_grid_image_right}>
                            <h1 style={style.image_box}> Qua ci va l'immagine </h1>
                        </div>

                        <div style={style.div_grid_image_left}>
                            <h1 style={style.image_box}> Qua ci va l'immagine </h1>
                        </div>
                        <div style={style.div_grid_title_right}>
                            <p style={style.title_font_right}> Avatar </p>
                            <p style={style.text_font_right}> Chose any NFT and </p>
                            <p style={style.text_font_right}> set it as your Avatar </p>
                        </div>
                    </div>
                </> : <>
                    <h1> Secondo</h1>
                </>
            }
            
        </>
    )
}

export default Home
