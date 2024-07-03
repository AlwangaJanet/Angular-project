import { createActionGroup, props } from "@ngrx/store";
import { AddUser, LoginResponse, RegisterResponse, loginUser } from "../../models";

export const authActions=createActionGroup({
    source:"AUTH API",
    events:{
        'register':props<{user:AddUser}>(),
        'register success':props<{res:RegisterResponse}>(),
        'register fail':props<{message:string}>(),

        'login':props<{user:loginUser}>(),
        'login success':props<{res:LoginResponse}>(),
        'login fail':props<{message:string}>()
    }
})