import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import NavBar from '../components/navabar/navbar'
import { Style } from "../interfaces"
import Switch from "../components/index/switch"
import Title from "../components/index/title"


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
import Connect from "../components/authenticate/connect";
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
            <Title
                line_1="LongLink expand"
                line_2="the full"
                line_3="Algorand power"
            />
            <Switch onSwitch={(e: boolean) => {
                setActiveSection(e)
            }} />
            {activeSection ?
                <>
                    <h1> Primo</h1>
                </> : <>
                    <h1> Secondo</h1>
                </>
            }

        </>
    )
}

export default Home
