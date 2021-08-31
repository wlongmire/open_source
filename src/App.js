import {useState} from 'react';
import { Route } from 'react-router-dom';
import FrameComponent from './components/FrameComponent';
import Source from './utils/Source';

import styled from 'styled-components';

import data from './data';
import './App.css';
// import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

function App() {
  const [playing, setPlaying] = useState(false);
  const sources = data.map(src => {
    return (new Source(src.title, src.url, src.id, src.baseRoute));
  });

  return (
    <Container>
      <Header>
        <p>Strawberry Mansion</p>
        <img width="100px" height="100px" src="./assets/open.png"/>
      </Header>
      <Mosaic>
        <SmallItem>
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24454.867806501945!2d-75.19231844229078!3d39.98926793267725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c792ace88039%3A0x8b90a2aa5e25a819!2sStrawberry%20Mansion%2C%20Philadelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1630374856051!5m2!1sen!2sus" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
        </SmallItem>
        <LargeItem>
          <ReactPlayer playing={playing} pip={false} controls={false} light={false} width="100%" height="100%" url="https://www.youtube.com/watch?v=SGGW51EGUrA"/>
        </LargeItem>
      </Mosaic>
      <div>
        {!playing && <Modal>
          <ModalButton onClick={()=> {
            setPlaying(true);
          }}>
            Strawberry Mansion
          </ModalButton>
        </Modal>
        }
        
      </div>
    </Container>
  );
}

export default App;

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
  border-radius: 10px;
  background: grey;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  font-size: 2em;
  border: 0px;
  &:hover {
    background: black;
  }
`;


const Container = styled.div`
  height:100%;
  display:flex;
  flex-direction: column;
  
`
const Header = styled.header`
  box-sizing: border-box;
  background-color: black;
  text-transform: uppercase;
  font-family: 'Courier New', Courier, monospace;
  font-size:1em;
  color:white;
  display:flex;
  align-items: center;
  justify-content: space-between;

  p {
    padding-left: 2em;
  }
`

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

const SmallItem = styled(Item)`
  grid-row: span 4;
  grid-column: span 1;

  @media (max-width: 768px) {
    grid-row: 3 / 7;
    grid-column: span 4;
  }
`
const LargeItem = styled(Item)`
  grid-row: span 4;
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-row: 1 / 3;
    grid-column: span 4;
  }
`

// <div className="box red o75">
//             Top frame
//           </div>
//           <div className="box blue">
//             bottom
//           </div>

// <header className="App-header">
//  <img alt="./open.png" width="70%" id="feature_img" src="http://www.alongmirewriter.com/open.png" />
// </header>
//       {
//         sources.map(src => <Route key={src.id} path={src.getRoute()} render={
//           () => {
//             setTimeout(() => {
//               window.location.href = `${src.getURL()}`
//             }, 3000);
//           }
//         } />)
//       }