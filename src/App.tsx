import { useState } from 'react';
import './App.css';
import TheLayout from './views/pages/TheLayout';

function App() {
const  [state, setState] = useState();
  return (
    <div className="App">
        <TheLayout/>
    </div>
  );
}
export default App;