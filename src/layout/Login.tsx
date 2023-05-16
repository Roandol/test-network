import { Container, Grid, Paper, useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import image from '../R.jpg';

interface MainProps {
    children: React.ReactNode
}

const Login = ({ children }: MainProps) => {
    const matches = useMediaQuery('(max-width:1100px)');

    return (
        <>
            <Grid container sx={{ height: '100vh' }}>
                {
                    !matches &&
                    (
                        <Grid item xs={8}>
                            <img src={image} alt="keyboard" style={{ width: '1100px', height: '100%' }} />
                        </Grid>
                    )
                }
                <Grid item xs={!matches ? 4 : 12} sx={{ height: '100vh' }}>
                    <Paper elevation={4} sx={{ height: '100%' }}>
                        {children}
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default Login;