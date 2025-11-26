import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
} from "firebase/firestore";
import { db, auth } from "../../../../assets/firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./homeGacha.css";

function HomeGacha() {
  const [user, setUser] = useState(null);
  const [canClaim, setCanClaim] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemonCard, setPokemonCard] = useState(null);
  const [nextClaim, setNextClaim] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");

  // Wait for Firebase auth state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) checkCooldown(u);
      else setLoading(false);
    });
    return () => unsub();
  }, []);

  // Update countdown every second
  useEffect(() => {
    if (!nextClaim) return;
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [nextClaim]);

  async function checkCooldown(u) {
    const ref = doc(db, "users", u.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, { lastClaimed: null, inventory: [] });
      setCanClaim(true);
      setLoading(false);
      return;
    }

    const data = snap.data();
    if (!data.lastClaimed) {
      setCanClaim(true);
    } else {
      const now = Date.now();
      const last = data.lastClaimed.toMillis();
      const diff = now - last;
      const cooldown = 24 * 60 * 60 * 1000;
      if (diff >= cooldown) setCanClaim(true);
      else {
        setCanClaim(false);
        setNextClaim(last + cooldown);
      }
    }
    setLoading(false);
  }

  function updateTimer() {
    const now = Date.now();
    const diff = nextClaim - now;
    if (diff <= 0) {
      setCanClaim(true);
      setNextClaim(null);
      setTimeLeft("");
      return;
    }
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
  }

  async function claimReward() {
    if (!canClaim || !user) return;

    const res = await fetch(
      "https://api.pokemontcg.io/v2/cards?pageSize=1&orderBy=random",
      {
        headers: {
          "X-Api-Key": "", // optional: your API key here if you have one
        },
      }
    );
    const { data } = await res.json();
    const card = data[0];

    const reward = {
      id: card.id,
      name: card.name,
      image: card.images?.small || card.images?.large,
      set: card.set?.name,
      rarity: card.rarity || "Unknown",
      timestamp: new Date().toISOString(),
    };

    const ref = doc(db, "users", user.uid);
    await updateDoc(ref, {
      lastClaimed: serverTimestamp(),
      inventory: arrayUnion(reward),
    });

    setPokemonCard(reward);
    setCanClaim(false);
    setNextClaim(Date.now() + 24 * 60 * 60 * 1000);
  }

  if (loading) return <p>Loading...</p>;

  if (!user)
    return (
      <div className="gacha-container">
        <p>You must be logged in to open the daily chest.</p>
        <Link to="/login" className="gacha-link">
          Go to Login
        </Link>
      </div>
    );

  return (
    <div className="gacha-container">
      {canClaim ? (
        <button className="chest-button" onClick={claimReward}>
          Open Daily Chest
        </button>
      ) : (
        <div className="cooldown-box">
          <p>Next chest in: {timeLeft}</p>
          <Link to="/gacha" className="gacha-link">
            Go to Gacha
          </Link>
        </div>
      )}

      {pokemonCard && (
        <div className="reward-display">
          <img src={pokemonCard.image} alt={pokemonCard.name} />
          <p>You got: {pokemonCard.name}</p>
          <p>Set: {pokemonCard.set}</p>
          <p>Rarity: {pokemonCard.rarity}</p>
        </div>
      )}
    </div>
  );
}

export default HomeGacha;
