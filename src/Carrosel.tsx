import { Card, CardContent, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { typography } from "@mui/system";
import React from "react";
import Carousel from "react-material-ui-carousel";

const itens = [
    {
        img: 'https://images.pexels.com/photos/11650554/pexels-photo-11650554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        texto: 'Na universidade de TI, os alunos passam mais tempo debugando suas vidas do que seus códigos, onde café quente e pizzas com mais commits do que toppings reinam, e os professores são oráculos lançando desafios, projetos em grupo são corridas malucas para resolver bugs enquanto se mantém a sanidade - ah, a vida na universidade de TI!'
    },
    {
        img: 'https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        texto: 'Na universidade de TI, os alunos passam mais tempo debugando suas vidas do que seus códigos, onde café quente e pizzas com mais commits do que toppings reinam, e os professores são oráculos lançando desafios, projetos em grupo são corridas malucas para resolver bugs enquanto se mantém a sanidade - ah, a vida na universidade de TI!'
    },
    {
        img: 'https://images.pexels.com/photos/20327411/pexels-photo-20327411/free-photo-of-three-colours.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        texto: 'Na universidade de TI, os alunos passam mais tempo debugando suas vidas do que seus códigos, onde café quente e pizzas com mais commits do que toppings reinam, e os professores são oráculos lançando desafios, projetos em grupo são corridas malucas para resolver bugs enquanto se mantém a sanidade - ah, a vida na universidade de TI!'
    },
    {
        img: 'https://images.pexels.com/photos/4111660/pexels-photo-4111660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        texto: 'Na universidade de TI, os alunos passam mais tempo debugando suas vidas do que seus códigos, onde café quente e pizzas com mais commits do que toppings reinam, e os professores são oráculos lançando desafios, projetos em grupo são corridas malucas para resolver bugs enquanto se mantém a sanidade - ah, a vida na universidade de TI!'
    },

];

export default function Carrosel() {

    return (
        <>
            <Grid minWidth={300} padding={2}>

                <Carousel>
                    {
                        itens.map((a, i) => (
                            <Paper
                                elevation={5}
                            >
                                <CardMedia
                                    sx={{
                                        height: 600,
                                        borderRadius: 5
                                    }}
                                    image={a.img}
                                />
                                <CardContent>
                                    {a.texto}
                                </CardContent>
                            </Paper>
                        ))
                    }
                </Carousel>
            </Grid>

        </>
    );
}
