import React from "react";
import { Button, CardHeader, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import CardContent from '@mui/material/CardContent';


const cards = [
    {
        titulo: 'Missão',
        texto: 'Na nossa consultoria de tecnologia, a nossa missão é ser a força que impulsiona o avanço. Trabalhamos incansavelmente para fornecer soluções que não apenas atendam, mas superem as expectativas dos nossos clientes. Queremos ser o parceiro que não só ajuda a empresa a crescer, mas que também contribui para o progresso da sociedade. E fazemos isso promovendo uma cultura de trabalho colaborativa, transparente e respeitosa.',
    },
    {
        titulo: 'Conhecimento',
        texto: 'Acreditamos que o conhecimento é a chave para o sucesso. Estamos sempre aprendendo, mantendo-nos atualizados com as últimas tendências e tecnologias. Nossa equipe é formada por pessoas apaixonadas e especialistas em diversas áreas tecnológicas. Estamos aqui para compartilhar esse conhecimento com nossos clientes, ajudando-os a tomar decisões informadas e estratégicas para o crescimento de seus negócios.',
    },
    {
        titulo: 'Inovação',
        texto: 'Inovação é o que nos mantém em movimento. Estamos constantemente desafiando o status quo, buscando maneiras de fazer as coisas de forma diferente e melhor. Valorizamos a criatividade, a experimentação e a coragem de arriscar. Nosso objetivo é desenvolver soluções que não apenas resolvam os problemas do presente, mas que também antecipem as necessidades do futuro. Queremos ser os pioneiros que transformam ideias em realidade, impulsionando o progresso e inspirando outros a fazerem o mesmo.',
    },

];

export default function Cards(props) {

    const { forms } = props;

    return (
        <>

            <Grid id='sobre' container xs={12} justifyContent='center' minWidth={300}>


                {
                    cards.map((a) => (
                        <Grid item xs={3} minWidth={300}>
                            <Box padding={1}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        bgcolor: '#2884E8',
                                        minHeight: 400,
                                        borderRadius: 5,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}

                                >
                                    <CardHeader
                                        title={a.titulo}
                                        sx={{
                                            color: 'white'
                                        }}
                                    />

                                    <CardContent
                                        sx={{
                                            color: 'white',
                                            flexGrow: 1
                                        }}
                                    >
                                        {a.texto}
                                    </CardContent>




                                </Paper>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid >

            <Grid
                container
                justifyContent="center"
                sx={{

                    marginBottom: 2,

                }}
            >
                <Button
                    href={forms}
                    target="_blank"
                    sx={{
                        bgcolor: '#2884E8',
                        color: 'white',
                    }}
                >
                    Inscrever-se
                </Button>
            </Grid>


        </>
    );
}
