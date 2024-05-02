import React from 'react'
// import {logo} from '../assets/react.svg'
import {  NavLink } from 'react-router-dom'

const Navbar = () => {
const navclass=({isActive})=>isActive ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"


  return (
    <div>  <nav className="bg-indigo-700 border-b border-indigo-500">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">
        <div
          className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
         
          <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
            <img
              className="h-10 w-auto"
              src="https://in.images.search.yahoo.com/images/view;_ylt=AwrKGKunBzJmoW0_Ydm9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2NlNWZjYWI0MjcxMWI2MmIyYTAyNDkxODBiZTczNjg2BGdwb3MDMQRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dreact%2Bicons%26type%3DE211IN714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D1&w=2300&h=2000&imgurl=upload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F2300px-React-icon.svg.png&rurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AReact-icon.svg&size=186.3KB&p=react+icons&oid=ce5fcab42711b62b2a0249180be73686&fr2=piv-web&fr=mcafee&tt=File%3AReact-icon.svg+-+Wikimedia+Commons&b=0&ni=21&no=1&ts=&tab=organic&sigr=SrsJ0tOGkdoC&sigb=MB3zTp3LVB.g&sigi=cgeFlCb_frw7&sigt=QudtwFXQz50e&.crumb=ZJtFQVRZqyE&fr=mcafee&fr2=piv-web&type=E211IN714G0"
              alt="React Jobs"
            />
            <span className="hidden md:block text-white text-2xl font-bold ml-2"
              >React Jobs</span
            >
          </NavLink>
          <div className="md:ml-auto">
            <div className="flex space-x-2">
              <NavLink
                to="/"
                className={navclass}
                >Home</NavLink
              >
              <NavLink
                to="/jobs"
                className={navclass}
                >Jobs</NavLink
              >
              <NavLink
                to="/add-job"
                className={navclass}
                >Add Job</NavLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar