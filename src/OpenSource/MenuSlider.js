import { useContext, useState } from 'react';

import { MenuContext } from '../contexts';

import Footnotes from './Footnotes';
import Attributes from './Attributes';

import { MenuSliderStyle, MenuHeader } from '../styles';

import data, { sections } from '../data';

const MenuSlider = ( { src } ) => {
  const { attributionInfo, section, sectionHeading } = src;
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

  console.log(section)
  return(<MenuSliderStyle>
    <div id="content">
      <h3>OPEN SOURCE</h3>
      {/* <MenuHeader background={sections[section-1].background}> */}
      <MenuHeader background={sections[0].background}>
        {!sectionHeading && <a className={!footnotes && 'active'} onClick={handleHeaderClick} data-type="attribute" href="#">Current</a>}
        <a className={(footnotes || sectionHeading) && 'active'} onClick={handleHeaderClick} data-type="footnote" href="#">All</a>
        <a onClick={handleBackClick} data-type="footnote" href="#">Back</a>
      </MenuHeader>
      
      {
        (footnotes || sectionHeading) ? <Footnotes sectionsList={sectionsList}/> : <Attributes id={src.id} section={src.section} attributionInfo={attributionInfo}/>
      }

    </div>
  </MenuSliderStyle>)
  
}

export default MenuSlider;