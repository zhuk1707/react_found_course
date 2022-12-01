import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
  
  if (!posts.length) {
    return (
      <div style={{
        textAlign: 'center',
        fontSize: '24px',
        marginTop: '80px',
        color: 'grey'
      }}>
        There are no posts here yet...
      </div>
    )
  }
  
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