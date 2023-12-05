import Header from "./componentes/header";
import Card from "./componentes/card";
export default function Home(){
  return(
    <div>
    <Header/>
    <Card listaVideos={listaVideos}/>
    </div>
  )
}