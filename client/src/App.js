import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layout/Navigation/Navigation';
import Routes from './components/Routes/Index';

function App() {

  return (
    <div className="App">

      <header className="App-header">

        <Navigation />

        <Routes />

      </header>

    </div>
  );
}

export default App;
