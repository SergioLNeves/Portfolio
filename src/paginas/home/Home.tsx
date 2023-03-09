import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import Apresentacao from '../../components/apresentacao/apresentacao';



function Home() {

    return (
        <>
            <div>
                <Container maxWidth="lg">
                    <Box marginTop={12}>
                        <Grid justifyContent="center">
                            <Apresentacao />
                        </Grid>
                    </Box>
                </Container>
            </div>
        </>
    );
}

export default Home;