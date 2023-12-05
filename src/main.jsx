import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destaque" element={<destaque />}></Route>
        <Route path="/video" element={<video />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
