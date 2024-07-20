import React, { useState, useEffect } from "react";
import "./recmd.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { apikey,value_converter } from "../../data";
import {Link} from "react-router-dom"
const recmd = ({ categoryid }) => {
  const [recmndData, setdata] = useState([]);
  const fetchdata = async () => {
    const recmndurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=90&regionCode=US&videoCategoryId=${categoryid}&key=${apikey}`;
    await fetch(recmndurl)
      .then((response) => response.json())
      .then((data) => setdata(data.items));
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="recommended">
      {recmndData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="sidevideolist">
            <img src={item.snippet.thumbnails.default.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default recmd;
