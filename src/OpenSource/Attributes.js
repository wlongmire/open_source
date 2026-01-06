import { AttributeSection } from './../styles';
import { sections } from './../data';

const Attributes = ({id, section, attributionInfo})=> {
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

export default Attributes;