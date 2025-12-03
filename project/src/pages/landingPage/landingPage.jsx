import { useState, useEffect } from "react";
import { chatIcon, downArrow, pokedex, premierBall } from "../../assets/img/index.jsx";
import Header from "../../components/header/header.jsx";
import "./landingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="landingPage_container">
      <Header state="default" />
      
      <main className="landingPage_content">
        {/* Hero Section */}
        <section className="presentation_container">
          <div className="hero-background"></div>
          <div className="presentation_content">
            <div className="presentation_title animate-on-scroll">
              <h1 className="main-title">
                <span className="title-highlight">Pika</span>ssistent
              </h1>
              <p className="slogan">Seu Assistente Pokémon Definitivo!</p>
            </div>

            <button 
              className="cta-button animate-on-scroll"
              onClick={() => navigate("/home")}
            >
              <span className="button-icon">⚡</span>
              Comece a Montar a Sua Jornada Aqui!
            </button>

            <section className="pikassistentIntro_container animate-on-scroll">
              <h2>O Que é o Pikassistent?</h2>
              <p>
                Uma plataforma completa para treinadores Pokémon que une inteligência artificial, 
                comunidade e ferramentas estratégicas. Nossa missão é ajudar você a se tornar um 
                Mestre Pokémon com recursos inovadores e uma experiência única.
              </p>
            </section>
          </div>
          
          <div className="moreInfo_helper">
            <p>Desça para explorar mais</p>
            <img src={downArrow} alt="Seta para baixo" className="bounce" />
          </div>
        </section>

        {/* Features Section */}
        <section className="elementsInfo_container">
          <div className="mission-section">
            <div className="p_container">
              <div className="textWhy_container animate-on-scroll">
                <div className="textWhy_title">
                  <h3>🎯 Por Que?</h3>
                </div>
                <div className="textWhy_content">
                  <p>
                    Percebemos que muitos treinadores enfrentam dificuldades para encontrar 
                    informações confiáveis, montar times competitivos e compartilhar experiências. 
                    O Pikassistent nasceu para solucionar esses problemas, criando um hub completo 
                    para a comunidade Pokémon brasileira.
                  </p>
                </div>
              </div>
              
              <div className="textWhy_container animate-on-scroll">
                <div className="textWhy_title">
                  <h3>🚀 Como?</h3>
                </div>
                <div className="textWhy_content">
                  <p>
                    Combinamos tecnologia de ponta com conhecimento especializado em Pokémon. 
                    Usamos IA avançada para análises estratégicas, criamos uma comunidade ativa 
                    para troca de experiências e desenvolvemos ferramentas intuitivas para todos 
                    os níveis de treinadores.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="features_title animate-on-scroll">O Que Oferecemos:</h2>
          
          <section className="features_container">
            <p className="features-intro animate-on-scroll">
              Nós disponibilizamos tecnologias inovadoras para auxiliar em sua jornada Pokémon:
            </p>

            <div className="feature-card pokedexInfo animate-on-scroll">
              <div className="feature-icon">
                <img src={pokedex} alt="Pokédex" />
              </div>
              <div className="feature-content">
                <h3>Pokédex Inteligente</h3>
                <p>
                  Acesse informações detalhadas de todos os Pokémon, incluindo estatísticas, 
                  evoluções, fraquezas e movimentos. Busque por tipo, geração ou habilidade.
                </p>
                
              </div>
            </div>

            <div className="feature-card chatBotInfo animate-on-scroll">
              <div className="feature-icon">
                <img src={premierBall} alt="Chatbot" />
              </div>
              <div className="feature-content">
                <h3>Pikassistent IA</h3>
                <p>
                  Nosso assistente de IA especializado em Pokémon responde dúvidas, sugere 
                  estratégias e ajuda a montar times vencedores baseado em análises avançadas.
                </p>
               
              </div>
            </div>

            <div className="feature-card chatGlobalInfo animate-on-scroll">
              <div className="feature-icon">
                <img src={chatIcon} alt="Chat Global" />
              </div>
              <div className="feature-content">
                <h3>Comunidade Global</h3>
                <p>
                  Conecte-se com treinadores de todo o mundo, compartilhe conquistas, 
                  participe de torneios e faça trocas seguras com outros jogadores.
                </p>
                
              </div>
            </div>

            <div className="cta-final animate-on-scroll">
              <h3>Pronto Para Se Tornar um Mestre Pokémon?</h3>
              <p>
                Junte-se a milhares de treinadores e descubra todo o potencial do mundo Pokémon 
                com o Pikassistent. Totalmente gratuito e desenvolvido por fãs, para fãs!
              </p>
              <div className="cta-buttons">
                <button 
                  className="primary-cta"
                  onClick={() => navigate("/signup")}
                >
                  Criar Conta Grátis
                </button>
                <button 
                  className="secondary-cta"
                  onClick={() => navigate("/login")}
                >
                  Já Tenho Conta
                </button>
              </div>
            </div>
          </section>
        </section>

        {/* Footer */}
        <footer className="landing-footer">
          <div className="footer-content">
            <div className="footer-info">
              <h4>Pikassistent</h4>
              <p>Seu companheiro na jornada Pokémon</p>
            </div>
            <div className="footer-disclaimer">
              <p>
                ⚠️ Este projeto foi desenvolvido para uma atividade acadêmica e não tem 
                nenhum intuito monetário. Pokémon é uma marca registrada da Nintendo.
              </p>
              <p className="footer-love">
  
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default LandingPage;