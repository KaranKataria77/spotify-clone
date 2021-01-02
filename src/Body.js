import React from 'react';
import './Body.css';
import Header from './Header';
import {DataLayerValue} from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

const Body = ({ spotify }, props) => {

    const [{ discover_weekly,playlists }, dispatch] = DataLayerValue()

    return (
        
        <div className="body">
            {console.log(discover_weekly)}
            <Header spotify={ spotify } />
            <div className="body__info">
                {/* <img src={discover_weekly?.images[0].url} alt="" /> */}
                {/* <img src={playlists?.items[0].images[0].url} alt="" /> */}
                {playlists?.items?.map(playlist => (
                    <React.Fragment>
                    <img src={playlist.images[0].url} alt="" />
                    <div className="body__infoText">
                        <p>PLAYLIST</p>
                        <h1>{playlist.name}</h1>
                    </div>
                    </React.Fragment>
                ))}
                {/* <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div> */}
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle"/>
                    {/* <FavoriteIcon fontSize="large" /> */}
                    <MoreHorizIcon className="body__shuffle1" />
                </div>
                {discover_weekly?.tracks.items.map(item => {
                    if(item.album.artists[0].id === "5So1yzwFdxa4maDOEBGuJr"){
                        return(
                            <SongRow name={item.name} artist={item.album.artists[0].name} img={item.album.images[0].url} />
                        )
                    }
                    
                })}
            </div>
        </div>
    )
}

export default Body;