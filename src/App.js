import { Route } from 'react-router-dom';
import data from './data';
import './App.css';

class Source {
  constructor(title, url, id) {
    this.title = title;
    this.baseUrl = url;
    this.id = id;
  }

  getURL = () => {
    return (`https://www.google.com/search?q=${this.getShortCode()}`);
  }

  getRoute = () => {
    return (`/opensource/footnote/${this.id}`);
  }

  getShortCode = () => {
    return (this.title.toLowerCase().trim().replace(" ", "-"));
  }
}

function App() {

  const sources = data.map(src => new Source(src.title, src.url, src.id));

  return (
    <div className="App">
      <header className="App-header">
        <img alt="images/open.png" width="70%" id="feature_img" src="./images/open.png" />
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
