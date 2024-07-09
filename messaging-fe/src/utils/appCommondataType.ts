export type LoginDataType  = {
    email: string;
    password: string;
}
export type SignUpFormType  = {
    name: string;
    username: string;
    password: string;
    email: string;
    picture: File | null | string;
    confirmPassword: string;
}