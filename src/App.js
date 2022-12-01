import React, {useMemo, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First title',
      postContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      id: 2,
      title: 'Second title',
      postContent: 'A aliquam debitis distinctio enim magni nihil nobis perspiciatis praesentium, quos, reprehenderit unde, veritatis voluptatum.'
    },
    {
      id: 3,
      title: 'Third title',
      postContent: 'Adipisci aspernatur cum, deserunt enim eos hic illum ipsam magnam modi nesciunt quas quidem quisquam repellat sunt vitae?'
    },
    {
      id: 4,
      title: 'Fourth title',
      postContent: 'Pulvinar sapien et ligula ullamcorper malesuada.'
    },
    {
      id: 5,
      title: 'Fifth title',
      postContent: 'Diam maecenas sed enim ut sem viverra. Ullamcorper sit amet risus nullam.'
    }
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  //useMemo - Memoization, caching
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => {
        a[filter.sort].localeCompare(b[filter.sort])
      })
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

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

      <PostForm create={createPost}/>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'JavaScript'}/>

      <div className={'copyright'}>
        App created by <a href="https://github.com/zhuk1707">Zhuk1707</a> with <a href="https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=4157s&ab_channel=UlbiTV">Ulbi TV</a> help. 2022
      </div>
    </div>
  );
}

export default App;