import './Trailer.css';
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


import React from 'react'

const Trailer = () => {

    let params = useParams();
    let key = params.ytTrailerId;

    return (
        <div className="react-player-container">
            <Button variant="outline-info" className="me-2" as={Link} to="/">
                <FontAwesomeIcon icon={faAngleLeft} />  Back
            </Button>
            {(key != null) ? <ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`}
                width='100%' height='100%' /> : null}
        </div>
    )
}

export default Trailer