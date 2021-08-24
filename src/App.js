import { Route } from 'react-router-dom';
import FrameComponent from './components/FrameComponent';
import Source from './utils/Source';

import styled from 'styled-components';

import data from './data';
import './App.css';
import Iframe from 'react-iframe';

function App() {

  const sources = data.map(src => {
    return (new Source(src.title, src.url, src.id, src.baseRoute));
  });

  return (
    <Container>
      <Header>
        header
      </Header>
      <Mosaic>
        <SmallItem>one</SmallItem>
        <LargeItem>three</LargeItem>
        <SmallItem>two</SmallItem>
        
        {/* <TallItem>five</TallItem>
        <WideItem>six</WideItem> */}
      </Mosaic>

      {/* <GridContainer className="App">
        <Item>Column 1</Item>
        <Item>Column 2</Item>
        <Item>Column 3</Item>
        <Item>Column 4</Item>
      </GridContainer> */}
    </Container>
  );
}

export default App;

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
  font-size:3em;
  padding: 2em;
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
`

const Mosaic = styled.div`
  display:grid;
  box-sizing: border-box;
  height:100%;
  padding: 1em;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`
const Item = styled.div`
  background-color: ${props => props.bgColor || "grey"};
  color: ${props => props.color || "white"};
  display:flex;
  align-items: center;
  justify-content: center;
`

const SmallItem = styled(Item)`
  grid-row: span 2;
  grid-column: span 1;
`
const LargeItem = styled(Item)`
  grid-row: span 4;
  grid-column: span 2;
`

const GridContainer = styled.div`
  display: grid;
  min-height: 500px;
  grid-template-rows: 25% 50% 25%;
  // grid-auto-flow: row;
  gap: 1rem;
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