import './App.css'
import { BrowserRouter, Navigate, Route, Router } from 'react-router-dom'
import LandingPage from './pages/landingPage/landingPage'

function App() {

  return (
    <BrowserRouter>
      <Router> 
        <Route path='/' element={<LandingPage/>}/>
        <Route path='*' element={<Navigate to='/' replace/>}/>

      </Router>
    </BrowserRouter>
  )
}

export default App
