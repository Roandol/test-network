import { IPost } from './types/builders';

function Post({ id, username, created_datetime, title, content }: IPost): IPost {
    return {
        id,
        username,
        created_datetime,
        title,
        content,
    }
}

export default Post;