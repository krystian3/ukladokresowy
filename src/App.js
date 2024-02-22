import logo from './logo.svg';
import './App.css';
import { PeriodicTable } from './components/PeriodicTable';

function App() {
  const table = [
    {"num": 1, "tableWidth":18, "type":"metal"},
    {"num": 1, "tableWidth":18, "type":"metal"},
    {"type":"end"},
    {"num": 2, "tableWidth":1, "type":""},
  ]

  return (
    <div className="App">
      <PeriodicTable elements={table}/>
    </div>
  );
}

export default App;
