import React from "react";
import { AppBar, Button, Card, CardActionArea, CardHeader, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CardContent from '@mui/material/CardContent';


const cards = [
    {
        titulo: 'Card 1',
        texto: 'Cientistas descobrem que procrastinar é a melhor forma de... bem, ainda estão procrastinando para descobrir. Enquanto isso, um grupo de pombos está realizando uma manifestação na praça principal, reivindicando direitos iguais aos dos corvos. O prefeito, por sua vez, parece mais preocupado com a possibilidade de sua pizza ser entregue fria do que com os assuntos municipais. Enquanto isso, na padaria da esquina, um padeiro está tentando convencer seus pães a se comportarem como pães de verdade, e não como croissants rebeldes. Ah, a vida na cidade pode ser tão... pão com manteiga',
    },
    {
        titulo: 'Card 2',
        texto: 'Cientistas descobrem que procrastinar é a melhor forma de... bem, ainda estão procrastinando para descobrir. Enquanto isso, um grupo de pombos está realizando uma manifestação na praça principal, reivindicando direitos iguais aos dos corvos. O prefeito, por sua vez, parece mais preocupado com a possibilidade de sua pizza ser entregue fria do que com os assuntos municipais. Enquanto isso, na padaria da esquina, um padeiro está tentando convencer seus pães a se comportarem como pães de verdade, e não como croissants rebeldes. Ah, a vida na cidade pode ser tão... pão com manteiga',
    },
    {
        titulo: 'Card 3',
        texto: 'Cientistas descobrem que procrastinar é a melhor forma de... bem, ainda estão procrastinando para descobrir. Enquanto isso, um grupo de pombos está realizando uma manifestação na praça principal, reivindicando direitos iguais aos dos corvos. O prefeito, por sua vez, parece mais preocupado com a possibilidade de sua pizza ser entregue fria do que com os assuntos municipais. Enquanto isso, na padaria da esquina, um padeiro está tentando convencer seus pães a se comportarem como pães de verdade, e não como croissants rebeldes. Ah, a vida na cidade pode ser tão... pão com manteiga',
    },

];

export default function Cards() {

    return (
        <>

            <Grid container xs={12} justifyContent='center' minWidth={300}>


                {
                    cards.map((a) => (
                        <Grid item xs={3} minWidth={300}>
                            <Box padding={1}>
                                <Paper
                                    elevation={3}
                                >
                                    <CardHeader
                                        title={a.titulo}
                                    />

                                    <CardContent>
                                        {a.texto}
                                    </CardContent>
                                    <Grid container justifyContent={'center'}>
                                        <Button>Inscrever-se</Button>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>
                    ))
                }

            </Grid >

        </>
    );
}
