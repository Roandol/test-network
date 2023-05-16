export interface IUser {
    username: string;
}

export interface IPost {
    id?: number;
    created_datetime?: string;
    username?: string;
    title: string;
    content: string;
}