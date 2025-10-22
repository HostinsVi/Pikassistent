import './home.css';
import HomeRanking from './components/homeRanking/homeRanking';
import HomeGacha from './components/homeGacha/homeGacha';
import HomeChatGlobal from './components/homeChatGlobal/homeChatGlobal';
import HomePokedex from './components/homePokedex/homePokedex';

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
      <div className='homeGachaRanking'>
        <HomeRanking />
        <HomeGacha />
      </div>
      <div className='homeChatGlobal'>
        <HomeChatGlobal />
      </div>
      <div className='homePokedex'>
        <HomePokedex />
      </div>
    </div>
  )
}

export default Home;