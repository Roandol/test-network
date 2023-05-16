import { useDispatch, useSelector } from 'react-redux';
import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material';
import { RootState } from '../../redux/reducers/types/reducers';
import { IUser } from '../../builders/types/builders';
import { TLogin } from '../../pages/Login';
import { useState } from 'react';

const OptionsLogin = ({ executeLogin }: { executeLogin: TLogin }) => {
    const users: IUser[] = useSelector((state: RootState) => state.users).users;
    const history: string[] = useSelector((state: RootState) => state.login.history);
    const [dialog, setDialog] = useState(false);
    const [selectId, setId] = useState('');
    const dispatch = useDispatch();
    const cancelDelete = () => {
        setId('');
        setDialog(false);
    }

    const loginHistory = history.map((id: string) => {
        const user = users.find(u => 'u.id' === id);

        if (user)
            return <Chip label={'user.name'} onDelete={() => {
                setId('id')
                setDialog(true)
            }}
                key={'id'}
                onClick={() => executeLogin('user.name')}
                sx={{
                    ":hover": {
                        backgroundColor: '#7695ec',
                        color: 'white'
                    }
                }}
            />
    });

    return (
        <>
            <Stack spacing={1} sx={{ marginTop: '30px' }}>
                {loginHistory.length ? 'Sign in with history users:' : ''}
                {loginHistory}
            </Stack>
            <Dialog open={dialog} onClose={cancelDelete}>
                <DialogTitle>Delete access</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure you want to delete this access?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelDelete} sx={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}>Cancel</Button>
                    <Button onClick={() => {
                        setDialog(false);
                    }} sx={{
                        backgroundColor: 'red', color: 'white', ":hover": {
                            backgroundColor: '#ff6161'
                        }
                    }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default OptionsLogin;