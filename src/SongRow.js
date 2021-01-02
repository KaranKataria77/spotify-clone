import React from 'react';
import './SongRow.css';

const SongRow = (props) => {
    return (
        <div className="songRow">
            <img className="songRow__album" src={props.img} alt="" />
            <div className="songRow__info">
                <h1>{props.name}</h1>
                <p>{props.artist}</p>
            </div>
        </div>
    )
}

export default SongRow;