import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastrar from './cadastro/cadastrar'
import Home from './Home'
import Descricao from './descricao/descricao'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/descricao" element={<Descricao />}></Route>
        <Route path="/cadastro" element={< Cadastrar />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
