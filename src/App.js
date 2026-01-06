import { Route } from 'react-router-dom';

import Source from './utils/Source';

import Home from './Home/Home';
import OpenSource from './OpenSource';

import data, { birdDiz } from './data';

import './App.css';

import { Container } from './styles';

function App() {
  const sources = data.map(src => {
    return (new Source(src));
  });

  return (<Container>
    <Route exact path= "/">
        <Home />
    </Route>

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
            return(<OpenSource src={src}/>);
          } else {
            window.location.href = `${src.getURL()}`
          }
        }
      } />)
    }
  </Container>);
}

export default App;