import { Route } from 'react-router-dom';
import FrameComponent from './components/FrameComponent';
import Source from './utils/Source';
import data from './data';
import './App.css';
import Iframe from 'react-iframe';

function App() {

  const sources = data.map(src => {
    return (new Source(src.title, src.url, src.id, src.baseRoute));
  });

  return (
    <div className="App">
      <div className="columns">
        <div className="box red">
          <div className="rows yellow">
            things
          </div>
          <div className="rows red">
            things
          </div>
        </div>
        <div className="box blue">
          thing 2
        </div>
      </div>
    </div>
  );
}

export default App;


// <div className="box red o75">
//             Top frame
//           </div>
//           <div className="box blue">
//             bottom
//           </div>

// <header className="App-header">
//  <img alt="./open.png" width="70%" id="feature_img" src="http://www.alongmirewriter.com/open.png" />
// </header>
//       {
//         sources.map(src => <Route key={src.id} path={src.getRoute()} render={
//           () => {
//             setTimeout(() => {
//               window.location.href = `${src.getURL()}`
//             }, 3000);
//           }
//         } />)
//       }