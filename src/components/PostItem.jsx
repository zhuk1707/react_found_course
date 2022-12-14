import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const PostItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <h3>{props.post.id}. {capitalizeFirstLetter(props.post.title)}</h3>
        <p>{capitalizeFirstLetter(props.post.body)}</p>
      </div>
      <div className="post__buttons">
        <MyButton onClick={() => {navigate(`/posts/${props.post.id}`)}}>
          Open
        </MyButton>
        <MyButton onClick={() => {props.remove(props.post)}}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;