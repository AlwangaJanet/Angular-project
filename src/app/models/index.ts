export interface AddUser{
    name:string
    email:string
    password:string
}

export interface RegisterResponse{
    message:string
}

export interface loginUser{
    email:string
    password:string
}


export interface LoginReq{
    email:string
    Password:string
}


export interface LoginResponse{
    message:string
    token:string
    isSuccess:boolean
    isAdmin: boolean
}