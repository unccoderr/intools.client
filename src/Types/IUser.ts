import { IPost } from "./IPost"

export interface IUser {
    id: number,
    biography: string,
    avatar_url: string,
    birthday: Date,
    posts: IPost[],
    username: string,
    external_url: string,
    is_private: boolean,
    is_verified: boolean,
    is_professional_account: boolean,
    category_name: string
}