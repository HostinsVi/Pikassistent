import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'
import Chatbot from './pages/chatbot'
import Login from './pages/login/login'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='*' element={<Navigate to='/' replace/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
