import React from "react";

import { AppBar, Box, Toolbar, IconButton, Typography, Container, Menu, Button, MenuItem, SvgIcon } from '@mui/material';
import styles from './footbar.module.css'
import CopyrightIcon from '@mui/icons-material/Copyright';

/*  Navigation bar used at the bottom of the 
    webpage that display the social media 
    information and the logo of the site

    props:

*/


function DiscordIcon(props: any) {
    return (
        <SvgIcon className={props.className} sx={props.sx}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#8c9eff" d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z" /></svg>
        </SvgIcon>);
}

function FacebookIcon(props: any) {
    return (
        <SvgIcon className={props.className} sx={props.sx}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#039be5" d="M24,5C13.5,5,5,13.5,5,24s8.5,19,19,19s19-8.5,19-19S34.5,5,24,5z" /><path fill="#fff" d="M21.2,20.7V24h-4.7v5h4.7v13.7C22.1,42.9,23,43,24,43c0.9,0,1.7-0.1,2.6-0.2V29h4.9l0.8-5h-5.7v-2.7	c0-2.1,0.7-3.9,2.6-3.9h3.1V13c-0.5-0.1-1.7-0.2-3.9-0.2C23.8,12.8,21.2,15.2,21.2,20.7z" /></svg>
        </SvgIcon>);
}

function GitHubIcon(props: any) {
    return (
        <SvgIcon className={props.className} sx={props.sx}>
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" /></svg>
        </SvgIcon>);
}

function InstagramIcon(props: any) {
    return (
        <SvgIcon className={props.className} sx={props.sx}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" >
                <radialGradient cx="12" cy="12" gradientTransform="matrix(1 0 0 -1 0 24)" gradientUnits="userSpaceOnUse" id="TGwjmZMm2W~B4yrgup6jda" r="12">
                    <stop offset="0" stopColor="#efdcb1" />
                    <stop offset="0" stopColor="#f2e0bb" />
                    <stop offset="0.01" stopColor="#f2e0bc" />
                    <stop offset="0.36" stopColor="#f9edd2" />
                    <stop offset="0.7" stopColor="#fef4df" />
                    <stop offset="1" stopColor="#fff7e4" />
                </radialGradient>
                <radialGradient cx="10" cy="36" gradientTransform="matrix(.6435 -.7654 .5056 .4251 -16.92 32.282)" gradientUnits="userSpaceOnUse" id="TGwjmZMm2W~B4yrgup6jdb" r="49.65">
                    <stop offset="0.07" stopColor="#eacc7b" />
                    <stop offset="0.18" stopColor="#ecaa59" />
                    <stop offset="0.31" stopColor="#ef802e" />
                    <stop offset="0.36" stopColor="#ef6d3a" />
                    <stop offset="0.46" stopColor="#f04b50" />
                    <stop offset="0.52" stopColor="#f03e58" />
                    <stop offset="0.69" stopColor="#db359e" />
                    <stop offset="0.72" stopColor="#ce37a4" />
                    <stop offset="0.79" stopColor="#ac3cb4" />
                    <stop offset="0.88" stopColor="#7544cf" />
                    <stop offset="0.98" stopColor="#2b4ff2" />
                </radialGradient>
                <g id="Insta">
                    <path d="m18.22,23l-12.43,0c-2.63,0 -4.78,-2.15 -4.78,-4.78l0,-12.43c0,-2.63 2.15,-4.78 4.78,-4.78l12.43,0c2.63,0 4.78,2.15 4.78,4.78l0,12.43c0,2.63 -2.15,4.78 -4.78,4.78z" fill="url(#TGwjmZMm2W~B4yrgup6jdb)" id="svg_2" />
                    <path d="m12,5.31c2.2,0 2.44,0 3.3,0.05c0.81,0.05 1.24,0.19 1.53,0.29c0.38,0.14 0.67,0.33 0.96,0.62c0.29,0.29 0.48,0.57 0.62,0.96c0.1,0.29 0.24,0.72 0.29,1.53c0,0.81 0,1.05 0,3.25s0,2.44 -0.05,3.3c-0.05,0.81 -0.19,1.24 -0.29,1.53c-0.14,0.38 -0.33,0.67 -0.62,0.96c-0.29,0.29 -0.58,0.48 -0.96,0.62c-0.29,0.09 -0.72,0.24 -1.53,0.29c-0.81,0 -1.05,0 -3.25,0s-2.44,0 -3.3,-0.05c-0.81,-0.05 -1.24,-0.19 -1.53,-0.29c-0.38,-0.14 -0.67,-0.33 -0.96,-0.62c-0.29,-0.29 -0.48,-0.57 -0.62,-0.96c-0.1,-0.29 -0.24,-0.72 -0.29,-1.53c0,-0.81 0,-1.05 0,-3.25s0,-2.44 0.05,-3.3c0.05,-0.81 0.19,-1.24 0.29,-1.53c0.14,-0.38 0.33,-0.67 0.62,-0.96c0.29,-0.29 0.58,-0.48 0.96,-0.62c0.29,-0.09 0.72,-0.24 1.53,-0.29c0.81,0 1.05,0 3.25,0m0,-1.43c-2.2,0 -2.48,0 -3.35,0.05c-0.86,0.05 -1.43,0.19 -1.96,0.38c-0.52,0.19 -1,0.48 -1.43,0.96s-0.72,0.91 -0.96,1.43c-0.19,0.53 -0.33,1.1 -0.38,1.96c-0.05,0.86 -0.05,1.15 -0.05,3.35s0,2.49 0.05,3.35c0.05,0.86 0.19,1.43 0.38,1.96c0.19,0.53 0.48,1.01 0.96,1.43c0.43,0.43 0.91,0.72 1.43,0.96c0.52,0.19 1.1,0.33 1.96,0.38c0.86,0.05 1.15,0.05 3.35,0.05s2.48,0 3.35,-0.05c0.86,-0.05 1.43,-0.19 1.96,-0.38c0.52,-0.19 1,-0.48 1.43,-0.96c0.43,-0.43 0.72,-0.91 0.96,-1.43c0.19,-0.53 0.33,-1.1 0.38,-1.96c0.05,-0.86 0.05,-1.15 0.05,-3.35s0,-2.49 -0.05,-3.35c-0.05,-0.86 -0.19,-1.43 -0.38,-1.96c-0.19,-0.53 -0.48,-1.01 -0.96,-1.43s-0.91,-0.72 -1.43,-0.96c-0.52,-0.19 -1.1,-0.33 -1.96,-0.38c-0.86,-0.05 -1.15,-0.05 -3.35,-0.05l0,0z" fill="#fff" id="svg_3" />
                    <path d="m12,7.69c-2.39,0 -4.3,1.91 -4.3,4.31s1.91,4.31 4.3,4.31s4.3,-1.91 4.3,-4.31s-1.91,-4.31 -4.3,-4.31zm0,7.17c-1.58,0 -2.87,-1.29 -2.87,-2.87s1.29,-2.87 2.87,-2.87s2.87,1.29 2.87,2.87s-1.29,2.87 -2.87,2.87z" fill="#fff" id="svg_4" />
                    <circle cx="16.31" cy="7.69" fill="#fff" id="svg_5" r="0.86" />
                </g>
            </svg>
        </SvgIcon>);
}

function LinkedinIcon(props: any) {
    return (
        <SvgIcon className={props.className} sx={props.sx}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#0288d1" d="M8.4,15L8.4,15L8.4,15c2.8,0,4.6-2,4.6-4.5C12.9,7.9,11.3,6,8.5,6S4,7.9,4,10.5C4,13,5.7,15,8.4,15z" /><rect width="9" height="26" x="4" y="17" fill="#0288d1" /><path fill="#0288d1" d="M44,26.5c0-5.2-4.3-9.5-9.5-9.5c-3.1,0-5.8,1.4-7.5,3.7V17h-9v26h9V28l0,0c0-2.2,1.8-4,4-4s4,1.8,4,4v15h9	C44,43,44,28,44,26.5z" /></svg>
        </SvgIcon>);
}

function TelegramIcon(props: any) {
    return (
        <SvgIcon className={props.className} sx={props.sx}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z" /><path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z" /><path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z" /><path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z" /></svg>
        </SvgIcon>);
}

function TwitterIcon(props: any) {
    return (
        <SvgIcon className={props.className} sx={props.sx}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" /></svg>
        </SvgIcon>);
}

function YoutubeIcon(props: any) {
    return (
        <SvgIcon className={props.className} sx={props.sx}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z" /><path fill="#FFF" d="M20 31L20 17 32 24z" /></svg>
        </SvgIcon>);
}

function Footbar() {

    return (
        <div className={styles.footbar}>
            <hr className={styles.hr} />
            <Box sx={{
                xs: { position: "static" },
                sm: { position: "static" },
                md: {},
                lg: {},
                xl: {}
            }}
                className={styles.linkbox}
            >
                <IconButton
                    edge="start"
                    aria-label="discord"
                    className={styles.icon}
                    href="https://discord.gg/cePXZtT8tz"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <DiscordIcon className={styles.icon} />
                </IconButton>

                <IconButton
                    edge="start"
                    aria-label="discord"
                    className={styles.icon}
                    href="https://www.facebook.com/profile.php?id=100081241820430"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <FacebookIcon className={styles.icon} />
                </IconButton>

                <IconButton
                    edge="start"
                    aria-label="discord"
                    className={styles.icon}
                    href="https://github.com/XLongLink"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <GitHubIcon className={styles.icon} />
                </IconButton>

                <IconButton
                    edge="start"
                    aria-label="discord"
                    className={styles.icon}
                    href="https://www.instagram.com/xlonglink/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <InstagramIcon className={styles.icon} />
                </IconButton>

                <IconButton
                    edge="start"
                    aria-label="discord"
                    className={styles.icon}
                    href="https://www.linkedin.com/company/longlink/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <LinkedinIcon className={styles.icon} />
                </IconButton>

                {/* <IconButton
                                size="large"
                                edge="start"
                                aria-label="discord"
                                className={styles.icon}
                                href="/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <TelegramIcon/>
                            </IconButton>    */}

                <IconButton
                    edge="start"
                    aria-label="discord"
                    className={styles.icon}
                    href="https://twitter.com/xLongLink"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <TwitterIcon className={styles.icon} />
                </IconButton>

                <IconButton
                    edge="start"
                    aria-label="discord"
                    className={styles.icon}
                    href="https://www.youtube.com/channel/UCJaljchO8u1iU9ILlij7wsg/featured"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <YoutubeIcon className={styles.icon} />
                </IconButton>
            </Box>

            <div className={styles.copyright}>
                <CopyrightIcon
                    sx={{
                        xs: { position: "static" },
                        sm: { position: "static" },
                        md: { display: "flex", mr: 2 },
                        lg: { display: "flex", mr: 2 },
                        xl: { display: "flex", mr: 2 }
                    }}
                    className={styles.logoIcon}
                />
                <Typography
                    sx={{
                        fontSize: "1.2rem",
                        xs: {},
                        sm: {},
                        md: { display: "flex", mr: 2 },
                        lg: { display: "flex", mr: 2 },
                        xl: { display: "flex", mr: 2 }
                    }}
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