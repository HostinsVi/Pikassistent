import FastAccess from "../../components/fastAccess/fastAccess.jsx";
import Header from "../../components/header/header.jsx";
import "./pokedex.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Pokedex() {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await res.json();
        setPokemons(data.results);
      } catch (err) {
        setPokemons([]);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemons();
  }, []);

  return (
    <section className="pokedex-page">
      <Header state="default" />
      <main className="pokedex-main">
        <h1>Pokedex</h1>
        {loading ? (
          <p>Carregando pokémons...</p>
        ) : (
          <div className="pokemon-list-wrapper" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {pokemons.map((pokemon, idx) => {
              const pokemonId = pokemon.url.split("/")[6];
              return (
                <div 
                  key={pokemon.name} 
                  className="list-item"
                  onClick={() => navigate(`/pokemon/${pokemonId}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="number-wrap">
                    <p className="pokemon-number">#{(pokemonId)}</p>
                  </div>
                  <div className="img-wrap">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemonId}.gif`}
                      alt={pokemon.name}
                      className="pokeimg"
                    />
                  </div>
                  <div className="name-wrap">
                    <p className="pokemon-name" style={{ textTransform: "capitalize" }}>{pokemon.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </section>
  );
}

export default Pokedex;
