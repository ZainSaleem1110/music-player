import React,{useState} from 'react'
import Navbar from '../Components/navbar'
import MobileNavbar from '../Components/mobileNavbar'
import Logo from '../assets/logo.jpeg'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import App from '../App'

function ForgotPass() {
    const navigate = useNavigate()
    const [route, setRoute] = useState(false)
    const handleBlogPage = () => {
        setRoute(true)
        navigate('/blog')
    }
    const handleAboutPage = () => {
        setRoute(true)
        navigate('/aboutUs')
    }
    const handleTermPage = () => {
        setRoute(true)
        navigate('/terms')
    }
    const handleContactPage = () => {
        setRoute(true)
        navigate('/contact')
    }
    const handlePolicyPage = () => {
        setRoute(true)
        navigate('/policy')
    }

    return (
        <>
        {route==false &&(
            <div className="w-[100%] h-[100%] flex flex-col justify-between items-center">
                <div className="md:flex hidden pl-4 py-2 bg-[black] w-full">
                    <img src={Logo} className="w-[50px] lg:flex hidden" alt="" />
                    <Navbar />
                </div>
                <div className="md:hidden flex w-full">
                    <MobileNavbar />
                </div>
                <div className="sm:w-[420px] h-[280px] bg-[#222225] rounded-lg flex flex-col items-center justify-center px-8">
                    <h1 className="text-[26px] text-white">Forgot your password?</h1>
                    <p className="text-white mt-1">Enter your email to get password reset link.</p>
                    <input type="text" className="h-[40px] w-full bg-[#171719] rounded-md mt-14 text-[#eeeeee] px-3 focus:outline-none" name="" id="" placeholder="Email address" />
                    <button className="h-[40px] rounded-md mt-3 w-full bg-[#f98f1d] flex justify-center items-center text-white font-bold">Send Link</button>
                </div>
                <footer className="footer flex">
                    <h2>Copyright © 2022 Lorem.</h2>
                    <div className="center-footer flex">
                        <button className="foot-link" onClick={handleBlogPage}>
                            Blogs
                        </button>
                        <button className="foot-link" onClick={handleAboutPage}>
                            About Us
                        </button>
                        <button className="foot-link" onClick={handleTermPage}>
                            Terms
                        </button>
                        <button className="foot-link" onClick={handleContactPage}>
                            Contact
                        </button>
                        <button className="foot-link" onClick={handlePolicyPage}>
                            Privacy Policy
                        </button>
                    </div>
                    <div className="language-selector">
                        <div className="selected-language ">
                            <p className="flex">
                                English <FontAwesomeIcon icon={faChevronUp} />
                            </p>
                        </div>
                    </div>
                </footer>
            </div>  
        )}
            {route == true && (
                <App />
            )}
        </>
    )
}

export default ForgotPass
