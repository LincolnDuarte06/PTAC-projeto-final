import Header from "../componentes/header";
import Card from "../componentes/card"; 

export default function Destaque(){

  const listaVideos = JSON.parse(localStorage.getItem("Lista")) || [];
  const auimaue = listaVideos.slice(-4);

  return(
    <div>
    <Header/>
    <Card listaVideos={auimaue}/>
    </div>
    
  );
}