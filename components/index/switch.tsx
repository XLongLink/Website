import { useState } from "react"
import Box from '@mui/material/Box';
import styles from "./switch.module.css"

/*  Switch between Users and Developer 
    props:
        - onSwitch: -> get called when use switch the button
*/
function Switch(props: any) {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active)
        props.onSwitch(!active)
    }

    return (
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
                    <p className={styles.text}> Users </p>
                    <p className={styles.text}> Developer </p>
                </div>
            </div>
        </Box >
    )
}

export default Switch