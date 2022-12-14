import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/Loader/Loader";
import MyButton from "../components/UI/button/MyButton";

const PostIdPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(id)
    fetchComments(id)
  }, [])

  return (
    <>
      {isLoading
        ? <Loader/>
        : <div className={'App post-id-page'}>
          <MyButton
            onClick={() => navigate(-1)}
            style={{border: 0, marginBottom: '10px'}}>
            Go back
          </MyButton>

          <h1>{post.title}</h1>
          <p>{post.body}</p>

          {isCommentsLoading
            ? <Loader/>
            : <div className={'comment-section'}>
              <h2> Comments</h2>

              {comments.map((comment) =>
                <div className={'comment-section__item'}>
                  <h4>{comment.email}</h4>
                  <p>{comment.body}</p>
                </div>
              )}
            </div>
          }


        </div>
      }
    </>
  );
};

export default PostIdPage;