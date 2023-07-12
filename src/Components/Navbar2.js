
import React, {useEffect, useState} from "react";



function Navbar2(){
  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => {
    setCurrentUrl(window.location.pathname)
  }, [])


    return(

<nav class=" p-5 shadow bg-[#2C3333] md:flex md:items-center md:justify-between">
  <div className="flex justify-between items-center">
    <a href="/Home" className="">
        <img src="images/logopnj.png" className="h-10 inline" alt="Logo PNJ" />
        <span class=" text-[#E7F6F2] text-2xl font-[Poppins] cursor-pointer ">
        Taekwondo
        </span>
    </a>

    <button  data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span class="sr-only text-3xl cursor-pointer md:hidden block mx-2"></span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>


    </div>

   
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static  w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <a href="/Home" class={`${currentUrl === "/Home" ? "text-blue-300" : "text-[#E7F6F2]"} md:hover:bg-transparent md:hover:text-blue-300 text-[#E7F6F2] text-xl`} aria-current="page">Home</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/Achievment" class={`${currentUrl === "/Achievment" ? "text-blue-300" : "text-[#E7F6F2]"} md:hover:bg-transparent md:hover:text-blue-300 text-[#E7F6F2] text-xl`}>Achievment</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/Jadwal" class={`${currentUrl === "/Jadwal" ? "text-blue-300" : "text-[#E7F6F2]"} md:hover:bg-transparent md:hover:text-blue-300 text-[#E7F6F2] text-xl`}>Jadwal</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="/Anggota" class={`${currentUrl === "/Anggota" ? "text-blue-300" : "text-[#E7F6F2]"} md:hover:bg-transparent md:hover:text-blue-300 text-[#E7F6F2] text-xl`}>Anggota</a>
        </li>

  

      </ul>
    </nav>

    );
}

export default Navbar2;


