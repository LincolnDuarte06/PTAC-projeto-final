import Header from "./componentes/header";
import Card from "./componentes/card"; 
import './home.css';
export default function Home(){

  const listaVideos = JSON.parse(localStorage.getItem("Lista")) || [];
  console.log(listaVideos)

  return(
    <div className="homed">
    <Header/>
    <br></br>
    <Card listaVideos={listaVideos}/>
    </div>
    
  );
}