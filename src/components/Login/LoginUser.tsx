import { Box, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { TLogin } from '../../pages/Login';

const LoginUser = ({ executeLogin }: { executeLogin: TLogin }) => {
    const [name, setName] = useState('');

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        executeLogin(name);
    }
    return (
        <form onSubmit={submit}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2}>
                    <TextField
                        sx={{ width: '300px' }}
                        onChange={e => setName(e.target.value)}
                        label="Please sign in your username"
                        variant="outlined"
                        inputProps={{maxLength: 256}}
                    />
                    <Button type="submit" disabled={!name} variant="contained">
                        Enter
                    </Button>
                </Stack>
            </Box>
        </form >
    );
};

export default LoginUser;