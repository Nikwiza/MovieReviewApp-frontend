import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import './Trailer.css'

const Trailer = () => {
    let params = useParams();
    let key = params.ytTrailerId;
    return(
        <div className = "react-player-container">
            {}
        </div>
    )
}

export default Trainler