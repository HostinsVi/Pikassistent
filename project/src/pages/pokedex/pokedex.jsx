import FastAccess from "../../components/fastAccess/fastAccess.jsx";
import Header from "../../components/header/header.jsx";
import "./pokedex.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Pokedex() {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [query, setQuery] = useState("");
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

        <div className="menu">
        <button 
          onClick={() => navigate("/")}
        >
          ←Voltar
        </button>
          <input
            type="search"
            placeholder="Pesquisar por nome..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search"
          />
        </div>
        {loading ? (
          <p>Carregando pokémons...</p>
        ) : (
          <div className="pokemon-list-wrapper" >
            {(() => {
              const filtered = query
                ? pokemons.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
                : pokemons;

              if (filtered.length === 0) {
                return <p>Nenhum Pokémon encontrado.</p>;
              }

              return filtered.map((pokemon, idx) => {
              const pokemonId = pokemon.url.split("/")[6];
              return (
                <div 
                  key={pokemon.name} 
                  className="list-item"
                  onClick={() => navigate(`/pokemon/${pokemonId}`)}
                  
                >
                  <div className="number-wrap">
                    <p className="pokemon-number">#{(pokemonId)}</p>
                  </div>
                  <div className="img-wrap">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonId}.gif`}
                      alt={pokemon.name}
                      className="pokeimg"
                    />
                  </div>
                  <div className="name-wrap">
                    <p className="pokemon-name" >{pokemon.name}</p>
                  </div>
                </div>
              );
              });
            })()}
          </div>
        )}
      </main>
    </section>
  );
}

export default Pokedex;
