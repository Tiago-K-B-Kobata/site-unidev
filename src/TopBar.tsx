import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Grid, Avatar } from "@mui/material";
import { Box, Container } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import logo from "./Assets/LogoUnidev.png";

const pages = [
    {
        title: 'Home',
        comp: 'home'
    },
    {
        title: 'Sobre',
        comp: 'sobre',
    }
];

export default function TopBar(props) {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const { onScrollToComponent } = props;

    const { forms } = props;


    return (
        <>
            <Grid container pb={13}>


                <AppBar >
                    <Box bgcolor={'#2884E8'}>
                        <Container maxWidth="xl">
                            <Toolbar >


                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    sx={{
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >

                                </Typography>



                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: 'block', md: 'none' },
                                        }}
                                    >
                                        {pages.map((page) => (
                                            <MenuItem key={page.title} onClick={() => onScrollToComponent(page.comp)}>
                                                <Typography textAlign="center">{page.title}</Typography>
                                            </MenuItem>
                                        ))}

                                    </Menu>
                                </Box>

                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'flex', md: 'none' },
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                </Typography>
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    {pages.map((page) => (
                                        <Button
                                            key={page.title}
                                            onClick={() => onScrollToComponent(page.comp)}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            {page.title}
                                        </Button>
                                    ))}
                                </Box>
                                <img
                                    src={`${logo}`}
                                    height={80}
                                />
                                <Grid
                                    container
                                    justifyContent={"right"}
                                    justifySelf={"end"}

                                >
                                    <Box
                                        sx={{
                                            bgcolor: '#2885E9',
                                            color: 'white',
                                        }}
                                    >
                                        <Button
                                            variant="outlined"
                                            color="inherit"
                                            href={forms}
                                            target="_blank"
                                        >
                                            Inscrever-se
                                        </Button>
                                    </Box>
                                </Grid>
                            </Toolbar>
                        </Container>
                    </Box>
                </AppBar>
            </Grid >
        </>
    );
}
