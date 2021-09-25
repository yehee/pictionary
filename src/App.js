import { useState } from 'react'
import { sample } from 'lodash'
import words from './constants'
import refresh from './refresh.png'
import './App.css';

function App() {
  const [word, setWord] = useState(sample(words))

  function Refresh() {
    return <div className="round">
      <img src={refresh} alt="refresh" className="icon" onClick={() => setWord(sample(words))} />
    </div>
  }

  function Main({ word: { category, value } }) {
    return <div className="main">
      <p className="category">Category: {category}</p>
      <p className="value">{value}</p>
      <Refresh />
    </div>
  }

  return (
    <div className="app">
      {<Main word={word} />}
    </div>
  );
}

export default App;
