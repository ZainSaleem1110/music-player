import React, { useState,Fragment } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import LoginImg from '../assets/login.svg'
import Logo from '../assets/logo.jpeg'
import { CgProfile } from 'react-icons/cg'
import { Menu, Transition } from '@headlessui/react'
import ForgotPass from '../Pages/ForgotPass'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
  const [loginPage, setLoginPage] = useState(false)
  const [signPage, setSignPage] = useState(false)
  const [forgot, setForgot] = useState(false)

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
  const handleForgotPage = () => {
    setLoginPage(false)
    setForgot(true)
  }

  return (
    <>
      <div className="h-[60px] w-[100%] bg-[black] flex px-6 justify-between items-center border border-[black]">
        <img src={Logo} className="w-[50px] mr-5 lg:hidden flex" alt="" />
        <div className="bg-[#222225] rounded-xl h-[40px] w-[470px] flex px-4 text-[lightgray] text-[16px] items-center">
          <AiOutlineSearch />
          <input type="text" placeholder="Search for songs, artists, playlists and more..." className="border-none focus:outline-none bg-[transparent] ml-4 w-[100%]" />
        </div>
        <div className="lg:flex hidden">
          <button className="h-[35px] w-[90px] rounded-md flex items-center justify-center text-[white]" onClick={handleLogin}>
            Login
          </button>
          <button className="h-[35px] w-[90px] rounded-md flex items-center justify-center text-[#f98f1d] bg-[#f9901f40]" onClick={handleSignup}>
            Register
          </button>
        </div>
        <div className="flex gap-x-3 text-[white] text-[24px] lg:hidden flex">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium focus:outline-none text-white">
                <CgProfile className="-mr-1 ml-2 h-6 w-6" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-[#222225] ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
                <div className="py-1">
                  <Menu.Item onClick={handleLogin}>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? 'bg-[#2c2c2f] text-[#cccccc]' : 'text-[#cccccc]',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Login
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item onClick={handleSignup}>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? 'bg-[#2c2c2f] text-[#cccccc]' : 'text-[#cccccc]',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Register
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {loginPage == true && (
        <div className="absolute top-0 left-0 w-[100%] h-[100vh] text-[white] flex justify-center items-center z-50" style={{ background: "rgba(255,255,255,.3)" }}>
          <div className="lg:w-[50%] md:w-[70%] w-[95%] h-[520px] rounded-lg flex">
            <div className="w-[40%] h-[100%] bg-[#f98f1d] rounded-l-lg flex-col justify-between py-10 pl-7 sm:flex hidden">
              <div>
                <h1 className="text-[32px] font-bold">Login</h1>
                <p className="mt-2 w-[70%]">Get access to your music, playlists and account</p>
              </div>
              <img src={LoginImg} className="w-[100%]" alt="" />
            </div>
            <div className="sm:w-[60%] w-[100%] h-[100%] bg-white rounded-r-lg sm:rounded-l-none rounded-l-lg px-8">
              <div className="flex justify-end mt-5 cursor-pointer" onClick={handleCloseLoginPage}>
                <div className="w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[black] text-white">
                  x
                </div>
              </div>
              <div className="py-10">
                <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 font-medium text-[#767e86]" placeholder="Username" />
                <input type="text" className="h-[40px] border w-[100%] rounded-md bg-[#f3f3f3] focus:outline-none pl-5 mt-4 font-medium text-[#767e86]" placeholder="Password" />
                <button className="text-[#f98f1d] font-medium mt-1 flex justify-end text-[14px]" onClick={handleForgotPage}>Forgot your password?</button>
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
          <div className="md:w-[70%] w-[95%] rounded-lg flex sm:flex-row flex-col z-50">
            <div className="sm:w-[40%] h-auto bg-[#f98f1d] rounded-l-lg sm:flex flex-col hidden justify-between py-10 pl-7">
              <div>
                <h1 className="text-[32px] font-bold">Signup</h1>
                <p className="mt-2 w-[70%]">Get access to your music, playlists and account</p>
              </div>
              <img src={LoginImg} className="w-[100%]" alt="" />
            </div>
            <div className="sm:w-[60%] w-[100%] h-[100%] bg-white rounded-r-lg sm:rounded-l-none rounded-l-lg px-8">
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
      {forgot == true && (
            <div className="absolute top-0 left-0 w-[100%] h-[100vh] text-[white] z-40 bg-[#171719] overflow-x-auto">
                <ForgotPass/>
            </div>
          )}
    </>
  )
}

export default Navbar
