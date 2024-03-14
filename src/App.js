import logo from './logo.svg';
import './App.css';
import './static/style.css';
import { PeriodicTable } from './components/PeriodicTable';

function App() {
  const table = [
    {"num": 1, "type":"nonmetal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"type":"space", "tableWidth":16},
    {"num": 2, "type":"noble", "symbol":"He", "name":"Hel", "mass":4.004},
    {"type":"end"},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"type":"end"},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"type":"end"},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"type":"end"},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"type":"end"},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
    {"type":"end"},
    {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  ]

  return (
    <div className="App">
      <div className='searchbar'></div>
      <div className='content'>
        <div className='filters'>

        </div>
        <div className='table'>
          <PeriodicTable elements={table}/>
        </div>
      </div>
      <div className='legend'></div>
    </div>
  );
}

export default App;
