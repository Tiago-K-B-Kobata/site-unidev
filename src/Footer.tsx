import { BottomNavigation, Button, Grid, Toolbar, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box } from "@mui/system";
import React from "react";

const socials = [
    {
        link: 'https://www.instagram.com/unidev.ti/',
        icon: <InstagramIcon />,
    },
    {
        link: 'https://www.linkedin.com/company/consultoria-unidevti/',
        icon: <LinkedInIcon />,
    },

];

export default function Footer() {

    return (
        <>

            <BottomNavigation
                sx={{
                    mt: 5,
                    bgcolor: '#2884E8',
                    flexGrow: 1,
                }}
            >

                <Grid
                    container

                    padding={1}
                    color='white'
                >
                    <Grid
                        container
                        justifyContent={'space-between'}
                    >
                        <Typography fontSize={20}>
                            Unidev - 2024
                        </Typography>

                        <Box>
                            {socials.map((a) => (
                                <Button
                                    href={a.link}
                                    sx={{
                                        color: 'white',
                                    }}
                                >
                                    {a.icon}
                                </Button>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

            </BottomNavigation>

        </>
    );
}
