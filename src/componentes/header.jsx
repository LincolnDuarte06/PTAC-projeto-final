import { useState } from "react";
import { Link } from "react-router-dom";
export default function header(){
    return(
        <div>
             <h1> PTAC 2 - PROJETO FINAL</h1>
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link    " aria-current="page" href="cadastro">Cadastrar</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="destaque">Destaque</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 
  
 
        </div>
    )
}