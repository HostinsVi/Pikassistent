import './App.css'
import {createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import Chatbot from './pages/chatbot/chatbot.jsx'
import Login from './pages/login/login.jsx'
import Home from './pages/home/home.jsx'
import NavBar from './pages/home/components/homeHeader/homeNavbar.jsx'
import Ranking from './pages/ranking/ranking.jsx'
import Header from './components/header/header.jsx'


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
    </>
  )
}


const HomeLayout = () => {
  return (
    <>
      <NavBar />
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
    element: <Chatbot />
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