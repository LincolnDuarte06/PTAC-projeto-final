import {Link} from "react-router-dom"
export default function Card ({listaVideos}){
    console.log(listaVideos)
    return(
            listaVideos.map((video)=>
            <div className="card">
                 <iframe width="100" height="100" src={"https://www.youtube.com/embed/" + video.url.slice(17)}></iframe>

                <p>{video.nomeMSC}</p>
                <p>{video.artista}</p>

                <Link to={`/descricao/${video.id}`}>
                <p>Descrição</p>
                </Link>
              
            </div>
            )
            );
       
    
}