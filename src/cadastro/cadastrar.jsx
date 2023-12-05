import { useState } from "react";
import { Link } from "react-router-dom";
export default function cadastrar (){
    
        const listaLocalStorage= JSON.parse(localStorage.getItem("Lista"));
        const [nome, setNome] = useState("");
        const [autor, setAutor] = useState("");
        const [descricao, setDescricao] = useState(listaLocalStorage || []);
        const [url, setUrl] = useState(listaLocalStorage || []);
        const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
        
        useEffect(()=> {localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);
    
         //-------------SALVAR-------------------//
        const salvar = (e) => {
            e.preventDefault();
            setLista([...lista, {
                atividade: atividade,
                id: id,
                preco:preco
            }]);
            setId(id + 1);
            setAtividade("");
            setPreco("");
        };


        const remover = (id) => {
            /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
            const auxLista = [];
            lista.map((lista) => {
                if (lista.id !== id) {
                    auxLista.push(lista);
                }
            });
            setLista(auxLista);
        }
        return (
            <div class="container">
                
                <h1>Lista de Atividades</h1>
                <form onSubmit={salvar}>
                    <input type="text"
                        value={atividade}
                        onChange={(e) => { setAtividade(e.target.value) }} />
    
                        <input type="text"
                        value={preco}
                        onChange={(e) => { setPreco(e.target.value) }} />
                        <br></br>
                    <button>ADICIONAR</button>
                </form>
                {lista.map((ativ) =>
                    <ul key={ativ.id}>
                        <li>
                            <p className="p1">{ativ.id} {ativ.atividade} </p>
                            <p className="p">{ativ.preco}</p>
                            
                            <button onClick={() => remover(ativ.id)}>Remover</button>
                        </li>
                    </ul>
                )}
                <Link className="botao-home" to="/">Voltar a ser natural</Link>
            </div>
            
        );
    }
    
