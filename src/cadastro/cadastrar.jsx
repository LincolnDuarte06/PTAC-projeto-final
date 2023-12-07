import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../componentes/header";
export default function Cadastrar (){
    
        const listaLocalStorage= JSON.parse(localStorage.getItem("Lista"))|| [];
        const [nomeMSC, setNomeMSC] = useState("");
        const [artista, setArtista] = useState("");
        const [url, setUrl] = useState("");
        const [vizualizacao, setVizualizacao] = useState("");
        const [lacamento, setLancamento] = useState("");
        const [lista, setLista] = useState(listaLocalStorage);                                                                                                                          
        const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
        
        useEffect(()=> {localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);


    
         //-------------SALVAR-------------------//
        const salvar = (e) => {
            e.preventDefault();
            setLista([...lista, {
                nomeMSC: nomeMSC,
                artista: artista,
                url: url,
                vizualizacao: vizualizacao,
                lacamento: lacamento,
                id: id,
            }]);
            setId(id + 1);
            setNomeMSC("");
            setArtista("");
            setUrl("");
            setVizualizacao("");
            setLancamento("");
        };


        
        return (
            <div className="container">
                <Header/>
                <h1>Lista de Atividades</h1>
                <form onSubmit={salvar}>
                    <h1>Nome da Musga:</h1>
                    <input type="text"
                        value={nomeMSC}
                        onChange={(e) => { setNomeMSC(e.target.value) }} />

                        <h1>Artista:</h1>
                        <input type="text"
                        value={artista}
                        onChange={(e) => { setArtista(e.target.value) }} />
                        
                        <h1>Vizualizacao:</h1>
                        <input type="text"
                        value={vizualizacao}
                        onChange={(e) => { setVizualizacao(e.target.value) }} />

                        <h1>URL:</h1>
                        <input type="text"
                        value={url}
                        onChange={(e) => { setUrl(e.target.value) }} />

                        <h1>Lançamento:</h1>
                        <input type="text"
                        value={lacamento}
                        onChange={(e) => { setLancamento(e.target.value) }} />

                        <br></br>

                    <button>ADICIONAR</button>
                </form>
             
            </div>
            
        );
    }
    
