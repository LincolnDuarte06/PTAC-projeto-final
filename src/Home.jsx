import Header from "./componentes/header";
import Card from "./componentes/card"; 

export default function Home(){

  const listaVideos = JSON.parse(localStorage.getItem("Lista")) || [];
  console.log(listaVideos)

  return(
    <div>
    <Header/>
    <Card listaVideos={listaVideos}/>
    </div>
    
  );
}