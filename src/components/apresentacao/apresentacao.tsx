import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './apresentacao.css'
import { Box, IconButton, Grid, Container, useMediaQuery } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import minhaImagem from './img/minhaImagem.jpg'

function Apresentacao() {
    return (
        <div>
            <Container>
                <Grid container direction='row-reverse' justifyContent="center" spacing={2} alignContent="center" alignItems='center'>
                    <Grid item xs={8} sm={6}>
                        <img src={minhaImagem} className="imagemApresentacao" alt="Uma imagem do meu Rosto" />
                    </Grid>
                    <Grid item xs={8} sm={6}>
                        <Box display={"flex"} justifyItems={"center"} >
                            <Box className='wordCenter'>
                                <Box>
                                    <Typography className='subtitle textAlignLeft' variant="subtitle1">Hello World, eu sou</Typography>
                                    <Typography className='title' variant="h2">Sérgio</Typography>
                                    <Typography className='subtitle textAlignLeft' variant="subtitle1">Desenvolvedor React</Typography>
                                </Box>
                            </Box>
                            <Box className='buttonIcon'>
                                <Box className='textAlignLeft'>
                                    <a href="https://github.com/SergioLNeves" target="_blank">
                                        <IconButton className='button'>
                                            <GitHubIcon />
                                        </IconButton>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sergiolneves/" target="_blank">
                                        <IconButton className='button'>
                                            <LinkedInIcon />
                                        </IconButton>
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Apresentacao;
