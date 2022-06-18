import { useState } from "react"
import Box from '@mui/material/Box';
import styles from "./switch.module.css"
import Features, { Feature } from "./features";

const User: Array<Feature> = [
    {
        title: "Standards",
        description: "Used on multiple applications makes the experience much more interconnected",
        image: "",
    },{
        title: "Safety",
        description: "Work with the comunity to check application security and avoid scam",
        image: "",
    },{
        title: "Data control",
        description: "View your activities, check your data",
        image: "",
    },{
        title: "Discover",
        description: "New applications created with LongLink",
        image: "",
    }
]

const Developer: Array<Feature> = [
    {
        title: "Login & Authentication",
        description: "According to ARC-0014 standard with a single line of code",
        image: "",
    },{
        title: "Longstorage",
        description: "An off-chain database to save user preferences",
        image: "",
    },{
        title: "User management",
        description: "Thanks to data and statistics visible in the dashboard",
        image: "",
    },{
        title: "With 1 single line of code",
        description: "Access user assets, send any token or nft, call a smart contract and much more",
        image: "",
    }
]

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
                    <Features features={User} />
                </> : <>
                    <Features features={Developer} />
                </>
            }
        </div>
    )
}

export default Switch