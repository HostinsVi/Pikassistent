import './home.css';
import HomeRanking from './components/homeRanking/homeRanking';
import HomeGacha from './components/homeGacha/homeGacha';
import HomeChatGlobal from './components/homeChatGlobal/homeChatGlobal';
import HomePokedex from './components/homePokedex/homePokedex';

// document.addEventListener((event) => {
//   if (event.target is NOT the element
//   containing the image) {
//   }
// }

function Home() {
  return (
    <div className="home">
      <div className='header'>
      </div>
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