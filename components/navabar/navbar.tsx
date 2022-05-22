import React from "react";
import { styled } from '@mui/material/styles';

import { AppBar, Box, Toolbar, IconButton, Typography, Container, Menu, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import Connect from "../authenticate/connect";

function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledMenu = styled((props: any) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            backgroundColor: '#1C1C1C',
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
        },
    }));

    return (
        <>
            <AppBar position="sticky" style={{ background: '#1C1C1C' }}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 10, display: "flex" }}
                        >
                            LongLink
                        </Typography>
                        <Box sx={{ my: 2, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
                            <Button
                                key='Home'
                                href="/"
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                Home
                            </Button>
                            <Button
                                key='About'
                                href="#about"
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                News
                            </Button>
                            <Button
                                key='Open'
                                href="#Open"
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                Docs
                            </Button>
                            <Button
                                key='Contact'
                                href="#Contact"
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                Info
                            </Button>
                        </Box>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            style={{ position: 'absolute', right: 10 }}
                            sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <StyledMenu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            sx={{ color: 'primary.main', flexGrow: 1 }}
                        >
                            <MenuItem
                                component='a'
                                key='Home'
                                href='/'
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                <HomeRoundedIcon sx={{ mr: 2 }} />
                                Home
                            </MenuItem>
                            <MenuItem
                                component='a'
                                key='About'
                                href='/about'
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                <InfoRoundedIcon sx={{ mr: 2 }} />
                                About
                            </MenuItem>
                            <MenuItem
                                component='a'
                                key='Open'
                                href='#Open'
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                <ScienceRoundedIcon sx={{ mr: 2 }} />
                                Open
                            </MenuItem>
                            <MenuItem
                                component='a'
                                key='Contact'
                                href='#Contact'
                                sx={{ my: 2, color: 'white', display: 'flex' }}
                            >
                                <PhoneRoundedIcon sx={{ mr: 2 }} />
                                Contact
                            </MenuItem>
                        </StyledMenu>
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