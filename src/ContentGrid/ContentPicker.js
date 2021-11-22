import React from 'react';
import ReactPlayer from 'react-player';
import { MAP_TYPE, VIDEO_TYPE, IMAGE_TYPE, COLOR_TYPE, PROCESSING_TYPE, GIPHY_TYPE} from './constants';
import { Container, Image, Processing } from './styles';

const ContentPicker = (props) => {
    const { type, id } = props;

    switch(type) {
        case MAP_TYPE:
            const { link } = props;
            return <iframe title="map" className="map" src={link} width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>;
        
        case VIDEO_TYPE:
            const { loop=false, muted = false, playing } = props;
            return <ReactPlayer playing={playing} loop={loop} muted={muted} pip={false} controls={false} light={false} width="100%" height="100%" url={`https://www.youtube.com/watch?v=${id}&hl=de&cc_lang_pref=de&cc=1`}/>;
        
        case IMAGE_TYPE:
            const { src, href, img_pos = {x:0, y:0}, img_size = 100} = props;
            console.log(process.env.PUBLIC_URL + '/assets/' + props.src);
            return <a href={href} style={{width:"100%", height:"100%"}} target="_blank" rel="noreferrer">
                    <Image src={process.env.PUBLIC_URL + '/assets/' + src} img_size={img_size} img_pos={img_pos}/>
                </a>
        case PROCESSING_TYPE:
            return <Processing><iframe title={id} src={`https://openprocessing.org/sketch/${id}/embed/`} width="100%" height="100%"></iframe></Processing>;

        case GIPHY_TYPE:
            return <iframe title={id} src="https://giphy.com/embed/65Ehp0SVELsVqYhyJT" width="100%" height="100%" frameBorder="0" class="giphy-embed"></iframe>

        case COLOR_TYPE:
            return <Container></Container>;

        default:
            return <div></div>
    }
  }
  
  export default ContentPicker;