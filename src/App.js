import logo from './logo.svg';
import './App.css';
import { PeriodicTable } from './components/PeriodicTable';

function App() {
  const table = []

  return (
    <div className="App">
      <table>
        <PeriodicTable elements={table}/>
      </table>
    </div>
  );
}

export default App;
