import './ranking.css';
// import { rankingData } from './userprofiles';

function Ranking() {
 return (
  // <div className='wrap'>
  //   <div className='top-rank-container'>
  //     <div className='top-rank-columns'>
  //      {/* {rankingData.map((item, index) => {
  //             return (
  //               <div key={index} className={item.nameuser}>
  //                 <Link to={item.path}>
  //                   <img src={item.image} className="nav-img"></img>
  //                   <span className={item.titleClass}>{item.title}</span>
  //                 </Link>
  //               </div>
  //     </div> */}
  //   </div>
    <div className='leaderboard-container'>
      real
    </div>

  // </div>
 )
}
export default Ranking

// statusA: rankingData vai criar divs dentro de top-rank-columns, ele só pode criar 3
// statusB: rankingData vai criar divs dentro de leaderboards-container, vai ser um top 50
// statusC: aplicar a paleta de cores ao projeto

// ao carregar a paǵina, checa-se a quantia de likes no DB -- n consigo agr
// listar jogadores no leaderboards > organizar por likes do time -- {userData: {likeData}}
// três maiores likes saem do leaderboards e sobem pro top rank
// caso mesma quantia de likes, prioridade alfabética