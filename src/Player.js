import React from 'react'
import "./Player.css"
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
            <Sidebar/>
            <Body/>
            <Footer/>
            </div>
        </div>
    )
}

export default Player
