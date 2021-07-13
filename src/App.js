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
    return (`/footnote/${this.id}`);
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
        <h2>Open Source Resources</h2>
      </header>
      {
        sources.map(src => <Route key={src.id} path={src.getRoute()} render={() => (window.location.href = `${src.getURL()}`)} />)
      }
    </div>
  );
}

export default App;
