import Header from "./componentes/header";
import Card from "./componentes/card";


const lista = JSON.parse(localStorage.getItem("listaVideos"))

export default function Home(){
  return(
    <div>
    <Header/>
    <Card listaVideos={listaVideos}/>
    </div>
    
  );
}