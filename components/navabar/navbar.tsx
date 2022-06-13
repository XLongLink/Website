import React from "react";
import Image from "next/image"
import Link from 'next/link';

import { AppBar, Box, Toolbar, Typography, Container, Button, Menu, IconButton, MenuItem, } from '@mui/material';
import Connect from "../authenticate/connect";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./navbar.module.css"


/*  Bar used for navigating beetween different pages
    - Display the logo of the website
    - Has four buttons to access easly the four webpages
    - Has the walletconnect button on the right side
*/

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="relative" className={styles.appbar}>
            <Container maxWidth={false}>
                <Toolbar>
                    {/* LOGO */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 4, display: "flex" }}
                    >
                        <div className={styles.imagebox}>
                            <Image
                                src="/LLb.png"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </Typography>
                    {/* WEBPAGES BUTTONS */}
                    <Box
                        className={styles.box}
                        sx={{ display: ["none", "none", "flex", "flex", "flex"] }}>
                        <Button
                            className={styles.text}
                            key='Home'
                            href="/"
                            sx={{ my: 2, color: 'white', display: 'flex' }}
                        >
                            Home
                        </Button>
                        <Button
                            className={styles.text}
                            key='News'
                            href="/news"
                            sx={{ my: 2, color: 'white', display: 'flex' }}
                        >
                            News
                        </Button>
                        <Button
                            className={styles.text}
                            key='Docs'
                            target="_blank"
                            href="https://xlonglink.github.io/docs/api/props"
                            sx={{ my: 2, color: 'white', display: 'flex' }}
                        >
                            Docs
                        </Button>
                        <Button
                            className={styles.text}
                            key='About'
                            href="/about"
                            sx={{ my: 2, color: 'white', display: 'flex' }}
                        >
                            About
                        </Button>
                    </Box>
                    {/* DROPDOWN MENU */}
                    <Box sx={{ flexGrow: 1, right: 0, position: 'absolute', display: ["flex", "flex", "none", "none", "none"] }}>
                        <IconButton
                            aria-controls="menu-appbar"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon style={{ fontSize: 50 }} />
                        </IconButton>
                    </Box>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        classes={{ paper: styles.menu }}
                    >
                        <MenuItem
                            className={styles.menu}
                            key='Home'
                            onClick={handleCloseNavMenu}
                        >
                            <Link href="/">
                                <Typography className={styles.text} textAlign="center">Home</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem
                            key='News'
                            onClick={handleCloseNavMenu}
                        >
                            <Link href="/news">
                                <Typography className={styles.text} textAlign="center">News</Typography>
                            </Link>
                        </MenuItem>
                        <MenuItem
                            key='Docs'
                            onClick={handleCloseNavMenu}
                        >
                            <a href="https://xlonglink.github.io/docs/api/props" target="_blank" rel="noreferrer" style={{ all: "unset" }}>
                                <Typography className={styles.text} textAlign="center">Docs</Typography>
                            </a>
                        </MenuItem>
                        <MenuItem
                            key='About'
                            onClick={handleCloseNavMenu}
                        >
                            <Link href="/about">
                                <Typography className={styles.text} textAlign="center">About</Typography>
                            </Link>
                        </MenuItem>
                    </Menu>
                    {/* WALLETCONNECT BUTTON */}
                    {/*
                        <Box sx={{ right: 0, position: 'absolute', display: ["none","none","flex","flex","flex"] }}>
                            <Connect />
                        </Box>
                            */}

                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default NavBar