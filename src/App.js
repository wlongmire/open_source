import { useState, createContext, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill, BsFillMenuButtonWideFill } from 'react-icons/bs';

import Source from './utils/Source';
import useLocalStorage from './utils/useLocalStorage';

import './App.css';
import { Container, Header, MenuSliderStyle, FootnoteSection, MenuHeader, AttributeSection} from './styles';

import ContentGrid from './ContentGrid';

import data, {sections, TOTAL_FOOTNOTES} from './data';


const MenuContext = createContext();

const Attributes = (props)=> {
  const {id, attributionInfo} = props;

  const {poem, page, attributions} = attributionInfo;

  return(<AttributeSection>
    <section>
      <h3>From the Poem:</h3>
      <p>{poem}- p{page}</p>
      
      <img width="320px" src={process.env.PUBLIC_URL + `/assets/footnote.${id}.highlight.png`} alt="Strawberry Mansion"/>
    </section>
    
    <section>
      <h3>Included Materials From:</h3>
      <ul>
        {
          attributions.map(a => {
            return(<li><a href={a.titleLink}>{a.title}</a><p><a href={a.byLink}>- {a.by}</a></p></li>);
          })
        }
      </ul>
    </section>
  </AttributeSection>);
}

const Footnotes = (props)=> {
  const {sectionsList} = props;

  return (<div>
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
  </div>);
}

const MenuSlider = (props) => {
  const { attributionInfo } = props.src;
  const {setShowMenu} = useContext(MenuContext);

  const [footnotes, setFootnotes] = useState(false);
  const sectionsList = [...sections].map(item => ({...item, footnotes:[]}));

  data.forEach(item=> {
    if (item.section) {
      sectionsList[item.section-1].footnotes.push(item);
    }
  });

  const handleHeaderClick = (e) => {
    setFootnotes(e.target.dataset.type === "footnote");
  }

  const handleBackClick = () => {
    setShowMenu(false);
  }

  return(<MenuSliderStyle>
    <div id="content">
      {/* <h1><a id="homeLink" href="/">alongmirewriter</a></h1> */}
      <h3>OPEN SOURCE</h3>
      <MenuHeader>
        <a className={!footnotes && 'active'} onClick={handleHeaderClick} data-type="attribute" href="#">Attributions</a>
        <a className={footnotes && 'active'} onClick={handleHeaderClick} data-type="footnote" href="#">Footnotes</a>
        <a onClick={handleBackClick} data-type="footnote" href="#">Back</a>
      </MenuHeader>
      
      {
        footnotes ? <Footnotes sectionsList={sectionsList}/> : <Attributes id={props.src.id} attributionInfo={attributionInfo}/>
      }

    </div>
  </MenuSliderStyle>)
  
}


const GridContainer = (props)=> {
  const {src} = props;
  const [ showMenu, setShowMenu] = useLocalStorage("menu", false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  }

  const backHref = (src.id > 1)?`${src.getRoot()}${(src.id-1)}`: `javascript:void(0)`;
  const forwardHref = (src.id < (TOTAL_FOOTNOTES))?`${src.getRoot()}${(src.id+1)}`: `javascript:void(0)`;

  return(<Container>
    <Header>
      <div id="header_title">
      <p>{src.id}. {src.title}</p>
        <div id="header_controls">
          <a href={backHref}><BsFillArrowLeftSquareFill /></a>
          <a href="javascript:void(0)" onClick={handleMenu}><BsFillMenuButtonWideFill/></a>
          <a href={forwardHref}><BsFillArrowRightSquareFill /></a>
        </div>
      </div>
      <img onClick={handleMenu}width="100px" height="100px" src={process.env.PUBLIC_URL + '/assets/open.png'} alt="open"/>  
    </Header>
    <MenuContext.Provider value={{setShowMenu}}>
    {
      showMenu ? <MenuSlider src={src}/>: <ContentGrid {...src.grid} index={src.id} headline={src.title}/>
    }
    </MenuContext.Provider>
    
  </Container>);
}

function App() {
  const sources = data.map(src => {
    return (new Source(src));
  });

  return (<Container>
    <Route exact path="/">
      <Redirect to="/opensource/footnote/1"/>
    </Route>
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