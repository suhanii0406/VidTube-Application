import React ,{useState,useEffect} from 'react'
import "./playvideo.css";
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import user_profile from "../../assets/user_profile.jpg"
import {apikey,value_converter} from "../../data"
import moment from "moment"
import { useParams } from 'react-router-dom';
const playvideo = () => {
  const {videoid}= useParams();
  const [apidata,setapidata]=useState(null);
  const [channeldata, setchanneldata]=useState(null);
  const [commentdata,setcommentdata]=useState([]);
  const fetchvideodata = async ()=>{
    const videodetailurl=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${apikey}`
    await fetch(videodetailurl).then(res=>res.json()).then(data=>setapidata(data.items[0]));
  }

  const fetchotherdata=async ()=>{
    const channelurl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${apikey}`
    await fetch(channelurl).then(response=>response.json()).then(data=>setchanneldata(data.items[0]));

    const commenturl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoid}&key=${apikey}`
    await fetch(commenturl).then(res=>res.json()).then(data=>setcommentdata(data.items))
  }
  
  useEffect(()=>{
    fetchvideodata();
  },[videoid]);
  useEffect(()=>{
    fetchotherdata();
  },[apidata]);

  return (
    <div className='play-video'>
      <iframe src={`https://www.youtube.com/embed/${videoid}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apidata?apidata.snippet.title:"Title"}</h3>
      <div className="play-video-info">
        <p>{apidata?value_converter(apidata.statistics.viewCount):"16K"} Views &bull; {apidata?moment(apidata.snippet.publishedAt).fromNow():"1 hour ago"}</p>
        <div>
            <span><img src={like} alt="" />{apidata?value_converter(apidata.statistics.likeCount):155}</span>
            <span><img src={dislike} alt="" /> </span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr/>
      <div className="publisher-info">
        <img src={channeldata?channeldata.snippet.thumbnails.default.url:""} alt="" />
        <div>
            <p>{apidata?apidata.snippet.channelTitle:""}</p>
            <span>{channeldata?value_converter(channeldata.statistics.subscriberCount):"1M"} subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-desc">
        <p>{apidata?apidata.snippet.description.slice(0,250):"description here"}</p>
        <hr/>
        <h4>{apidata?value_converter(apidata.statistics.commentCount):102} Comments</h4>
        
        {commentdata.map((item,index)=>{
           return (<div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>);
        })}
              
      </div>
    </div>
  )
}

export default playvideo;
