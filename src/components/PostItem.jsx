import React from 'react';
import MyButton from "./UI/button/MyButton";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <h3>{props.number}. {capitalizeFirstLetter(props.post.title)}</h3>
        <p>{capitalizeFirstLetter(props.post.body)}</p>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => {props.remove(props.post)}}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;