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
             console.log(src);

             if (src.isGrid) {
              return(<Container>
                <Header>
                  <p>{src.id}. {src.title}</p>
                  <img width="100px" height="100px" src={process.env.PUBLIC_URL + '/assets/open.png'} alt="open"/>
                </Header>
                <ContentGrid {...src.grid} index={src.id} headline={src.title}/>
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