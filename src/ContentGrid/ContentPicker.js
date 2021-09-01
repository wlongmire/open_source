import React from 'react';
import ReactPlayer from 'react-player';
import { MAP_TYPE, YOUTUBE_TYPE} from './constants';

const ContentPicker = (props) => {
    const { type } = props;
    
    switch(type) {
      case MAP_TYPE:
        const { link } = props;
        return <iframe title="map" className="map" src={link} width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>;
      case YOUTUBE_TYPE:
        const { youtubeId, loop=false, muted = false, playing } = props;
        return <ReactPlayer playing={playing} loop={loop} muted={muted} pip={false} controls={false} light={false} width="100%" height="100%" url={`https://www.youtube.com/watch?v=${youtubeId}`}/>;
      default:
        return <div></div>
    }
  }
  
  export default ContentPicker;