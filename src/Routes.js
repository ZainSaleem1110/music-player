import React from 'react'
import Navbar from './Components/navbar'
import { Route, Routes } from 'react-router-dom'
import Discover from './Pages/Discover'
import NewMusic from './Pages/NewMusic'
import TopMusic from './Pages/TopMusic'
import Album from './Pages/Albums'
import SportLight from './Pages/SportLight'
import Genres from './Pages/Genres'
import Playlist from './Pages/Playlists'
import HallOfFame from './Pages/HallOfFame'
import EarnPoint from './Pages/Points'
import Browse from './Pages/Browse'
import Purchase from './Pages/Purchase'
import Recent from './Pages/RecentPlayed'
import MyPlaylist from './Pages/MyPlaylist'
import Favourite from './Pages/favourite'
import Event from './Pages/Events'

function Routeing() {
    return (
        <div className="overflow-y-auto">
            <Navbar />
            <div className="">
                <Routes>
                    <Route path="/" element={<Discover />} />
                    <Route path="/newMusic" element={<NewMusic />} />
                    <Route path="/topMusic" element={<TopMusic />} />
                    <Route path="/albums" element={<Album />} />
                    <Route path="/sportLight" element={<SportLight />} />
                    <Route path="/genres" element={<Genres />} />
                    <Route path="/playlists" element={<Playlist />} />
                    <Route path="/fame" element={<HallOfFame />} />
                    <Route path="/points" element={<EarnPoint />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/purchase" element={<Purchase />} />
                    <Route path="/recentPlayed" element={<Recent />} />
                    <Route path="/myPlaylist" element={<MyPlaylist />} />
                    <Route path="/favourite" element={<Favourite />} />
                    <Route path="/event" element={<Event />} />
                </Routes>
            </div>
        </div>
    )
}

export default Routeing
