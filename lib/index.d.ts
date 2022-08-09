import { Request } from 'express';
interface UserInfo {
    id?: string;
    name?: string;
    bio?: string;
    url?: string;
    profileImage?: string;
    roles?: Array<string>;
    teams?: Array<string>;
}
export declare const getUserInfo: (req: Request) => UserInfo | null;
export {};
