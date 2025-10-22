import { home, gachahome, pokeballhome, iahome, chathome } from '../../../../assets/img/index';

export const SidebarData = [
  {
    title: "Home",
    titleClass: "title-nav-bar",
    path: "/home",
    cName: "nav-container",
    image: home,
  },
  {
    title: "Chat Global",
    titleClass: "title-nav-bar",
    path: "/chatglobal",
    cName: "nav-container",
    image: chathome,    
  },
  {
    title: "Pokedex",
    titleClass: "title-nav-bar",
    path: "/pokedex",
    cName: "nav-container",
    image: pokeballhome,
  },
  {
    title: "ChatBot",
    titleClass: "title-nav-bar",
    path: "/chatbot",
    cName: "nav-container",
    image: iahome,
  },
  {
    title: "Gacha",
    titleClass: "title-nav-bar",
    path: "/gacha",
    cName: "nav-container",
    image: gachahome
  },
  {
    title: "Ajuda",
    titleClass: "title-nav-bar",
    path: "https://github.com/HostinsVi/Pikassistent",
    cName: "nav-container",
    image: gachahome
  }
]
