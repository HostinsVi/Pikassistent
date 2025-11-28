import {
  chatIcon,
  downArrow,
  pokedex,
  premierBall,
} from "../../assets/img/index.jsx";
import FastAccess from "../../components/fastAccess/fastAccess.jsx";
import Header from "../../components/header/header.jsx";
import "./landingPage.css";
import { useNavigate } from "react-router-dom";

// Botão de cadastro  está levando direto pra home e pulando login pra facilitar o desenvolvimento.

function LandingPage() {
  const navigate = useNavigate();

  return (
    <section className="landingPage_container">
      <Header state="default" />
      <main className="landingPage_content">
        <section className="presentation_container">
          <section className="presentation_content">
            <div className="presentation_title">
              <h2>Conheça o Pikassistent</h2>
              <p>---slogan---</p>
            </div>

            <button onClick={() => navigate("/home")}>
              Começe a montar a sua jornada aqui!
            </button>

            <section className="pikassistentIntro_container">
              <h2>O que é o pikassistent</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
            </section>
          </section>
          <div className="moreInfo_helper">
            <p>Mais informações Abaixo...</p>
            <img src={downArrow} alt="" />
          </div>
        </section>
        <section className="elementsInfo_container">
          <section className="p_container">
            <aside className="textWhy_container">
              <aside className="textWhy_title">
                <h3>Por que?</h3>
              </aside>
              <aside className="textWhy_content">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country,
                </p>
              </aside>
            </aside>
            <aside className="textWhy_container">
              <aside className="textWhy_title">
                <h3>Como?</h3>
              </aside>
              <aside className="textWhy_content">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country,
                </p>
              </aside>
            </aside>
          </section>
          <h3 className="features_title">O que propomos:</h3>
          <section className="features_container">
            <p style={{ marginLeft: "10px" }}>
              - Nós disponibilizamos tecnologias para te auxiliar em sua jormada
              pokemon, sendo elas:
            </p>

            <div className="pokedexInfo">
              <img src={pokedex} alt="" />
              <span>
                Uma Pokedex, que você poderá identificar e analizar os pokemons
                assim como as suas informações.
              </span>
            </div>
            <div className="chatBotInfo">
              <img src={premierBall} alt="" />
              <span>
                Um chatbot que permitirá que você tire duvidas e monte as suas
                estratégias da melhor maneira possivel.
              </span>
            </div>
            <div className="chatGlobalInfo">
              <img src={chatIcon} alt="" />
              <span>
                Um Chat global que permitirá com que você possa conversar, tirar
                e compartilhar as suas experiências com os demais treinadores
                Pokemon.
              </span>
            </div>
            <p>
              Junte-se a nossa comunidade para ter acesso a não somente essas
              ferramentas mas também mais algumas extras!
            </p>
          </section>
        </section>
        <footer>
          <p>
            Este projeto foi desenvolvido para uma atividade acadêmica e não tem
            nenhum intuito monetário
          </p>
        </footer>
      </main>
    </section>
  );
}

export default LandingPage;
