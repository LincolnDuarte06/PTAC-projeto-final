import { useParams } from "react-router-dom";
import Header from "../componentes/header";


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
    <iframe width="100" height="100" src={"https://www.youtube.com/embed/" + atividade[0].url.slice(17)}></iframe>
        <p>{atividade[0].artista}</p>
        <p>{atividade[0].nomeMSC}</p>
    
    </div>
    )
}