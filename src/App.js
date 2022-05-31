import React from 'react'
import Sidebar from './Components/sidebar'
import Routing from './Routes'

function App() {
    return (
        <div className="flex">
            <Sidebar />
            <div className="lg:w-[82%] md:w-[92%] w-[100%] h-[100vh] bg-[#171719]">
                <Routing />
            </div>
        </div>
    )
}

export default App
