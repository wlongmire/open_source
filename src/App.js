import { useState } from 'react';
import { Route } from 'react-router-dom';
import Source from './utils/Source';

import './App.css';
import { Container, Header, MenuSliderStyle, FootnoteSection} from './styles';

import ContentGrid from './ContentGrid';

import data, {sections} from './data';

const MenuSlider = () => {
  const sectionsList = [...sections].map(item => ({...item, footnotes:[]}));

  data.forEach(item=> {
    if (item.section) {
      sectionsList[item.section-1].footnotes.push(item);
    }
  });

  return(<MenuSliderStyle>
    <h1><a href="/">alongmirewriter</a></h1>
    <h3>OPEN SOURCE</h3>
    <h4>Footnotes</h4>
    {
      sectionsList.map(section=> {
        return(<FootnoteSection>
          <a href={`/opensource/${section.title.toLowerCase()}`}>
            <h3>{section.title}</h3>
          </a>
          <ul>
            {
              section.footnotes.map(footnote => {
                return(<li><a href={`/opensource/footnote/${footnote.id}`}>{`${footnote.id}. ${footnote.title}`}</a></li>);
              })
            }
          </ul>
          
        </FootnoteSection>);
      })
    }
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
    <Route exact path= "/" render={()=>{
      window.location.href = 'https://linktr.ee/alongmirewriter';
    }}/>
    <Route exact path= "/opensource" render={()=>{
      window.location.href = 'https://www.radiatorpress.com/product/open-source-by-warren-c-longmire';
    }}/>
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