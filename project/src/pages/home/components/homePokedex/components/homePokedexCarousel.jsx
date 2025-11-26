import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./homePokedexCarousel.css";

export default function PokemonCarousel() {
  const [pokemon, setPokemon] = useState([]);
  const trackRef = useRef();
  const controls = useAnimation();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=15");
      const data = await res.json();
      const details = await Promise.all(
        data.results.map(async (p) => {
          const res2 = await fetch(p.url);
          return await res2.json();
        })
      );
      setPokemon(details);
    }
    fetchData();
  }, []);

  const repeated = [...pokemon, ...pokemon];

  useEffect(() => {
    if (!trackRef.current || pokemon.length === 0) return;

    const totalWidth = trackRef.current.scrollWidth / 2;

    controls.start({
      x: [0, -totalWidth],
      transition: {
        ease: "linear",
        repeat: Infinity,
        duration: 30, // adjust speed
      },
    });
  }, [pokemon, controls]);

  return (
    <div className="carousel-container">
      <motion.div
        className="carousel"
        drag="x"
        dragConstraints={{ left: -Infinity, right: Infinity }}
      >
        <motion.div className="inner" ref={trackRef} animate={controls}>
          {repeated.map((p, i) => (
            <div key={i} className="card">
              <img
                src={p.sprites?.other["official-artwork"].front_default}
                alt={p.name}
              />
              <h2>{p.name}</h2>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
