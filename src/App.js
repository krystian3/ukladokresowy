import logo from './logo.svg';
import './App.css';
import './static/style.css';
import { PeriodicTable } from './components/PeriodicTable';
import {Legend} from './components/Legend';
import {ElementPopup} from './components/ElementPopup';
import elements from './data/elements.json'

function App() {
  // const table = [
  //   {"num": 1, "type":"nonmetal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"type":"space", "tableWidth":16},
  //   {"num": 2, "type":"noble", "symbol":"He", "name":"Hel", "mass":4.004},
  //   {"type":"end"},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"type":"end"},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"type":"end"},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"type":"end"},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"type":"end"},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"type":"end"},
  //   {"num": 1, "type":"metal", "symbol":"H", "name":"Wodór", "mass":1.004},
  //   {"type":"end"},
  //   {"type":"end"},
  //   {"type":"space", "tableWidth":3},
  //   {"num": 2, "type":"lantanian", "symbol":"He", "name":"Hel", "mass":4.004},
  //   {"type":"end"},
  //   {"type":"space", "tableWidth":3},
  //   {"num": 2, "type":"actinian", "symbol":"He", "name":"Oganesson", "mass":4.004},
  // ]

  const table = elements;

  return (
    <div className="App">
      <ElementPopup element={table[0]}/>
      
      <div className='filters'></div>
      <div className='content'>
        <div className='table'>
          <PeriodicTable elements={table}/>
        </div>
        <div className='searchbar'>

        </div>
      </div>
      <div className='legend'><Legend/></div>
    </div>
  );
}

export default App;
