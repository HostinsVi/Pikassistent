import { homeIcon, globalchatIcon, pokedexIcon, chatBotIcon, extraIcon } from '../../../../assets/img/index';

export const SidebarData = [
  {
    title: "Home",
    titleClass: "title-nav-bar",
    path: "/home",
    cName: "nav-container",
    image: homeIcon,
  },
  {
    title: "Chat Global",
    titleClass: "title-nav-bar",
    path: "/chatonline",
    cName: "nav-container",
    image: globalchatIcon,    
  },
  {
    title: "Pokedex",
    titleClass: "title-nav-bar",
    path: "/pokedex",
    cName: "nav-container",
    image: pokedexIcon,
  },
  {
    title: "ChatBot",
    titleClass: "title-nav-bar",
    path: "/chatbot",
    cName: "nav-container",
    image: chatBotIcon,
  },
  {
    title: "Gacha",
    titleClass: "title-nav-bar",
    path: "/gacha",
    cName: "nav-container",
    image: extraIcon
  },
  {
    title: "Ajuda",
    titleClass: "title-nav-bar",
    path: "https://github.com/HostinsVi/Pikassistent",
    cName: "nav-container",
    image: extraIcon
  }
]
