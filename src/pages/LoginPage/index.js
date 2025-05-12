import { fetchLogin } from "../../api/requsts.ts";
import React, { useState } from 'react'

function LoginPage() {
    
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");

    const loginSubmitHandler = async (e) => {
        e.preventDefault();

        const loginInfo = {
            userEmail: Email,
            userPassword: Password
        }

        const tokne =await fetchLogin(loginInfo);
        
        localStorage.setItem("jwt",tokne);

        console.log(tokne);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
    <div>
        <div>
            로그인
        </div>
      <form onSubmit={loginSubmitHandler}>
        <div>
            <input onChange={onChangeEmail} value={Email} type='text' placeholder='email'/>
        </div>
        <div>
            <input onChange={onChangePassword} value={Password} type='password' placeholder='password'/>
        </div>
        <div>
            <button onSubmit={loginSubmitHandler}>로그인</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;
