import React from "react";
import "./sidebar.css";
import Home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
const sidebar = ({sidebar,category,setcategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"smallsidebar"}`}>
      <div className="shortcut-links">
        <div className={`sidelink ${category===0?"active":""} `} onClick={()=>setcategory(0)}>
          <img src={Home} alt="" />
          <p>Home</p>
        </div>

        <div className={`sidelink ${category===20?"active":""} `}  onClick={()=>setcategory(20)}>
          <img src={game_icon} alt="" />
          <p>Games</p>
        </div>

        <div className={`sidelink ${category===25?"active":""} `}  onClick={()=>setcategory(25)}>
          <img src={news} alt="" />
          <p>News</p>
        </div>

        <div className={`sidelink ${category===2?"active":""} `}  onClick={()=>setcategory(2)}>
          <img src={automobiles} alt="" />
          <p>AutoMobiles</p>
        </div>

        <div className={`sidelink ${category===28?"active":""} `}  onClick={()=>setcategory(28)}>
          <img src={tech} alt="" />
          <p>Tech</p>
        </div>

        <div className={`sidelink ${category===10?"active":""} `}  onClick={()=>setcategory(10)}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>

        <div className={`sidelink ${category===22?"active":""} `}  onClick={()=>setcategory(22)}>
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>

        <div className={`sidelink ${category===24?"active":""} `}  onClick={()=>setcategory(24)}>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
      </div>
       <hr/>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
         <div className="sidelink">
          <img src={jack} alt="" />
          <p>Jackie</p>
        </div>

          <div className="sidelink">
            <img src={simon} alt="" />
            <p>Simon</p>
          </div>

          <div className="sidelink">
            <img src={tom} alt="" />
            <p>Tom Gill</p>
          </div>

          <div className="sidelink">
            <img src={megan} alt="" />
            <p>Megan</p>
          </div>

          <div className="sidelink">
            <img src={cameron} alt="" />
            <p>Cameron</p>
          </div>

       </div>
    </div>
  );
};

export default sidebar;
