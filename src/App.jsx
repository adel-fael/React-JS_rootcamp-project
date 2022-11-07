import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './pages/LogIn'
import Registered from './pages/Registered'
import RootCamp from './pages/RootCamp'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootCamp/>} />
          <Route path="/admin" element={<LogIn/>} />
          <Route path="/registered" element={<Registered/>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
