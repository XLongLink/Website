import React from "react";

import { AppBar, Box, Toolbar, Typography, Container, Button, Menu, IconButton, MenuItem } from '@mui/material';
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
        <>
            <AppBar position="relative" style={{ background: '#000' }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        {/* LOGO */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: "flex" }}
                        >
                            LongLink
                        </Typography>
                        {/* WEBPAGES BUTTONS */}
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
                            <Button
                                key='Home'
                                href="/"
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                Home
                            </Button>
                            <Button
                                key='News'
                                href="/news"
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                News
                            </Button>
                            <Button
                                key='Docs'
                                target="_blank"
                                href="https://xlonglink.github.io/docs/api/props"
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                Docs
                            </Button>
                            <Button
                                key='About'
                                href="/about"
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                About
                            </Button>
                        </Box>
                        {/* DROPDOWN MENU */}
                        <Box sx={{ flexGrow: 1, right: 0, position: 'absolute', display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-controls="menu-appbar"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
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
                                className={styles.menu}
                            >
                                <MenuItem
                                    key='Home'
                                    href="/"
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                                <MenuItem
                                    key='News'
                                    href="/news"
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">News</Typography>
                                </MenuItem>
                                <MenuItem
                                    key='Docs'
                                    href="https://xlonglink.github.io/docs/api/props"
                                    target="_blank"
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">Docs</Typography>
                                </MenuItem>
                                <MenuItem
                                    key='About'
                                    href="/about"
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">About</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>


                        {/* WALLETCONNECT BUTTON */}
                        <Box sx={{ right: 0, position: 'absolute', display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
                            <Connect />
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar