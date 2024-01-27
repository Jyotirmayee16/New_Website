import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
// import Menuitem from "./Components/Menuitem/Menuitem"
import Header from "./Components/Header/Header";
import Gallery from "./Components/Gallery/Gallery"
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Gallery/>
      {/* <Menuitem/> */}
    </div>
  )
}

export default App
