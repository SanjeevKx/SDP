
import Weblayout from '@/layout/Weblayout'
import Home from '@/pages/Web/Home'
import Login from '@/pages/Web/Login'
import Notfound from '@/pages/Web/Notfound'
import Register from '@/pages/Web/Register'
import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route element={<Weblayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Notfound/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App