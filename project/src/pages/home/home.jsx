import HomeRanking from './components/homeRanking/homeRanking';
import HomeGacha from './components/homeGacha/homeGacha';
import HomeChatOnline from './components/homeChatOnline/homeChatOnline';
import HomePokedex from './components/homePokedex/homePokedex';
import { Link } from "react-router-dom";
import './home.css';
import FastAccess from '../../components/fastAccess/fastAccess';
import Header from '../../components/header/header';

// document.addEventListener((event) => {
//   if (event.target is NOT the element
//   containing the image) {
//     close
//   }
// }
// tem que botar algo assim nas páginas que usam navbar
// para que o usuário consiga sair do menu sem ter que 
// apertar no botão de menu de novo

function Home() {
  return (
    <div className="home">
      <Header userConnected={'true'}/>
      <div className='homeFastAccess'>
        <h3>Acesso Rápido:</h3>
       <FastAccess />
       <h3 className='homeFastAccess-paragraph'>Mensagens Recentes: </h3>
       <Link to="/chatonline" className='homeChatOnline'>
         <HomeChatOnline />
        </Link>
      </div>
      <div className='homeGacha'>
        <HomeGacha />
      </div>
      <div className='homePokedex'>
        <HomePokedex />
      </div>
    </div>
  )
}

export default Home;
