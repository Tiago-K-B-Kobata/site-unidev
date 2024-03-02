import { CardContent, CardHeader, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import db1 from "./Assets/db1.jpeg";
import elotech from "./Assets/elotech.jpeg";
import workInTech from "./Assets/workIntech.jpeg";
import palestra from "./Assets/palestra.jpeg";

const itens = [
    {
        title: "DB1",
        img: `${db1}`,
        text: 'Visita Técnica na DB1 organizada pela unidev'
    },
    {
        title: "Elotech",
        img: `${elotech}`,
        text: 'Visita Técnica na Elotech organizada pela unidev'
    },
    {
        title: "Evento Work in Tech",
        img: `${workInTech}`,
        text: 'Evento Work in tech ',
    },
    {
        title: "Palestra",
        img: `${palestra}`,
        text: 'Palestra de boas vindas dos calouros 2023',
    },

];

export default function Carrosel() {



    return (
        <>

            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                padding={2}
                id='home'
            >
                <Carousel
                    sx={{
                        minWidth: { xs: 300, md: 900 },
                        maxWidth: 1000,
                    }}
                >
                    {
                        itens.map((a) => (
                            <Paper
                                elevation={5}
                                sx={{
                                    bgcolor: '#2884E8',
                                    borderRadius: 5,
                                }}
                            >
                                <Grid
                                    container
                                    justifyContent={'center'}
                                >
                                    <CardHeader
                                        title={a.title}
                                        sx={{
                                            color: 'White'
                                        }}
                                    />
                                </Grid>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: 450,
                                        objectFit: "contain",
                                        borderRadius: 1,
                                    }}
                                    image={a.img}
                                />
                                <Grid
                                    container
                                    justifyContent={'center'}
                                    flex={1}
                                >
                                    <CardContent
                                        sx={{
                                            color: 'white',
                                        }}

                                    >
                                        {a.text}
                                    </CardContent>
                                </Grid>
                            </Paper>
                        ))}
                </Carousel>
            </Grid>

        </>
    );
}
