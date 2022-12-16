import React from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
  return (
    <div className={'App about'}>
      <div className={"login"}>
        <h1>Login</h1>
        <form>
          <MyInput type="text" placeholder="Login"/>
          <MyInput type="password" placeholder="Password"/>
          <MyButton
            classNmae={'button'}
            onClick={() => {}}
          >
            Log in
          </MyButton>
        </form>
      </div>
    </div>
  );
};

export default Login;