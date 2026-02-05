import { useState } from 'react';
import './App.css'
import imageRick from './img/rick-morty.png' 
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState<any[]>()
  const request_api = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const response = await api.json();
    setCharacters(response.results)
  }
  return (
    <>
      <h1 className='title'>Rick and Morty</h1>
      {
        characters ? 
        <Characters characters={characters} setCharacters={setCharacters}></Characters> 
        : (
          <>
            <img src={imageRick} alt="Rick and Morty" className='img-home' />
            <button onClick={request_api} className='btn-search' >Buscar Personajes</button>
          </>
        )
      }

      
    </>
  )
}

export default App
