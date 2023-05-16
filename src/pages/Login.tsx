import { LoginUser } from '../components';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newUser } from '../actions';
import { RootState } from '../redux/reducers/types/reducers';
import { useEffect } from 'react';

export type TLogin = (name: string) => void;

const Login = () => {
    const dispatch = useDispatch();
    const logged = useSelector((state: RootState) => state.user).username;
    const route = useNavigate();
    const login: TLogin = (name: string) => {
        dispatch(newUser(name))

        route('/')
    }

    useEffect(() => {
        if (logged)
            route('/');
    }, [logged, route]);


    return (
        <>
            {!logged && <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <Typography variant="h5" sx={{ marginBottom: '20px' }} gutterBottom>
                    Welcome to CodeLeap network!
                </Typography>
                <LoginUser executeLogin={login} />
            </Box>
            }
        </>
    );
};

export default Login;