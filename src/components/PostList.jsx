import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
  return (
    <>
      <h1 style={{textAlign: "center", paddingTop: "30px"}}>
        {title}:
      </h1>

      {posts.map((post, index) =>
        <PostItem remove={remove} number={++index} post={post} key={post.id}/>
      )}
    </>
  );
};

export default PostList;