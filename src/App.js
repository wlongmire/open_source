import { Route } from 'react-router-dom';

import Iframe from 'react-iframe'

import Source from './utils/Source';
import data from './data';

import './App.css';


const FrameComponent = () => {
  return (<div class="page">
    <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
      width="450px"
      height="1000px"
      className="frame" />
    <Iframe url="http://webcache.googleusercontent.com/search?q=cache:https://www.phillymag.com/news/2021/07/10/philly-inferiority-complex/"
      width="450px"
      height="1000px"
      className="frame" />
  </div>);
}

function App() {

  const sources = data.map(src => {
    return (new Source(src.title, src.url, src.id, src.baseRoute));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img alt="./open.png" width="70%" id="feature_img" src="http://www.alongmirewriter.com/open.png" />
      </header>
      {
        sources.map(src => <Route key={src.id} path={src.getRoute()} render={
          () => {
            setTimeout(() => {
              window.location.href = `${src.getURL()}`
            }, 3000);
          }
        } />)
      }
    </div>
  );
}

export default App;
