export interface PostProps {
    title: string;
    username: string;
    postTime?: string ;
    content: string;
    logged: boolean;
    editSave: (newTitle: string, newDescription: string) => void;
    deletePost: () => void;
}