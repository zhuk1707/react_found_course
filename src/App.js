import React, {useMemo, useState} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";


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

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  //useMemo - Memoization, caching
  const sortedPosts = useMemo(() => {
    console.log('+1')
    if (selectedSort) {
      return [...posts].sort((a, b) => {
        a[selectedSort].localeCompare(b[selectedSort])
      })
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
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

      <div>

        <div className={'search'}>
          <MyInput
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
            placeholder={'Search...'}
          />
        </div>


        <MySelect
          value = {selectedSort}
          onChange={sortPosts}
          defaultValue='Sort by:'
          options={[
            {value: 'title', name: 'title'},
            {value: 'postContent', name: 'description'}
          ]}
        />
      </div>

      {posts.length
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'JavaScript'}/>
        : <div style={{
          textAlign: 'center',
          fontSize: '24px',
          marginTop: '80px',
          color: 'grey'
        }}>
          There are no posts here yet...
        </div>
      }


      <div className={'copyright'}>
        App created by <a href="https://github.com/zhuk1707">Zhuk1707</a> with <a href="https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=4157s&ab_channel=UlbiTV">Ulbi TV</a> help. 2022
      </div>
    </div>
  );
}

export default App;