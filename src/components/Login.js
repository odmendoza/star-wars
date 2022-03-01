import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";


function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => {
                dispatch(login(
                    {
                        name: 'Pedro',
                        created: '2020-01-01',
                        films: [
                            'El señor de los anillos',
                        ],
                    }
                ));
            }}>Login</button>
            <button onClick={() => {
                dispatch(logout());
            }}
            >Logout</button>  
        </div>
    );
}

export default Login;
