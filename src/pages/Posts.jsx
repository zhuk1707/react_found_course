import React, {useEffect, useState} from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/pages";
import MyPagination from "../components/UI/pagination/MyPagination";

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const [totalPages, setTotalPages] = useState(0)
  const [limit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)

    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  //------------------
  useEffect(() => {
    fetchPosts(limit, page)
  }, [/*no dependencies means the effect will be called once*/])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }
  //------------------
  return (
    <div className="App">
      <MyButton
        onClick={() => {
          setModal(true)
        }}
        style={{
          marginTop: '20px',
          borderColor: '#7000b7',
          width: '100%',
          borderRadius: '25px',
          fontSize: '15px',
        }}>
        Create post &#43;
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      {postError &&
        <div style={{
          marginTop: '20px', padding: '20px 25px', border: '1px' +
            ' solid #ff2b50', borderRadius: '25px', backgroundColor: 'rgba(255,43,80,0.1)'
        }}>
          <h1>Oops, something's wrong:</h1>
          <p style={{color: '#ff2b50'}}>{postError}</p>
        </div>
      }

      {isPostsLoading
        ? <Loader/>
        : <PostList remove={removePost}
                    posts={sortedAndSearchedPosts} title={'Our posts'}/>
      }

      <MyPagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />

    </div>
  );
}

export default Posts;