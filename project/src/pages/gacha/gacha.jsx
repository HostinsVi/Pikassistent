import { useEffect, useState } from "react";
import { db, auth } from "../../assets/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import "./gacha.css";

function Gacha() {
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) await loadInventory(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  async function loadInventory(u) {
    const ref = doc(db, "users", u.uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data();
      setCards(data.inventory || []);
    }
  }

  if (loading) return <p>Loading inventory...</p>;

  if (!user)
    return (
      <div className="gacha-home">
        <p>You must be logged in to see your inventory.</p>
      </div>
    );

  return (
    <div className="gacha-home">
      <h1>Your Card Inventory</h1>

      {cards.length === 0 ? (
        <p>No cards yet. Open your daily chest to get your first card!</p>
      ) : (
        <div className="card-grid">
          {cards
            .slice()
            .reverse()
            .map((card) => (
              <div key={card.timestamp} className="card-item">
                <img src={card.image} alt={card.name} />
                <div className="card-info">
                  <h3>{card.name}</h3>
                  <p>{card.set}</p>
                  <p className="rarity">{card.rarity}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Gacha;
