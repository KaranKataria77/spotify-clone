import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import spotifyWebApi from 'spotify-web-api-js';
import { DataLayerValue } from './DataLayer';
import Player from './Player';

const spotify = new spotifyWebApi();

const App = () => {

  const [{ user, token }, dispatch] = DataLayerValue();


  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    const _token = hash.access_token

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token);
      spotify.getMe()
      .then((user) => {
        console.log("i am the user", user);
        dispatch({
          type: "SET_USER",
          user: user,
        })
      })
      spotify.getUserPlaylists()
      .then((playlists) => {
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists
        })
      })
      spotify.searchTracks("Mann Mera")
      .then (response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
    }
    console.log(" I have token ")
  },[])

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  )
}

export default App;