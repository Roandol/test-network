import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/reducers/types/reducers';
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { CreatePost, PostsContainer } from '../components';
import { logoutUser } from '../actions';
import { getPosts } from '../actions/actions';
import { ArrowUpward, ExitToApp } from '@material-ui/icons';


const Home = () => {
    const matches = useMediaQuery('(max-width:410px)');
    const login: string = useSelector((state: RootState) => state.user).username;
    const route = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const { posts } = useSelector((state: RootState) => state.posts);
    const [url, setUrl] = useState('');
    const [currentScroll, setCurrentScroll] = useState(window.screenY);
    const getData = getPosts(url);
    const updateList = (_url: string = '') => {
        setLoading(true);
            setUrl(_url);
    }

    const handleScroll = () => {
        const innerHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const offsetHeight = document.documentElement.offsetHeight - (1500);
        const soma = innerHeight + scrollY;

        setCurrentScroll(scrollY);

        if (!scrollY) {
            updateList()
        }

        if (soma < offsetHeight) return;
        if (posts.next) {
            updateList(posts.next);
        }
    }


    useEffect(() => {
        getData(dispatch);
    }, [url])

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [posts]);

    useEffect(() => {
        if (!login)
            route('/login');
    }, [login, route]);

    const logout = () => {
        dispatch(logoutUser())
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateList();
    }

    return (
        <>
            {login && <Box sx={{ minHeight: '100%', maxWidth: matches ? '410px' : 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Stack spacing={0} sx={{ backgroundColor: 'white' }}>
                    <Stack spacing={2} direction='row' sx={{
                        backgroundColor: '#7695ec',
                        height: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '5px',
                        paddingTop: '10px'
                    }}
                        justifyContent={'space-between'}
                    >
                        <Typography variant="h6" color='white' sx={{ fontWeight: 'bold', wordBreak: 'break-word' }}>
                            CodeLeap Network - @{login ? login.length > 20 ? login.substring(0, 20) + '...' : login : ''}
                        </Typography>
                        <Button onClick={logout} variant='contained' sx={{
                            height: 'fit-content',
                            backgroundColor: 'transparent',
                            color: 'white',
                            ":hover": {
                                backgroundColor: '#dddddd',
                                color: 'black'
                            }
                        }}
                        >
                            <ExitToApp />
                        </Button>
                    </Stack>
                    <CreatePost />
                    <PostsContainer loading={loading} />
                </Stack>
                {currentScroll !== 0 && <Button
                    onClick={scrollToTop}
                    sx={{
                        position: 'fixed',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1,
                        backgroundColor: 'transparent',
                        ":hover": {
                            backgroundColor: '#dddddd'
                        }
                    }}
                >
                    <ArrowUpward />
                </Button>}
            </Box>}
        </>
    );
};

export default Home;