import React from "react";
import {Routes, Route} from "react-router-dom";
import './styles/App.css'
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/posts' element={<Posts/>}/>
    </Routes>
  )
}

export default App;