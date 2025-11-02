import './App.css';
import Discounted from './components/Discounted';
import Featured from './components/Featured';
import Highlights from './components/Highlights';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Explore from './components/Explore';

function App() {
  return (
    <div className="App">
     <Nav />
     <Landing />
     <Highlights />
     <Featured />
     <Discounted />
     <Explore />
    </div>
  );
}

export default App;
