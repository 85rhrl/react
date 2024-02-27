import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefullGreeting from './components/StatefullGreeting';

function App() {
  return (
    <div className="App">
      <StatefullGreeting greeting="I'm a statefull class component!" name="Mike" />
    </div>
  );
}

export default App;
