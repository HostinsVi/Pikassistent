import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import "./pokemonDetail.css";

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
      } catch (err) {
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    }
    fetchPokemonDetails();
  }, [id]);

  if (loading) {
    return (
      <section className="pokemon-detail-page">
        <Header state="default" />
        <main className="pokemon-detail-main">
          <p>Carregando detalhes...</p>
        </main>
      </section>
    );
  }

  if (!pokemon) {
    return (
      <section className="pokemon-detail-page">
        <Header state="default" />
        <main className="pokemon-detail-main">
          <p>Erro ao carregar Pokémon.</p>
          <button onClick={() => navigate("/pokedex")}>Voltar para Pokedex</button>
        </main>
      </section>
    );
  }

  return (
    <section className="pokemon-detail-page">
      <Header state="default" />
      <main className="pokemon-detail-main">
        <button 
          onClick={() => navigate("/pokedex")}
          
        >
          ←Voltar
        </button>

        <div className="pokemon-detail-container">
          <h1 style={{ textTransform: "capitalize" }}>
            {pokemon.name} #{String(pokemon.id).padStart(3, "0")}
          </h1>
          <div className="pokemon-detail-image-container">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`}
                      
            alt={pokemon.name}
            className="pokemon-image"
          />
            </div>
          <div className="detail-section">
            <h2>Types</h2>
            <div style={{ display: "flex", gap: "12px", marginTop: "12px", justifyContent: "center" }}>
              {pokemon.types.map((type) => (
                <span
                  key={type.type.name}
                  style={{
                    padding: "8px 20px",
                    borderRadius: "20px",
                    
                    textTransform: "capitalize",
                    fontWeight: "bold"
                  }}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h2>Physical Info</h2>
            <div style={{ display: "flex", gap: "32px", marginTop: "12px", justifyContent: "center" }}>
              <div>
                <strong>Height:</strong> {pokemon.height / 10} m
              </div>
              <div>
                <strong>Weight:</strong> {pokemon.weight / 10} kg
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h2>Base Stats</h2>
            <div style={{ maxWidth: "500px", margin: "0 auto" }}>
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name} style={{ marginTop: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ textTransform: "capitalize", fontWeight: "500" }}>
                      {stat.stat.name.replace("-", " ")}
                    </span>
                    <span style={{ fontWeight: "bold" }}>{stat.base_stat}</span>
                  </div>
                  <div style={{ background: "#e0e0e0", borderRadius: "8px", height: "12px", overflow: "hidden" }}>
                    <div
                      style={{
                        background: stat.base_stat > 100 ? "#4caf50" : stat.base_stat > 50 ? "#ff9800" : "#f44336",
                        height: "100%",
                        width: `${(stat.base_stat / 255) * 100}%`,
                        transition: "width 0.3s ease"
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h2>Abilities</h2>
            <ul style={{ marginTop: "12px", listStyle: "none", padding: 0 }}>
              {pokemon.abilities.map((ability) => (
                <li 
                  key={ability.ability.name} 
                  style={{ 
                    textTransform: "capitalize",
                    padding: "8px",
                    background: ability.is_hidden ? "#ee7329" : "#29acbd",
                    margin: "8px 0",
                    borderRadius: "8px"
                  }}
                >
                  {ability.ability.name.replace("-", " ")} 
                  {ability.is_hidden && <span style={{ marginLeft: "8px", fontStyle: "italic" }}>(Hidden Ability)</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
}

export default PokemonDetail;
