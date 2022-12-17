import React from 'react';
import MyButton from "../components/UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const Greet = () => {
  const navigate = useNavigate()

  return (
    <div className={'about App'}>
      <h1>
        You are authorized!
      </h1>
      <MyButton
        onClick={() => navigate('/posts')}
        style = {{
          width: 200,
          marginTop: '40px'
        }}>
        Start Exploring
      </MyButton>
    </div>
  );
};

export default Greet;