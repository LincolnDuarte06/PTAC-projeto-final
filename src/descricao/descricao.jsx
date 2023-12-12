import { useParams } from "react-router-dom";
import Header from "../componentes/header";
import '../home.css'

export default function Descricao(){
const {id} = useParams();
const lista = JSON.parse( localStorage.getItem("Lista"));

const atividade = lista.filter( (objeto) => {
  if(objeto.id == id){
    return objeto;
}
else{ return  null;
};
});

return(
    
    <div>
    <Header/>
    <br></br>
    <center>
    <iframe width="500" height="500" src={"https://www.youtube.com/embed/" + atividade[0].url.slice(17)}></iframe>
        <h2>{atividade[0].artista}</h2>
        <h2>{atividade[0].nomeMSC}</h2>
        <h2>{atividade[0].vizualizacao}</h2>
        <h2>{atividade[0].lacamento}</h2>
        </center>
    </div>
    )
}