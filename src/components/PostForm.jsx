import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', content: ''})

  function addNewPost(e) {
    e.preventDefault()

    const newPost = {
      ...post,
      id:Date.now(),
      title: post.title,
      postContent: post.content
    }

    create(newPost)

    setPost({title: '', content: ''})
  }

  return (
    <form action="" className={"post-form"}>
      <MyInput
        value = {post.title}
        onChange = {e => setPost({...post, title: e.target.value})}
        type = "text"
        placeholder = {'Your title'}
      />

      <MyInput
        value = {post.content}
        onChange = {e => setPost({...post, content: e.target.value})}
        type = "text"
        placeholder = {'Your content'}
      />

      <div className="post-form__btn">
        <MyButton onClick = {addNewPost} >Create</MyButton>
      </div>
    </form>
  );
};

export default PostForm;