import React, {useEffect, useState} from "react";

function Navbar(){
  const [currentUrl, setCurrentUrl] = useState("")
  useEffect(() => {
    setCurrentUrl(window.location.pathname)
  }, [])

    return(

<nav class="border-gray-200 bg-[#2C3333]">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/Home" class="flex items-center">
        <img src="images/logopnj.png" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-[#E7F6F2]">Taekwondo</span>
    </a>

    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="/Home" class={`${currentUrl === "/Home" ? "text-blue-300" : "text-[#E7F6F2]"} md:hover:bg-transparent md:hover:text-blue-300 md:p-0 text-[#E7F6F2]`} aria-current="page">Home</a>
        </li>
        <li>
          <a href="/Achievment" class={`${currentUrl === "/Achievment" ? "text-blue-300" : "text-[#E7F6F2]"} md:hover:bg-transparent md:hover:text-blue-300 md:p-0 text-[#E7F6F2]`}>Achievment</a>
        </li>
        <li>
          <a href="/Jadwal" class={`${currentUrl === "/Jadwal" ? "text-blue-300" : "text-[#E7F6F2]"} md:hover:bg-transparent md:hover:text-blue-300 md:p-0 text-[#E7F6F2]`}>Jadwal</a>
        </li>
        <li>
          <a href="/Anggota" class={`${currentUrl === "/Anggota" ? "text-blue-300" : "text-[#E7F6F2]"} md:hover:bg-transparent md:hover:text-blue-300 md:p-0 text-[#E7F6F2]`}>Anggota</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}

export default Navbar;


