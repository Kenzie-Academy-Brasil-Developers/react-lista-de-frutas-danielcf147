import logo from './logo.svg';
import './App.css';
import RedFruits from './componentes/index';
import FilterRedFruits from './componentes/FilteredFruits';
import { useState } from 'react';
function App() {

const [fruits, setFruits] = useState([
  { name: "banana", color: "yellow", price: 2 },
  { name: "cherry", color: "red", price: 3 },
  { name: "strawberry", color: "red", price: 4 },
]);
const [isTrue, setIsTrue] = useState(true);
      
  return (
    <div className="App">
      <header className="App-header">
      {/* {fruits.map((item,index) => <p key={index}>{item.name}</p>)} */}
        {/* <RedFruits fruits={fruits}/> */}
        <RedFruits fruits={fruits} isTrue={isTrue}/>
        <FilterRedFruits setIsTrue={setIsTrue}/>
      </header>
    </div>
  );
}

export default App;
