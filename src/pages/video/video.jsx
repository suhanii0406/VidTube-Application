import React from 'react'
import "./video.css";
import Recmnd from "../../components/recommended/recmd";
import Playvideo from "../../components/playvideo/playvideo"
import { useParams } from 'react-router-dom';
const video = () => {
    const {videoid , categoryid} = useParams();
  return (
    <div className='play-container'>
      <Playvideo videoid={videoid}/>
      <Recmnd categoryid={categoryid}/>
    </div>
  )
}

export default video;
