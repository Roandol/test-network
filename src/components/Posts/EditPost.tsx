import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

interface EditPostProps {
    open: boolean;
    onClose: () => void;
    onConfirm: (newTitle: string, newDescription: string) => void;
    title: string;
    content: string;
}

const EditPost: React.FC<EditPostProps> = ({ open, onClose, onConfirm, title, content }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(content);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewDescription(event.target.value);
    };

    const handleConfirmClick = () => {
        onConfirm(newTitle, newDescription);
    };

    const handleCancelClick = () => {
        onClose();
    }

    return (
        <Dialog open={open} onClose={handleCancelClick}>
            <DialogTitle>Edit post</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Title"
                    type="text"
                    fullWidth
                    value={newTitle}
                    onChange={handleTitleChange}
                />
                <TextField
                    margin="dense"
                    label="Description"
                    type="text"
                    fullWidth
                    multiline
                    rows={4}
                    value={newDescription}
                    onChange={handleDescriptionChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} sx={{color: 'black', backgroundColor: 'white', border: '1px solid black'}}>Cancelar</Button>
                <Button onClick={handleConfirmClick} variant='outlined' sx={{color: 'white', backgroundColor: 'green', ":hover": {
                    backgroundColor: 'lightgreen',
                    border: 'lightgreen'
                }}}>
                    Salve
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditPost;