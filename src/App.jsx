import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {MonCherchateur} from './components/MonCherchateur'
import {MesTrouvailles} from './components/MesTrouvailles'

function App() {
  const [title, setTitle] = useState("Hellow !")
  const [movies, setMovies] = useState([]);

  useEffect((() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${title}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data)
        console.clear();
        console.log(data)
      })
  }), [title])

  return (
    <div className="App">
      <h1>{title}</h1>
      <button onClick={() => setTitle("Mon nouveau titre")}> changer le titre</button>
      <MonCherchateur title = {title} setTitle = {setTitle}/>
      <MesTrouvailles films = {movies}/>
    </div>
  )
}

export default App
