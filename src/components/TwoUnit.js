import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import { MAP_TYPE, YOUTUBE_TYPE} from './../App';

const ContentPicker = (props) => {
  const { type } = props;
  
  switch(type) {
    case MAP_TYPE:
      const { link } = props;
      return <iframe className="map" src={link} width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>;
    case YOUTUBE_TYPE:
      const { youtubeId, playing } = props;
      return <ReactPlayer playing={playing} pip={false} controls={false} light={false} width="100%" height="100%" url={`https://www.youtube.com/watch?v=${youtubeId}`}/>;
  }
}

const TwoUnit = (props)=> {
  const [playing, setPlaying] = useState(false);
  const { headline, index, modules } = props;

  return(<Container>
    <Mosaic>
      <Module1>
        <ContentPicker {...modules[0]} playing={playing}/>
      </Module1>
      <Module2>
        <ContentPicker {...modules[1]} playing={playing}/>
      </Module2>
    </Mosaic>

    <div>
      {!playing && <Modal>
        <ModalButton onClick={()=> {
          setPlaying(true);
        }}>
          {headline}
        </ModalButton>
      </Modal>
      }
    </div>
  </Container>);
}

const Modal = styled.button`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0, 0.8)
`;

const ModalButton = styled.button`
  width: 25%;
  height: 25%;
  border:0.1em solid white;
  border-radius:0.12em;
  font-family: 'Courier New', Courier, monospace;
  box-sizing: border-box;
  text-decoration:none;
  font-weight:300;
  color:#FFFFFF;
  text-align:center;
  transition: all 0.2s;
  background: black;
  border-radius: 10px;
  font-size: 2em;
  
  &:hover {
    border: 0.3em solid white;
  }
`;

const Container = styled.div`
  height:100%;
  display:flex;
  flex-direction: column;
`;

const Mosaic = styled.div`
  display:grid;
  box-sizing: border-box;
  height:100%;

  padding: 0.2em;
  grid-gap: 0.2em;

  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  
  @media (max-width: 768px) {
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
`
const Item = styled.div`
  background-color: ${props => props.bgColor || "grey"};
  color: ${props => props.color || "white"};
  display:flex;
  align-items: center;
  justify-content: center;
`

const Module1 = styled(Item)`
  grid-row: span 4;
  grid-column: span 1;

  @media (max-width: 768px) {
    grid-row: 3 / 7;
    grid-column: span 4;
  }
`
const Module2 = styled(Item)`
  grid-row: span 4;
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-row: 1 / 3;
    grid-column: span 4;
  }
`

export default TwoUnit;