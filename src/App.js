import React, {useEffect, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts.data)
  })

  //------------------
  useEffect(() => {
    fetchPosts()
  }, [/*no dependencies means the effect will be called once*/])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
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
          minHeight: '40px',
          borderRadius: '25px',
          fontSize: '15px'
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
        : <PostList remove={removePost} posts={sortedAndSearchedPosts}
                    title={'Posts'}/>
      }


      <div className={'copyright'}>
        App created by <a
        href="https://github.com/zhuk1707">Zhuk1707</a> with <a
        href="https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=4157s&ab_channel=UlbiTV">Ulbi
        TV</a> help. 2022
      </div>
    </div>
  );
}

export default App;