import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

  if (!posts.length) {
    return (
      <div style={{
        textAlign: 'center',
        fontSize: '24px',
        margin: '80px 0 160px',
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

      <TransitionGroup>
        {posts.map((post, index) =>
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames='post'
          >
            <PostItem remove={remove} number={++index} post={post}/>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};

export default PostList;