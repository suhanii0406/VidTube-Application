import React ,{useState} from 'react'
import "./home.css";
import Sidebar from "../../components/sidebar/sidebar"
import Feed from "../../components/feed/feed";
const home = ({sidebar}) => {
    const [category , setcategory]= useState(0);
  return (
    <div>
      <Sidebar sidebar={sidebar} category={category} setcategory={setcategory}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
         <Feed category={category}/>
      </div>
    </div>
  )
}

export default home
