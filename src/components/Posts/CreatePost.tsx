import { Box, Button, TextField, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/types/reducers';
import { getPosts, postData } from '../../actions/actions';

const CreatePost = () => {
    const username = useSelector((state: RootState) => state.user).username;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const createPostSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        postData({ username, title, content })(dispatch);
        getPosts('')(dispatch);
        setTitle('');
        setContent('');
    }
    return (
        <form onSubmit={createPostSubmit}>
            <Box sx={{
                backgroundColor: 'white',
                padding: '20px',
                width: '100%'
            }}>
                <Box sx={{
                    border: '1px solid #999999',
                    borderRadius: '10px',
                    width: '100%',
                    padding: '10px',
                    '& .MuiTextField-root': { width: '100%' }
                }}
                >
                    <Typography variant='h6' fontWeight='bold'>What's on your mind?</Typography>
                    <Typography variant='subtitle1'>Title:</Typography>
                    <TextField
                        id='title'
                        variant='outlined'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        inputProps={{ maxLength: 256 }}
                    />
                    <Typography variant='subtitle1'>Content:</Typography>
                    <TextField
                        id='content'
                        rows={4}
                        multiline
                        value={content}
                        sx={{}}
                        onChange={(e) => setContent(e.target.value)}
                        inputProps={{ maxLength: 4096 }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button type='submit' sx={{ marginTop: '10px' }} variant='contained' disabled={!(title && content)}>Create</Button>
                    </Box>
                </Box>
            </Box>
        </form>
    );
};

export default CreatePost;

function getData(arg0: { username: any; title: string; content: string; }) {
    throw new Error('Function not implemented.');
}
