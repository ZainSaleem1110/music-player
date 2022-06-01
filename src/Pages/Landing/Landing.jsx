import React, { useState } from "react";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import feature1 from "../../assets/landing-page/feature1.svg";
import feature2 from "../../assets/landing-page/feature2.svg";
import Trending from "../../Components/Trending-Artists/Trending";
import LandFooter from "../../Layout/Landing-Footer/Landing-Footer";
import App from '../../App'
import { AiOutlineSearch, AiOutlineClose, AiOutlineStar } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FaBars, FaStoreAlt } from 'react-icons/fa'
import LoginImg from '../../assets/login.svg'
import Logo from '../../assets/logo.jpeg'
import { Link } from 'react-router-dom'
function Landing() {
  const [route, setRoute] = useState(false)
  const handleRoutes = () => {
    setRoute(true)
  }

  const [loginPage, setLoginPage] = useState(false)
  const [signPage, setSignPage] = useState(false)

  const handleLogin = () => {
    setLoginPage(true)
    setSignPage(false)
  }
  const handleCloseLoginPage = () => {
    setLoginPage(false)
    setSignPage(false)
  }
  const handleSignup = () => {
    setSignPage(true)
    setLoginPage(false)
  }
  return (
    <>
      {route == false && (
        <div className="landing h-[100vh] overflow-y-auto">
          <div className="h-[60px] w-[100%] bg-[black] flex px-6 justify-between items-center border border-[black]">
            <div className="flex items-center">
              <img src={Logo} className="w-[50px]" alt="" />
            </div>
            <div className="lg:flex hidden">
              <button className="h-[35px] w-[90px] rounded-md flex items-center justify-center text-[white]" onClick={handleLogin}>
                Login
              </button>
              <button className="h-[35px] w-[90px] rounded-md flex items-center justify-center text-[#f98f1d] bg-[#f9901f40]" onClick={handleSignup}>
                Register
              </button>
            </div>
          </div>

          {loginPage == true && (
            <div className="absolute top-0 left-0 w-[100%] h-[100vh] text-[white] flex justify-center items-center z-50 " style={{ background: "rgba(255,255,255,.3)" }}>
              <div className="w-[50%] h-[520px] rounded-lg flex">
                <div className="w-[40%] h-[100%] bg-[#f98f1d] rounded-l-lg flex flex-col justify-between py-10 pl-7">
                  <div>
                    <h1 className="text-[32px] font-bold">Login</h1>
                    <p className="mt-2 w-[70%]">Get access to your music, playlists and account</p>
                  </div>
                  <img src={LoginImg} className="w-[100%]" alt="" />
                </div>
                <div className="w-[60%] h-[100%] bg-white rounded-r-lg px-8">
                <div className="flex justify-end mt-5 cursor-pointer" onClick={handleCloseLoginPage}>
                  <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[black] text-white">
                    x
                  </div>
                  </div>
                  <div className="py-10">
                  <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 font-medium text-[#767e86]" placeholder="Username" />
                  <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Password" />
                  <Link to="forgotPass" className="text-[#f98f1d] font-medium mt-1 flex justify-end text-[14px]">Forgot your password?</Link>
                  <button className="h-[40px] w-[100%] bg-[#f98f1d] flex items-center justify-center font-medium rounded-md mt-10">
                    Login
                  </button>
                  <p className="text-[#767e86] font-medium mt-8 text-center">Don't have an account? <span><button className="text-[#f98f1d] font-bold" onClick={handleSignup}>Sign Up</button></span></p>
                </div>
              </div>
            </div>
            </div>
          )}
          {signPage == true && (
            <div className="absolute top-0 left-0 w-[100%] h-[100vh] text-[white] flex justify-center items-center z-40" style={{ background: "rgba(255,255,255,.3)" }} >
              <div className="w-[55%] rounded-lg flex z-50">
                <div className="w-[40%] h-auto bg-[#f98f1d] rounded-l-lg flex flex-col justify-between py-10 pl-7">
                  <div>
                    <h1 className="text-[32px] font-bold">Signup</h1>
                    <p className="mt-2 w-[70%]">Get access to your music, playlists and account</p>
                  </div>
                  <img src={LoginImg} className="w-[100%]" alt="" />
                </div>
                <div className="w-[60%] h-[100%] bg-white rounded-r-lg px-8">
                  <div className="flex justify-end mt-5 cursor-pointer" onClick={handleCloseLoginPage}>
                  <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[black] text-white">
                    x
                  </div>
                  </div>
                  <div className="py-10">
                  <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 font-medium text-[#767e86]" placeholder="Full Name" />
                  <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Username" />
                  <input type="email" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Email address" />
                  <input type="password" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Password" />
                  <input type="password" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Confirm Password" />
                  <button className="h-[40px] w-[100%] bg-[#f98f1d] flex items-center justify-center font-medium rounded-md mt-4">
                    Login
                  </button>
                  <p className="text-[#767e86] font-medium mt-8 text-center">Already have an account? <span><button className="text-[#f98f1d] font-bold" onClick={handleLogin}>Login</button></span></p>
                  <p className="text-[#767e86] text-[14px] mt-14 text-center">By signing up, you agree to our <Link to="/terms" className="text-[#f98f1d] font-bold">Terms</Link> and <Link to="/privacy" className="text-[#f98f1d] font-bold">Privacy Policy</Link></p>
                </div>
              </div>
              </div>
            </div>
          )}
          <div className="landing__hero">
            <div className="hero-container flex justify-center">
              <div className="hero-cont__top-cont flex items-center">
                <h1>Listen to Songs</h1>
                <p className="">
                  Discover, stream, and share a constantly expanding mix of music
                  from emerging and major artists around the world.
                </p>
              </div>
              <div className="btn-div2 flex justify-center items-center">
                <button className="sign-up flex justify-center items-center">
                  Signup Now <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <button className="explore" onClick={handleRoutes}>
                  Explore
                </button>
              </div>
              <div className="w-[100%] flex justify-center">
                <div className="landing__search-div flex">
                  <input type="text" placeholder={"Search for artists, tracks"} />
                  <button className="search flex justify-center items-center">Search</button>
                </div>
              </div>
            </div>
            <ul className="bubbles-ul">
              <li className="bubbles"></li>
              <li className="bubbles"></li>
              <li className="bubbles"></li>
              <li className="bubbles"></li>
              <li className="bubbles"></li>
              <li className="bubbles"></li>
              <li className="bubbles"></li>
              <li className="bubbles"></li>
              <li className="bubbles"></li>
              <li className="bubbles"></li>
              <li className="bubbles"></li>
              <li className="bubbles"></li>
            </ul>
          </div>
          <div className="feats flex justify-center items-center">
            <div className="feat-row flex justify-center items-center">
              <img src={feature1} alt="" />
              <div className="text-feature flex">
                <h2 className="">Listen Music Everywhere, Anytime</h2>
                <p className="feature-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="feat-row flex justify-center items-center">
              <div className="text-feature flex">
                <h2 className="font-bold">
                  Create Playlists with any song, On-The-Go
                </h2>
                <p className="feature-p">
                  Second Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,
                  2
                </p>
              </div>
              <img src={feature2} alt="" />
            </div>
          </div>
          <div className="trend-cont flex">
            <div className="trending flex">
              <h1 className="text-center">Top Trending Artists</h1>
              <div className="trending-row flex">
                <Trending />
              </div>
            </div>
          </div>
          <div className="creators-cont flex">
            <div className="creators flex">
              <div className="top-creator flex">
                <h1>Calling all creators</h1>
                <p>
                  Get on newyauk to connect with fans, share your sounds, and grow
                  your audience.
                </p>
              </div>

              <div className="create-row flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  datareactid="1231"
                  className="create-svg"
                >
                  <polyline points="16 16 12 12 8 16"></polyline>
                  <line x1="12" y1="12" x2="12" y2="21"></line>
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                  <polyline points="16 16 12 12 8 16"></polyline>
                </svg>
                <h2>Upload Songs</h2>
              </div>
              <div className="create-row flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="create-svg"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
                <h2>Check Stats</h2>
              </div>
            </div>
          </div>
          <div className="rock-cont flex">
            <div className="rock flex">
              <h1>Ready to rock your world.</h1>
              <div className="btn-div-rock gap-x-5 flex justify-center">
                <button className="rock-register">Register</button>
                <p>OR</p>
                <button className="rock-login">Login</button>
              </div>
            </div>
          </div>
          <LandFooter />
        </div>
      )}
      {route == true && (
        <App />
      )}
    </>
  );
}

export default Landing;
