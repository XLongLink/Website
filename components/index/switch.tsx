import { useState } from "react"
import Box from '@mui/material/Box';
import styles from "./switch.module.css"
import Features from "./features";

function Switch() {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active)
    }

    //<p className={styles.title}> Discorver what LongLink can do</p>
    return (
        <div className={styles.div}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <div className={styles.toggle} onClick={() => toggle()}>
                    <div className={styles.switch} style={{ "transform": active ? "translateX(0)" : "translateX(100%)" }} />
                    <div className={styles.button}>
                        <p className={styles.text}> User </p>
                        <p className={styles.text}> Developer </p>
                    </div>
                </div>
            </Box >
            {active ?
                <>
                    <Features
                        side="left"
                        title="Standards"
                        line_1="used on multiple applications "
                        line_2="makes the experience "
                        line_3="much more interconnected"
                    />
                    <Features
                        side="right"
                        title="Safety"
                        line_1="work with the comunity"
                        line_2="to check application security"
                        line_3="and avoid scam"
                    />
                    <Features
                        side="left"
                        title="Data cotrol"
                        line_1="View your activities"
                        line_2="Check your data"
                        line_3=""
                        line_4=""
                    />
                    <Features
                        side="right"
                        title="Discover"
                        line_1="new applications"
                        line_2="created with LongLink"
                        line_3=""
                        line_4=""
                    />
                </> : <>
                    <Features
                        side="left"
                        title="Login & Authentication"
                        line_1="According to ARC-0014 standard"
                        line_2="with a single line of code"
                        line_3=""
                    />
                    <Features
                        side="right"
                        title="Longstorage"
                        line_1="An off-chain database"
                        line_2="to save user preferences"
                        line_3=""
                        line_4=""
                    />
                    <Features
                        side="left"
                        title="Users management"
                        line_1="Thanks to data and statistics"
                        line_2="visible in the dashboard"
                        line_3=""
                    />
                    <Features
                        side="right"
                        title="With 1 single line of code"
                        line_1="- access user assets"
                        line_2="- send any token or nft"
                        line_3="- call a smart contract"
                        line_4="... and much more"
                    />
                </>
            }
        </div>
    )
}

export default Switch