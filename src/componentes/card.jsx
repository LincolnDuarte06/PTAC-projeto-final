import {Link} from "react-router-dom"
import '../home.css'
export default function Card ({listaVideos}){
    console.log(listaVideos)
    return(
            listaVideos.map((video)=>
            <div className="card">
                 
                 <iframe width="1280" height="720" src={"https://www.youtube.com/embed/" + video.url.slice(17)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <p>{video.nomeMSC}</p>
                <p>{video.artista}</p>

                <Link to={`/descricao/${video.id}`}>
                <p>Descrição</p>
                </Link>
              
            </div>
            )
            );
       
    
}