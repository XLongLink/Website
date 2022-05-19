import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import NavBar from '../components/navabar/navbar'
import { Style } from "../interfaces"
import Switch from "../components/index/switch"
import Title from "../components/index/title"
import TextBox from "../components/index/textBox"


/* Home page*/
const style: Style = {
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
                    <TextBox
                        title = "Nickname"
                        line_1 = "Chose an username"
                        line_2 = "to use in all dApp"
                        line_3 = "created with LongLink"
                    />
                    <TextBox
                        right = {true}
                        title = "Avatar"
                        line_1 = "Coose any NFT and"
                        line_2 = "set it as your Avatar"
                    />
                    <TextBox
                        title = "Full data controll"
                        line_1 = "Manage all the data"
                        line_2 = "of different dApp"
                        line_3 = "from a single console"
                        line_4 = "+ Statistics"
                    />
                </> : <>
                    <TextBox 
                        title = "User Authentication"
                        line_1 = "Authenticate an user"
                        line_2 = "with a single line"
                        line_3 = "of code"
                    />
                    <TextBox 
                        right = {true}
                        title = "variable Storage"
                        line_1 = "We offer a small"
                        line_2 = "database to store"
                        line_3 = "users variables"
                        line_4 = ""
                    />
                    <TextBox 
                        title = "Frontend - Backend"
                        line_1 = "Easy sdk offer the ability"
                        line_2 = "to controll users in the"
                        line_3 = "frontend and backend"
                    />
                    <TextBox 
                        right = {true}
                        line_1 = "Access to user data with"
                        line_2 = "a single line of code, get"
                        line_3 = "NFT, token, avatar, name,"
                        line_4 = ". . ."
                    />
                </>
            }

        </>
    )
}

export default Home
