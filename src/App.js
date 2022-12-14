import React from "react";
import './styles/App.css'
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <>
      <Navbar/>
      <AppRouter/>
    </>
  )
}

export default App;