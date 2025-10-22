import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./homeSidebar";
import './homeNavbar.css'

function NavBar() {  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  
// statusA:  descobrir como fazer a div da navbar não mover outros elementos -- done!
// statusB: colocar imagens ao lado dos botões -- done!
// statusC: tirar o efeito de link dos botoões -- done!
// statusC2: centralizer o texto da navbar com os botões -- done!
// statusD: estender a barra até o final da paǵina ou até o meio da página e arrendondar a borda. -- done!
// statusD2: refazer toda a barra pq os elementos precisam estar juntos -- done!
// statusD3: ajustar nav-menu-items para que não ocupem o espaço do botão em nav-menu -- done!

// statusE: começar a sessão de ranking e gacha até sexta -- done!
//  


// statusF: chatglobal sábado de manhã + domingo
// statusG: pokedex por último.

  return (
    <>
      <div className="navbar">
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <div className={sidebar ? "nav-btn-container active" : "nav-btn-container"}>
            <button className="nav-btn" onClick={showSidebar}></button>
            <span onClick={showSidebar}>Menu</span>
            {/*tem que achar uma maneira do link da página atual dar seu ícone*/}
          </div>
          <ul className={sidebar ? "nav-menu-items active" : "nav-menu-items"} onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <img src={item.image} className="nav-img"></img>
                    <span className={item.titleClass}>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;