import React,{useState} from 'react'
import Navbar from "./components/Navbar/navbar"
import {Route,Routes} from "react-router-dom";
import Home from "./pages/home/home"
import Video from "./pages/video/video";
const App = () => {
  const [sidebar , setsidebar]=useState(true);
  return (
    <div>
      <Navbar setsidebar={setsidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />}></Route>
        <Route path="/video/:categoryid/:videoid" element={<Video/>}></Route>
      </Routes>
     </div>
  )
}

export default App;
