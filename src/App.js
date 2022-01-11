import { useState} from 'react';

function App() {

  let [ value, setValue ] = useState(11);

  let a = 8;

  let obj = {
    name: 'John',
    age: 25
  };

  for(let i in obj) {
    console.log(i, obj[i]);
  }

  return (
    <div>
      <p>Value: { value }</p>
      <button onClick={ () => { setValue(value + 1);}}>Plus</button>
      <button onClick={ () => { setValue(value - 1);}}>Minus</button>
    </div>
  );
}

export default App;
