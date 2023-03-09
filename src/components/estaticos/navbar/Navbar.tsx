import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Grid, Container, useMediaQuery } from '@material-ui/core';
import './Navbar.css'


const Navbar = () => {


    return (
        <AppBar className='colorNavbar' position="fixed">
            <div>
                <Container maxWidth="xl">
                    <Grid>
                        <Toolbar className='gridStyle'>
                            <Grid>
                                <Typography variant="h6" className='secularOne'>Meu Portfólio</Typography>
                            </Grid>
                            <Grid>

                            </Grid>
                        </Toolbar>
                    </Grid>
                </Container>
            </div>

        </AppBar>
    );
}
export default Navbar;
