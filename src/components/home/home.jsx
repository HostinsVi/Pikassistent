import FastAccess from "../fastAccess/fastAccess";
import './home.css';

function Home() {
    return (
        <div className="home">
            <div className="home-idk">
                 Around the World
            </div>
            <div className="home-chat-global">
                Chat Global
            </div>
            <Carousel />
            <FastAccess />
        </div>
    )
}

export default Home;