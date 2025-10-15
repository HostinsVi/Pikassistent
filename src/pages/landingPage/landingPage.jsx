import { useEffect, useState } from "react";
import FastAccess from "../../components/fastAccess/fastAccess.jsx";
import Header from "../../components/header/header.jsx";
import "./landingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {

  const navigate = useNavigate();


  return (
    <section className="landingPage_container">
      <Header state="default"/>

      <main className="landingPage_content">
        <p>Mundo pokasekjlaskelahfaça seu login agora e junte-se a nos!...!</p>

        <button onClick={() => navigate('/login')}>Cadastre-se aqui!!</button>

        <section className="pikassistentIntro_container">
          <h2>O que é o pikassistent</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. 
          </p>
        </section>

        <section className="p_container">
          <aside className="textWhy_container">
          <h3>Por que?</h3>
          <p>text</p>
          </aside>
          <aside className="textHow_container">
          <h3>Como?</h3>
          <p>text</p>
          </aside>
        </section>
      </main>
      <FastAccess />
    </section>
  );
}

export default LandingPage;
