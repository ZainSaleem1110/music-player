import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Tabs from '../Components/BrowseTabs'
import BrowseTabAlbum from './BrowseTabAlbum'

function Browse() {
    return (
        <div className="text-[white]">
            <Tabs />
        </div>
    )
}

export default Browse
