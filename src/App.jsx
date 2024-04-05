import { useState } from 'react';
import Feed from './components/Feed.jsx';

function App() {

  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value+1);
  }

  const decrement = () => {
    setValue(value-1);
  }


  return (
    <div className="App">


      <p>{value}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <Feed/>


    </div>
  );
}

export default App;
