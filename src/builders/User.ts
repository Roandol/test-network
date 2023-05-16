import { IUser } from "./types/builders";

function User(username: string): IUser {
    return {
        username
    };
}

export default User;