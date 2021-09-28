import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layout/Navigation/Navigation';
import Home from './components/Pages/Home/Home';

function App() {

  return (
    <div className="App">

      <header className="App-header">

        <div>

          <Navigation />

          < Home />

        </div>

      </header>
    </div>
  );
}

export default App;
