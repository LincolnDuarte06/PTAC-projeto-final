import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastrar from './cadastro/cadastrar'
import Home from './Home'
import descricao from './descricao'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/descricao" element={<descricao />}></Route>
        <Route path="/cadastro" element={< cadastrar />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
