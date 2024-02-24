import { Button, Grid, Toolbar, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from "@mui/system";
import React from "react";

const socials = [
    {
        link: 'aa',
        icon: <InstagramIcon />,
    },
    {
        link: 'aa',
        icon: <LinkedInIcon />,
    },

];

export default function Footer() {

    return (
        <>

            <Box
                component={'footer'}
            >
                <Toolbar>
                    <Grid container justifyContent={"center"} xs={12}>
                        <Typography fontSize={20}>
                            Unidev - 2024
                        </Typography>

                    </Grid>

                </Toolbar>

                <Grid container justifyContent={"center"}>
                    {socials.map((a) => (
                        <Button
                            href={a.link}

                        >
                            {a.icon}
                        </Button>

                    ))}

                </Grid>
            </Box>

        </>
    );
}
