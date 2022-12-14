import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/Loader/Loader";
import MyButton from "../components/UI/button/MyButton";

const PostIdPage = () => {
  const {id} = useParams()
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  useEffect(() => {
    fetchPostById(id)
  }, [])

  return (
    <>
      {isLoading
        ? <Loader/>
        : <div className={'App post-id-page'}>
          <MyButton style={{border: 0, marginBottom: '10px'}}>
            Go back
          </MyButton>

          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      }
    </>
  );
};

export default PostIdPage;