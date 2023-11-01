import React from "react";
import { useNavigate } from "react-router-dom";

function Page(){

    const navigate = useNavigate();
 
    function Login(){
        navigate('/signin');
    }
    function Singup(){
        navigate('/signup');
    }

    return(
        <div>
         <button onClick={Login}>Login</button>
         <button onClick={Singup}>signup</button>
        </div>
    )
}

export default Page;