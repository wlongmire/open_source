import { Route } from 'react-router-dom';
import Source from './utils/Source';

import './App.css';
import { Container, Header} from './styles';

import ContentGrid from './ContentGrid';

import data from './data';

function App() {
  const sources = data.map(src => {
    return (new Source(src));
  });

  return (<Container>
    {
         sources.map(src => <Route key={src.id} path={src.getRoute()} render={
           () => {
             if (src.isGrid) {
              return(<Container>
                <Header>
                  <p>{src.grid.index}. {src.grid.headline}</p>
                  <img width="100px" height="100px" src={process.env.PUBLIC_URL + '/assets/open.png'} alt="open"/>
                </Header>
                <ContentGrid {...src.grid}/>
              </Container>);
             } else {
                window.location.href = `${src.getURL()}`
             }
           }
         } />)
    }
  </Container>);
  // const unitParams = {
  //   index: 1,
  //   headline: "Strawberry Mansion",
  //   rows: 4,
  //   cols: 3,
  //   m_rows: 6,
  //   m_cols: 3,
  //   modules:[
  //     {
  //       type:MAP_TYPE,
  //       link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24454.867806501945!2d-75.19231844229078!3d39.98926793267725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c792ace88039%3A0x8b90a2aa5e25a819!2sStrawberry%20Mansion%2C%20Philadelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1630374856051!5m2!1sen!2sus",
  //       muted: true,
  //       loop: true,
  //       row_range: {start: 1, end:5},
  //       col_range: {start: 1, end:2},
  //       m_row_range: {start: 3, end:7},
  //       m_col_range: {start: 1, end:4}
  //     },
  //     {
  //       type: YOUTUBE_TYPE,
  //       youtubeId: "SGGW51EGUrA",
  //       row_range: {start: 1, end:5},
  //       col_range: {start: 2, end:4},
  //       m_row_range: {start: 1, end:3},
  //       m_col_range: {start: 1, end:4}
  //     }
  //   ]
  // }

  // return (
  //   <Container>
  //     <Header>
  //       <p>{unitParams.index}. {unitParams.headline}</p>
  //       <img width="100px" height="100px" src="./assets/open.png"/>
  //     </Header>
  //     <ContentGrid {...unitParams}/>
  //   </Container>
  // );
}

export default App;