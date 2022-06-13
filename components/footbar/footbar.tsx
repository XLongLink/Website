import React from "react";

import { Discord, Facebook, GitHub, Instagram, Linkedin, Twitter, YouTube } from "../icons"
import { Box, Typography } from '@mui/material';
import styles from './footbar.module.css'
import CopyrightIcon from '@mui/icons-material/Copyright';

/*  Navigation bar used at the bottom of the 
    webpage that display the social media 
    information and the logo of the site

    props:

*/

function Footbar() {

    return (
        <div className={styles.footbar}>
            <hr className={styles.hr} />
            <Box
                className={styles.linkbox}
            >
                <Discord url="https://discord.gg/cePXZtT8tz" className={styles.icon} sx={{ fontSize: ["2.4rem"] }} />
                <Facebook url="https://www.facebook.com/profile.php?id=100081241820430" className={styles.icon} sx={{ fontSize: ["2.4rem"] }} />
                <GitHub url="https://github.com/XLongLink" className={styles.icon} sx={{ fontSize: ["2.4rem"] }} />
                <Instagram url="https://www.instagram.com/xlonglink/" className={styles.icon} sx={{ fontSize: ["2.4rem"] }} />
                <Linkedin url="https://www.linkedin.com/company/longlink/" className={styles.icon} sx={{ fontSize: ["2.4rem"] }} />
                {/* <Telegram url="/" className={styles.icon} sx={{ fontSize: ["3rem","3rem","2.4rem","2.4rem","2.4rem"]}}/> */}
                <Twitter url="https://twitter.com/xLongLink" className={styles.icon} sx={{ fontSize: ["2.4rem"] }} />
                <YouTube url="https://www.youtube.com/channel/UCJaljchO8u1iU9ILlij7wsg/featured" className={styles.icon} sx={{ fontSize: ["2.4rem"] }} />
            </Box>

            <div className={styles.copyright}>
                <CopyrightIcon
                    className={styles.logoIcon}
                />
                <Typography
                    className={styles.logo}
                >
                    LL Technologies 2022
                </Typography>
            </div>
            <hr className={styles.hr} />


        </div >

    )
}

export default Footbar