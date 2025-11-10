import './ranking.css';
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from '../../assets/firebase';

import { useState } from "react";

function Ranking() {
  const [users, setUsers] = useState([]);

  const get = async () => {
    const q = query(collection(db, 'users'), where("team", "==", "yellow"));
    const querySnapshot = await getDocs(q);
    setUsers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  return (
    <div className='leaderboard-container'>
      <button onClick={get}>Fetch Yellow Team</button>
      <ul>
        {users.map(u => (
          <li key={u.idNumber}>{u.displayName} — {u.likes}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ranking;


// statusA: rankingData vai criar divs dentro de top-rank-columns, ele só pode criar 3
// statusB: rankingData vai criar divs dentro de leaderboards-container, vai ser um top 50
// statusC: aplicar a paleta de cores ao projeto

// ao carregar a paǵina, checa-se a quantia de likes no DB -- n consigo agr
// listar jogadores no leaderboards > organizar por likes do time -- {userData: {likeData}}
// três maiores likes saem do leaderboards e sobem pro top rank
// caso mesma quantia de likes, prioridade alfabética