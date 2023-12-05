import {Link} from "react-router-dom"
export default function Card ({listaVideos}){
    return(
        
            <div className="card">
                <Link to={`./descricao/descricao/${video.id}`}>
               <p>Descrição</p>
               </Link>

                    <iframe width="1280" height="720"
                    src={"https://www.youtube.com/embed/" + video.Link.slice(17)}
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
            )
       
    
}