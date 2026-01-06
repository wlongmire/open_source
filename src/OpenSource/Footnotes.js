import { useContext } from 'react';
import { FootnoteSection } from './../styles';

import { MenuContext } from './../contexts';

const Footnotes = ({sectionsList})=> {
  const { setShowMenu } = useContext(MenuContext);

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

                return <span></span>
              })
            }
          </ul>  
        </FootnoteSection>);
      })
    }
  </div>);
}

export default Footnotes;