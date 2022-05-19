import React from "react";
import { styled } from '@mui/material/styles';

import { AppBar, Box, Toolbar, IconButton, Typography, Container, Menu, Button, MenuItem } from '@mui/material';
import styles from './footbar.module.css'


function Footbar() {
    return (
        <AppBar className={styles.footbar}>
            <Container>
                <Toolbar>
                    <Typography>
                        Test
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Footbar