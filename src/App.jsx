import './App.css'
import {createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import Chatbot from './pages/chatbot'
import Login from './pages/login/login'
import Registration from './components/registration/registration'

// procurei sobre router no google e o que tinha aqui ( ta no final do doc ) parecia
// ser a versão antiga, acabou q essa aqui tmb n é a atual, mas resolvi ficar com ela
// pq pelo q vi do tutorial ali, é bem simples de adicionar children pras páginas,
// oq vai deixar a pokedex mais fácil de fazer e isso aq é o msm de antes, mas OOP.

const router = createBrowserRouter([
  { // Landing
    path: '/',
    element: <LandingPage />,
  },
  { // Login
    path: '/login',
    element: <Login />
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
    path: '/registration',
    element: <Registration />
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