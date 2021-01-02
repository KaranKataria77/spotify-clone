import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import HomeIcon from '@material-ui/icons/Home';
import { DataLayerValue  } from './DataLayer';

const Sidebar = () => {

    const [{ playlists }, dispatch ] = DataLayerValue();

    return (
        <div className="sidebar">
            {console.log(playlists)}
           <img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
           <SidebarOption Icon={HomeIcon} title="Home" />
           <SidebarOption Icon={SearchIcon} title="Search" />
           <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

           <br />
           <strong className="sidebar__title">PLAYLIST</strong>
           <hr />
           { playlists?.items?.map(playlist => (
               <SidebarOption title={playlist.name} />
           ))}
        </div>
    )
}

export default Sidebar;