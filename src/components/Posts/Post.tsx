
import { useEffect, useState } from 'react';
import { calculateTimeDifference } from '../../utils';
import { Card, CardActions, CardContent, IconButton, Stack, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Grow } from '@mui/material';
import { PostProps } from './posts';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditPost from './EditPost';

const Post = ({ title, username, postTime, content, logged, editSave, deletePost}: PostProps) => {
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    const handleDeleteClick = () => {
        setDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = () => {
        deletePost()
        setDeleteDialogOpen(false);
    };

    const handleDeleteCancel = () => {
        setDeleteDialogOpen(false);
    };

    const handleEditClick = () => {
        setEditDialogOpen(true);
    };

    const handleEditConfirm = (newTitle: string, newDescription: string) => {
        editSave(newTitle, newDescription);
        setEditDialogOpen(false);
    };

    const handleEditCancel = () => {
        setEditDialogOpen(false);
    };

    const timeDifference = calculateTimeDifference(postTime);
    return (
        <Grow in={checked}>
            <div>
                <Card style={{
                    borderRadius: '8px',
                    border: '1px solid lightgray',
                    minHeight: '100px',
                    maxWidth: '100%',
                    marginBottom: '20px',
                }}>
                    <CardContent style={{ backgroundColor: '#7695ec', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h5" component="div" style={{ color: 'white', wordBreak: 'break-word' }}>
                            {title}
                        </Typography>
                        {logged && (
                            <CardActions>
                                <IconButton size="small" onClick={handleEditClick}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton size="small" onClick={handleDeleteClick}>
                                    <DeleteIcon />
                                </IconButton>
                            </CardActions>
                        )}
                    </CardContent>
                    <CardContent>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="subtitle1" color="text.secondary" sx={{ width: 'auto', wordBreak: 'break-word' }}>
                                @{username.length > 30 ? username.substring(0, 30) + '...' : username}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {timeDifference}
                            </Typography>
                        </Stack>
                        <Typography variant="body2" component="div" sx={{ wordBreak: 'break-word' }}>
                            {content.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </Typography>
                    </CardContent>
                </Card>
                <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
                    <DialogTitle>Delete post</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Are you sure you want to delete this post?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleDeleteCancel} sx={{ color: 'black', backgroundColor: 'white', border: '1px solid black' }}>Cancel</Button>
                        <Button onClick={handleDeleteConfirm} sx={{
                            backgroundColor: 'red', color: 'white', ":hover": {
                                backgroundColor: '#ff6161'
                            }
                        }}>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
                <EditPost
                    open={editDialogOpen}
                    onClose={handleEditCancel}
                    onConfirm={handleEditConfirm}
                    title={title}
                    content={content}
                />
            </div>
        </Grow>
    );
};

export default Post;