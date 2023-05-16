import React from 'react';
import { Container, useMediaQuery } from '@mui/material';

interface MainProps {
    children: React.ReactNode
}

const Main = ({ children }: MainProps) => {
    const matches = useMediaQuery('(max-width:500px)');
    const { innerWidth } = window;
    console.log(matches)

    return (
        <>
            <Container sx={
                matches ? {
                    minHeight: '100vh',
                    maxWidth: innerWidth,
                    padding: '0'
                } : {
                    minHeight: '100vh',
                    maxWidth: innerWidth
                } 
                }>
                {children}
            </Container>
        </>
    );
};

export default Main;