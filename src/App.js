import React from 'react'
import Sidebar from './Components/sidebar'
import Routing from './Routes'

function App() {
    return (
        <div className="flex w-[100%]">
            <Sidebar />
            <div className="lg:w-[82%] md:w-[93%] w-[100%] h-[100vh] bg-[#171719]">
                <Routing />
            </div>
        </div>
    )
}

export default App
