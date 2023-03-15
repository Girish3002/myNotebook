import React from 'react'
import "./Navbar.css"

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div>

        <nav >
          <div className="container flex flex-wrap justify-between md:justify-between items-center md:mx-auto " >
            <div className="flex items-center mt-4 icon">
              <img src="https://e7.pngegg.com/pngimages/604/884/png-clipart-notebook-emoji-notebook-emoji-paper-grammar-checker-emoji-logo-sign.png" className="mr-3 h-6 sm:h-9" alt="myNoebook Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">myNotebook</span>
            </div>
            <div className="flex sm:order1 md:order-2">

            </div>
            <div className="justify-center  items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex flex-row justify-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 uls
    ">
                <li>

                  <Link to="/" className=" py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white
                                 " aria-current="page">
                    <button className='mx-3 px-5 py-2 bg-gray-500 rounded-lg hover:bg-stone-700  text-white '>Home
                    </button>
                  </Link>
                </li>

                <li>

                  <Link to="/myabout" className=" py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                    <button className='mx-3 px-5 py-2  bg-gray-500 rounded-lg hover:bg-stone-700  text-white  '>About</button>
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>

      </div>
    </>
  )
}

export default Navbar
