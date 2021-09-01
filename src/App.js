import {useState} from 'react';
import { Route } from 'react-router-dom';
import FrameComponent from './components/FrameComponent';
import Source from './utils/Source';

import styled from 'styled-components';

import data from './data';
import './App.css';
import TwoUnit from './components/TwoUnit';


export const MAP_TYPE = "map_type";
export const YOUTUBE_TYPE = "youtube_type";

function App() {
  
  const sources = data.map(src => {
    return (new Source(src.title, src.url, src.id, src.baseRoute));
  });

  const unitParams = {
    index: 1,
    headline: "Strawberry Mansion",
    modules:[
      {
        type:MAP_TYPE,
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24454.867806501945!2d-75.19231844229078!3d39.98926793267725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c792ace88039%3A0x8b90a2aa5e25a819!2sStrawberry%20Mansion%2C%20Philadelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1630374856051!5m2!1sen!2sus"
      },
      {
        type: YOUTUBE_TYPE,
        youtubeId: "SGGW51EGUrA"
      }
    ]
  }

  return (
    <Container>
      <Header>
        <p>{unitParams.index}. {unitParams.headline}</p>
        <img width="100px" height="100px" src="./assets/open.png"/>
      </Header>
      <TwoUnit {...unitParams}/>
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