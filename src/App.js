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

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostsLoading, setIsPostsLoading] = useState(false)


  //------------------
  useEffect(() => {
    fetchPosts()
  }, [/*no dependencies means the effect will be called once*/])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true)

    setTimeout(async () => {
      const posts = await PostService.getAll()
      setPosts(posts.data)

      setIsPostsLoading(false)

    }, 3000)

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