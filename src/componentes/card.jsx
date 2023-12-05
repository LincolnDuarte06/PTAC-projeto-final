import { useState } from "react";
import {Link} from "react-router-dom"
export default function Card ({listaVideos}){
    return(
        
            listaVideos.map((video) =>
            <div className="card">
                <iframe
                width=""
                height=""
                src={
                    "https://www.youtube.com/embed/" + video.url.slice(17)}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media">
                </iframe>
               </div>
            )
       
    );
}