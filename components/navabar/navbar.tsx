import React from "react";

import { AppBar, Box, Toolbar, Typography, Container, Button } from '@mui/material';
import Connect from "../authenticate/connect";

/*  Bar used for navigating beetween different pages
    - Display the logo of the website
    - Has four buttons to access easly the four webpages
    - Has the walletconnect button on the right side
*/

function NavBar() {
    return (
        <>
            <AppBar position="relative" style={{ background: '#1C1C1C' }}>
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
                                href="https://xlonglink.github.io/docs/api/props"
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                Docs
                            </Button>
                            <Button
                                key='Contact'
                                href="/about"
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                About
                            </Button>
                        </Box>
                        {/* WALLETCONNECT BUTTON */}
                        <div style={{ right: 0, position: "absolute" }}>
                            <Connect />
                        </div>

                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar