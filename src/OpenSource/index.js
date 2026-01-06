import MenuSlider from './MenuSlider';
import ContentGrid from './ContentGrid';

import { MenuContext } from '../contexts';

import useLocalStorage from '../utils/useLocalStorage';

import { 
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
  BsFillMenuButtonWideFill 
} from 'react-icons/bs';

import { sections, TOTAL_FOOTNOTES} from '../data';

import { Header, Container } from '../styles';

const OpenSource = ({src})=> {
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
      <a target="_blank" href="https://radiatorpress.org/product/open-source-by-warren-longmire/"><img onClick={handleMenu} width="100px" height="100px" src={process.env.PUBLIC_URL + '/assets/open.png'} alt="open"/></a>
    </Header>

    <MenuContext.Provider value={{setShowMenu}}>
    {
      showMenu ? <MenuSlider src={src}/>: <ContentGrid {...src.grid} index={src.id} headline={src.title}/>
    }
    </MenuContext.Provider>
    
  </Container>);
}

export default OpenSource;