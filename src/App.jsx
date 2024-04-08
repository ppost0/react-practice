import { useState } from 'react';
import Feed from './components/Feed.jsx';
import DataHandling from './components/DataHandling.jsx';

function App() {

  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value+1);
  }

  const decrement = () => {
    setValue(value-1);
  }

  const setValToFifty = () => {
    setValue(50);
  }

  const scrollToData = () => {
    document.querySelector('.data-handling-container').scrollIntoView();
  }

  return (
    <div className="App">


      <p>{value}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={scrollToData}>Data Section</button>
      <Feed value={value} setValToFifty={setValToFifty}/>
      <DataHandling/>


    </div>
  );
}

export default App;
