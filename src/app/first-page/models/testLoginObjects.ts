export interface User{
    email: string,
    password: string,
    isTradesman: boolean
}



export const users: User[] = [{email: "123", password: "123", isTradesman: true}, {email: "exampleuser@test.com", password: "1234", isTradesman: false}]