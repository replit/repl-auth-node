export interface RequestLike {
    headers: {
        [key: string]: string;
    };
}
export interface UserInfo {
    id?: string;
    name?: string;
    bio?: string;
    url?: string;
    profileImage?: string;
    roles?: Array<string>;
    teams?: Array<string>;
}
export declare const getUserInfo: (req: RequestLike) => UserInfo | null;
