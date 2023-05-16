import React from 'react';
import { Container, useMediaQuery } from '@mui/material';

interface MainProps {
    children: React.ReactNode
}

const Main = ({ children }: MainProps) => {
    const matches = useMediaQuery('(max-width:420px)');

    return (
        <>
            <Container sx={{ minHeight: '100vh', width: matches ? window.innerWidth : '700px' }}>
                {children}
            </Container>
        </>
    );
};

export default Main;