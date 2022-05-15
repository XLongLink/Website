import React, { useState, useEffect } from "react";

import { styled, alpha } from '@mui/material/styles';

import { AppBar, Box, Toolbar, IconButton, Typography, Container, Menu, Button, MenuItem, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';

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


    const Search = styled('div')(({ theme }) => ({
        position: 'absolute',
        display: 'flex',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        right: theme.spacing(1),
        width: 'auto',
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    }));

    return (
        <>
            <AppBar position="static" style={{ background: '#1C1C1C' }}>
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
                                href="/about"
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
                        <Search sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

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
                            sx={{ color: 'primary.main' }}
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
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default NavBar