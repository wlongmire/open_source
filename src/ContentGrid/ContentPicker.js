import React from 'react';
import ReactPlayer from 'react-player';
import { MAP_TYPE, VIDEO_TYPE, IMAGE_TYPE, COLOR_TYPE} from './constants';
import { Container, Image } from './styles';

const ContentPicker = (props) => {
    const { type } = props;
    
    switch(type) {
        case MAP_TYPE:
            const { link } = props;
            return <iframe title="map" className="map" src={link} width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>;
        
        case VIDEO_TYPE:
            const { id, loop=false, muted = false, playing } = props;
            return <ReactPlayer playing={playing} loop={loop} muted={muted} pip={false} controls={false} light={false} width="100%" height="100%" url={`https://www.youtube.com/watch?v=${id}&hl=de&cc_lang_pref=de&cc=1`}/>;
        
        case IMAGE_TYPE:
            const { src, href, img_pos = {x:0, y:0}, img_size = 100} = props;
            console.log(href);
            return <a href={href} style={{width:"100%", height:"100%"}} target="_blank">
                    <Image src={process.env.PUBLIC_URL + '/assets/' + src} img_size={img_size} img_pos={img_pos}/>
                    {/* <img width="100%" src={process.env.PUBLIC_URL + '/assets/' + src} alt={src}/> */}
                </a>
                    
            
        case COLOR_TYPE:
            return <Container></Container>;

        default:
            return <div></div>
    }
  }
  
  export default ContentPicker;