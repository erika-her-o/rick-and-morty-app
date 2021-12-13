import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Charecters from './components/Charecters';
import Pages from './components/Pages';

function App() {

  const [characters, setCharecters] = useState([]);
  const [info, setInfo] = useState({})

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharecters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCharecters(data.results);
      setInfo(data.info);
    })
    .catch(error => console.log(error))
  }

  const onPrevius = ()=> {
    fetchCharecters(info.prev);
  }

  const onNext = ()=> {
    fetchCharecters(info.next);
  }



  useEffect(() => {
    fetchCharecters(initialUrl)
  }, [])

  return (  
    <>
      <Navbar brand="Rick and Morty App"/>

      <div className="container ">
        <Pages prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext}/>
        <Charecters characters={characters}/>
        <Pages prev={info.prev} next={info.next} onPrevius={onPrevius} onNext={onNext}/>
      </div>
    </>
    
  );
}

export default App;
