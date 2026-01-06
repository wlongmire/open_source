import { useState, createContext, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill, BsFillMenuButtonWideFill } from 'react-icons/bs';

import Source from './utils/Source';
import useLocalStorage from './utils/useLocalStorage';

import './App.css';
import { Container, Header, MenuSliderStyle, FootnoteSection, MenuHeader, AttributeSection} from './styles';

import ContentGrid from './ContentGrid';

import data, {sections, TOTAL_FOOTNOTES, birdDiz} from './data';


const MenuContext = createContext();

const Attributes = (props)=> {
  const {id, section, attributionInfo} = props;
  const {poem, page, attributions} = attributionInfo;
  const {background} = sections[section-1];

  return(<AttributeSection background={background}>
    <section>
      <h3>From the Poem:</h3>
      <p className="poem">{poem} | p. {page}</p>
      
      <img width="70%" src={process.env.PUBLIC_URL + `/assets/footnote.${id}.highlight.png`} alt={`poem_${id}`}/>
    </section>
    
    <section>
      <h3>Sources Includes:</h3>
      <ul>
        {
          attributions.map(a => {
            return(<li>
              <a className="atTitle" href={a.titleLink}>{a.title}</a> 
              <a className="atAuthor" href={a.byLink}>- {a.by}</a>
            </li>);
          })
        }
      </ul>
    </section>
  </AttributeSection>);
}

const Footnotes = (props)=> {
  const { setShowMenu } = useContext(MenuContext);
  const {sectionsList} = props;

  const handleSectionClick = () => {
    setShowMenu(false);
  }

  return (<div>
    {
      sectionsList.map(section=> {
        return(<FootnoteSection background={section.background}>
          <a onClick={handleSectionClick} href={encodeURI(`/opensource/${section.title.toLowerCase().replaceAll(" ", "_")}`)}>
            <h3>{section.title}</h3>
          </a>
          <ul>
            {
              section.footnotes.map(footnote => {
                if (!footnote.sectionHeading ) {
                  return(<li><a href={`/opensource/footnote/${footnote.id}`}>{`${footnote.id}. ${footnote.title}`}</a></li>);  
                }
              })
            }
          </ul>  
        </FootnoteSection>);
      })
    }
  </div>);
}

const MenuSlider = (props) => {
  const { attributionInfo, section, sectionHeading } = props.src;
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
      <h3>OPEN SOURCE</h3>
      <MenuHeader background={sections[section-1].background}>
        {!sectionHeading && <a className={!footnotes && 'active'} onClick={handleHeaderClick} data-type="attribute" href="#">Current</a>}
        <a className={(footnotes || sectionHeading) && 'active'} onClick={handleHeaderClick} data-type="footnote" href="#">All</a>
        <a onClick={handleBackClick} data-type="footnote" href="#">Back</a>
      </MenuHeader>
      
      {
        (footnotes || sectionHeading) ? <Footnotes sectionsList={sectionsList}/> : <Attributes id={props.src.id} section={props.src.section} attributionInfo={attributionInfo}/>
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

  const backHref = (src.id > 1 && !src.sectionHeading)?`${src.getRoot()}${(src.id-1)}`: `javascript:void(0)`;
  const forwardHref = (src.id < TOTAL_FOOTNOTES && !src.sectionHeading)?`${src.getRoot()}${(src.id+1)}`: `javascript:void(0)`;

  return(<Container>
    <Header background={sections[src.section-1].background}>
      <div id="header_title">
      <p>{src.id}. {src.title}</p>
        <div id="header_controls">
          <a className={(src.id <= 1 || src.sectionHeading) && "inactive"} data-direction="back" href={backHref}><BsFillArrowLeftSquareFill /></a>
          <a href="javascript:void(0)" onClick={handleMenu}><BsFillMenuButtonWideFill/></a>
          <a className={(src.id >= TOTAL_FOOTNOTES || src.sectionHeading) && "inactive"} data-direction="forward" href={forwardHref}><BsFillArrowRightSquareFill /></a>
        </div>
      </div>
      <a target="_blank" href="https://www.radiatorpress.com/product/open-source-by-warren-c-longmire"><img onClick={handleMenu} width="100px" height="100px" src={process.env.PUBLIC_URL + '/assets/open.png'} alt="open"/></a>
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
    <Route exact path= "/" render={()=>{
      window.location.href = 'https://alongmirewriter.squarespace.com/';
    }}/>

    <Route exact path= "/birddiz/:id" render={(e)=>{
      window.location.href = birdDiz.citations[parseInt(e.match.params.id) -1].url;
    }}/>
    
    <Route exact path= "/opensource" render={()=>{
      window.location.href = 'https://radiatorpress.org/product/open-source-by-warren-longmire/';
    }}/>

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