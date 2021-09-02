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
}

export default App;