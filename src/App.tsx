import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { getAllPokemonList } from "./api/dataApi";

function App() {
  const [pokemonData,setPokemonData] = useState([]);
  
  useEffect(() => {
    async function fetchData(){
      const data = await getAllPokemonList();
      setPokemonData(data?.results);
    }
    fetchData();
  },[])
  return (
    <div style={{marginTop:'40px',justifyContent:'space-around',display:'flex',flexWrap:'wrap', width:'90%', margin:'auto'}}>
      
      {pokemonData?.map((poke:any,i:any) => {
        return (
          <div key={i} style={{width: '400px',height:'330px', border:'2px solid #000000', margin:'30px 10px'}}>
              <div style={{padding:'5px 10px'}}>
                <p style={{fontWeight:'bold',textTransform:'capitalize'}}> {poke?.name}</p>
              </div>
              <img style={{height: '300px', width:'300px'}} alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${poke?.name}.jpg`}/>
          </div>
        )
      })}
      <div>

      </div>
    </div>
  );
}

export default App;
