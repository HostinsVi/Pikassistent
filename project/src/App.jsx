import './App.css'
import {createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import Chatbot from './pages/chatbot/chatbot.jsx'
import Login from './pages/login/login.jsx'
import Home from './pages/home/home.jsx'
import NavBar from './pages/home/components/homeHeader/homeNavbar.jsx'
import Ranking from './pages/ranking/ranking.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import SignUp from './pages/signUp/signUp.jsx'
import ChatOnline from './pages/chatOnline/chatOnline.jsx'
import Gacha from './pages/gacha/gacha.jsx'
import Pokedex from './pages/pokedex/pokedex.jsx'
import PokemonDetail from './pages/pokemonDetail/pokemonDetail.jsx'

// Pra adicionar uma rota, se precisar da navbar ou do header, cria um layout.
// Toda rota precisa começar com maiuscula sempre. (Pascal case)
// Ex.: const TesteLayout = () => {
// return (
//  <>
//    <NavBar />
//    <PaginaTeste />
//  </>
// )
//}

// A fazer: criar um arquivo PageLayouts e mover os Layouts pra lá, importando-as aqui.


const LoginLayout = () => {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  )
}


const HomeLayout = () => {
  return (
    <>
      <Home />
    </>
  )
}

const RankingLayout = () => {
  return (
    <>
      <NavBar />
      <Ranking />
    </>
  )
}  

const SignUpLayout = () => {
  return (
    <>
      <Header />
      <SignUp />
      <Footer />
    </>
  )
}

const ChatOnlineLayout = () => {
  return (
    <>
      <Header state={'default'} userConnected={true}/>
      <ChatOnline />
    </>
  )
}

const ChatBotLayout = () => {
  return (
    <>
      <Header state={"default"} userConnected={true}/>
      <Chatbot />
    </>
  )
}

const GachaLayout = () => {
  return (
    <>
      <NavBar />
      <Gacha />
    </>
  )
}

const PokedexLayout = () => {
  return (
    <>
      <Header />
      <Pokedex />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  { // Landing
    path: '/',
    element: <LandingPage />,
  },
  { // Login
    path: '/login',
    element: <LoginLayout />
  },
  { // Chatbot
    path: '/chatbot',
    element: <ChatBotLayout />
  },
  { // Redirect 
    path: '*',
    element: <Navigate to='/' replace/>
  },
  {
    path: '/home',
    element: <HomeLayout />
  },
  {
    path: '/ranking',
    element: <RankingLayout />
  },
  {
    path: '/signup',
    element: <SignUpLayout />
  },
  {
    path: '/chatonline',
    element: <ChatOnlineLayout />
  },
  {
    path: '/gacha',
    element: <GachaLayout />
  },
  {
    path: '/pokedex',
    element: <Pokedex />
  },
  {
    path: '/pokemon/:id',
    element: <PokemonDetail />
  }
]);
     
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

 // <Routes>
      //   <Route path='/' element={<LandingPage/>}/>
      //   <Route path='/login' element={<Login/>}/>
      //   <Route path='/chatbot' element={<Chatbot/>}/>
      //   <Route path='*' element={<Navigate to='/' replace/>}/>
        
      // </Routes>