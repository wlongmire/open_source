import { useState } from 'react';
import { Route } from 'react-router-dom';
import Source from './utils/Source';
import styled from 'styled-components';

import './App.css';
import { Container, Header} from './styles';

import ContentGrid from './ContentGrid';

import data from './data';

const MenuSliderStyle = styled.div`
  background:black;
  color: white;
  padding: 2em;
  z-index: 10000;
  height:100%;
  overflow-y: scroll;
`

const FootnoteSection = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1em;
  margin: 1em 0 0 0;
  background: ${props => props.background || "pink"};

  h3 {
    font-size: 1.6em;
    color:black;
    padding: 0px;
    margin: 0px;
    text-transform: uppercase;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    a {
      display:block;
      padding: 0.4em;
      margin: 0.2em;
      text-decoration: none;
      color: black;
      font-size: 1rem;
      background: rgba(255,255,255, 0);
      transition: 500ms background;
    }

    a:hover {
      background: rgba(255,255,255, 1);
      color:black;
    }
  }
`;

const MenuSlider = () => {
  return(<MenuSliderStyle>
    <h1>alongmirewriter</h1>
    <h3>OPEN SOURCE</h3>
    <h4>Footnotes</h4>
    <FootnoteSection>
      <ul>
        <li><a href="/opensource/footnote/1">1. Strawberry Mansion</a></li>
        <li><a href="/opensource/footnote/2">2. The Invariant Be</a></li>
        <li><a href="/opensource/footnote/3">3. Murder Capital</a></li>
        <li><a href="/opensource/footnote/4">4. My Ghost</a></li>
        <li><a href="/opensource/footnote/5">5. 5221's sheetrock</a></li>
      </ul>
      <h3>
        HOOPTEE
      </h3>
    </FootnoteSection>
    <FootnoteSection>
      <ul>
        <li><a href="/opensource/footnote/6">1. Strawberry Mansion</a></li>
        <li><a href="/opensource/footnote/7">2. The Invariant Be</a></li>
        <li><a href="/opensource/footnote/8">3. Murder Capital</a></li>
        <li><a href="/opensource/footnote/9">4. My Ghost</a></li>
        <li><a href="/opensource/footnote/10">5. 5221's sheetrock</a></li>
      </ul>
      <h3>
        AutoImmune
      </h3>
    </FootnoteSection>
    <FootnoteSection>
      <ul>
        <li><a href="#">1. Strawberry Mansion</a></li>
        <li><a href="#">2. The Invariant Be</a></li>
        <li><a href="#">3. Murder Capital</a></li>
        <li><a href="#">4. My Ghost</a></li>
        <li><a href="#">5. 5221's sheetrock</a></li>
      </ul>
      <h3>
        AutoImmune
      </h3>
    </FootnoteSection>
    <FootnoteSection>
      <ul>
        <li><a href="#">1. Strawberry Mansion</a></li>
        <li><a href="#">2. The Invariant Be</a></li>
        <li><a href="#">3. Murder Capital</a></li>
        <li><a href="#">4. My Ghost</a></li>
        <li><a href="#">5. 5221's sheetrock</a></li>
      </ul>
      <h3>
        AutoImmune
      </h3>
    </FootnoteSection>
    <FootnoteSection>
      <ul>
        <li><a href="#">1. Strawberry Mansion</a></li>
        <li><a href="#">2. The Invariant Be</a></li>
        <li><a href="#">3. Murder Capital</a></li>
        <li><a href="#">4. My Ghost</a></li>
        <li><a href="#">5. 5221's sheetrock</a></li>
      </ul>
      <h3>
        AutoImmune
      </h3>
    </FootnoteSection>
    <FootnoteSection>
      <ul>
        <li><a href="#">1. Strawberry Mansion</a></li>
        <li><a href="#">2. The Invariant Be</a></li>
        <li><a href="#">3. Murder Capital</a></li>
        <li><a href="#">4. My Ghost</a></li>
        <li><a href="#">5. 5221's sheetrock</a></li>
      </ul>
      <h3>
        AutoImmune
      </h3>
    </FootnoteSection>
  </MenuSliderStyle>)
  
}

const GridContainer = ({src})=> {
  const [ showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  }

  return(<Container>
    <Header>
      <p>{src.id}. {src.title}</p>
      <img onClick={handleMenu}width="100px" height="100px" src={process.env.PUBLIC_URL + '/assets/open.png'} alt="open"/>
    </Header>
    {
      showMenu ? <MenuSlider/>: <ContentGrid {...src.grid} index={src.id} headline={src.title}/>
    }
  </Container>);
}

function App() {
  const sources = data.map(src => {
    return (new Source(src));
  });

  return (<Container>
    <Route exact path= "/">
      <h2>Welcome to a LongmireWriter</h2>
    </Route>
    <Route exact path= "/publications">
      <h2>Publications</h2>
    </Route>
    <Route exact path= "/services">
      <h2>Services</h2>
    </Route>
    <Route exact path= "/opensource">
      <h2>Open Source</h2>
    </Route>
    <Route exact path= "/contact">
      <h2>Contact</h2>
    </Route>
    {
         sources.map(src => <Route key={src.id} path={src.getRoute()} render={
           () => {
             if (src.isGrid) {
              return(<GridContainer src={src}/>);
             } else {
                window.location.href = `${src.getURL()}`
             }
           }
         } />)
    }
  </Container>);
}

export default App;