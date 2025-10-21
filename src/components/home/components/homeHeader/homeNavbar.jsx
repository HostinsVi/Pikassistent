import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./homeSidebar";
import './homeNavbar.css'

function NavBar() {  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  


  return (
    <>
      <div className="navbar">
        {/* <Link to="#" className="menu-bars"> */}
          <button className="navbtn" onClick={showSidebar}></button>
        {/* </Link> */}
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <img src="#"></img>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <img src={item.image} className="nav-img"></img>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;