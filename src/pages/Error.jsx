import React from 'react';
import MyButton from "../components/UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const Error = () => {
  const navigate = useNavigate()

  return (
    <div className={'about App'}>
      <h1>Oops!</h1>
      <h1>
        There is some error...
      </h1>
      <MyButton
        onClick={() => navigate(-1)}
        style = {{
          width: '100px',
          marginTop: '40px'
      }}>
        Go back
      </MyButton>
    </div>
  );
};

export default Error;