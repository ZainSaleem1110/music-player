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
import DMCA from './Pages/DMCA'
import Aboutus from './Pages/Aboutus'
import Terms from './Pages/Terms'
import Privacy from './Pages/Privacy'
import ContactUs from './Pages/Contact'
import Blog from './Pages/Blog'
import SongPlayPage from './Components/SongPlayPage'
import AlbumDetailPage from './Components/AlbumDetailPage'
import OtherDetailPage from './Components/OtherDetail'
import PlaylistDetail from './Components/PlaylistDetail'
import MobileNavbar from './Components/mobileNavbar'

function Routeing() {
    return (
        <div className="overflow-y-auto overflow-x-hidden w-[100%] h-[100vh]">
            <div className="md:flex hidden">
                <Navbar />
            </div>
            <div className="md:hidden flex">
                <MobileNavbar />
            </div>
            <div className="px-4 py-10">
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
                    <Route path="/dmca" element={<DMCA />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/policy" element={<Privacy />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/songPlay" element={<SongPlayPage />} />
                    <Route path="/albumDetail" element={<AlbumDetailPage />} />
                    <Route path="/otherDetail" element={<OtherDetailPage />} />
                    <Route path="/playlistDetail" element={<PlaylistDetail />} />
                </Routes>
            </div>
        </div>
    )
}

export default Routeing
