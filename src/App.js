import React, {useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  //------------------
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
      {/*<em>Counter using functional component:</em>
      <Counter/>

      <br/>
      <em>Counter using class component:</em>
      <ClassCounter/>

      <hr/>

      <em>Managed text:</em>
      <ManagedText/>

      <hr/>*/}

      <MyButton
        onClick={() => {
          setModal(true)
        }}
        style={{
          marginTop: '20px',
          borderColor: '#7000b7',
          width: '100%',
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

      <PostList remove={removePost} posts={sortedAndSearchedPosts}
                title={'Posts'}/>

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