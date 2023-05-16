import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/types/reducers';
import { IPost } from '../../builders/types/builders';
import Post from './Post';
import { Post as PostBuilder } from '../../builders';
import { Box, CircularProgress, Stack } from '@mui/material';
import { deleteData, patchData } from '../../actions/actions';

const PostsContainer = ({ loading }: { loading: boolean }) => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state: RootState) => state.posts);
    const user: string = useSelector((state: RootState) => state.user).username;

    const display = posts.results.map((post: IPost, key: number) => {
        const logged = post.username === user;

        if (post.username)
            return (
                <Post
                    key={post.id ? post.id : 0}
                    title={post.title}
                    content={post.content}
                    username={post.username}
                    postTime={post.created_datetime}
                    logged={logged}
                    editSave={(newTitle, newDescription) => {
                        patchData({ ...post, title: newTitle, content: newDescription })(dispatch)
                        console.log(post)
                    }}
                    deletePost={() => deleteData(PostBuilder({ id: post.id, title: post.title, content: post.content }))(dispatch)}
                />
            )

    });
    return (
        <>
            <div style={{ padding: '10px', backgroundColor: 'white' }}>
                {display}
                {loading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress />
                            <p>Carregando...</p>
                        </Stack>
                    </Box>
                )}
            </div>
        </>
    );
};

export default PostsContainer;