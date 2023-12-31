"use client"
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
 
function NavBar() {
  const { data: session, status } = useSession()
  let navData = [
  { name: 'Home', path: '/'  ,key:1},
  { name: 'About', path: '/about' ,key:2},
  { name: 'Project', path: '/project' ,key:3},
  { name: 'contact', path: '/contact' ,key:4},
];
if (status === "authenticated"){
  navData = [
    { name: 'Home', path: '/'  ,key:1},
    { name: 'About', path: '/about' ,key:2},
    { name: 'Project', path: '/project' ,key:3},
    { name: 'contact', path: '/contact' ,key:4},
    { name: 'Admin', path: '/admin/dashbord' ,key:5},
    ]
}

const path = usePathname()

if (path === '/login') return null
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full backdrop-blur bg-white/50 fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="justify-between px-4 mx-auto lg:max-w-screen-2xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-green-600 font-bold ">UMANG SAILOR</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden border rounded">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (

                    <GrClose size={'20'} />
                  ) : (
                    <GiHamburgerMenu size={'20'}
                      className=" text-green-500 focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`transition duration-150 ease-in-out flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">

                {navData.map((link) => {
                  return (
                    <li key={link.key} className="text-l text-slate-800 py-5 px-5 text-center  border-b-2 md:border-b-0  border-slate-400  md:hover:text-slate-500 md:hover:font-semibold md:hover:bg-transparent">

                      <Link onClick={() => setNavbar(!navbar)} href={link.path}>{link.name}</Link>
                    </li>
                  )
                })}
                  
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;