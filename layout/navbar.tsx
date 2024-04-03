import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../public/Logo.png';
import avatar from '../public/avatar.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-10 bg-gray-900 text-white">
      <Link href="/" >
        <Image src={logo} alt="logo" width={40} height={40} />
      </Link>
      <nav className="hidden md:flex md:items-center">
        <ul className="flex">
          <li className="px-10">
            <Link href="/catalog" className="transition duration-300 ease-in-out hover:text-violet-400 text-2xl">Catálogo</Link>
          </li>
          <li className="px-10">
            <Link href="/budget" className="transition duration-300 ease-in-out hover:text-violet-400 text-2xl">Presupuesto</Link>
          </li>
          <li className="px-10">
            <Link href="#" className="transition duration-300 ease-in-out hover:text-violet-400 text-2xl">Tutoriales</Link>
          </li>
          <li className="px-10">
            <Link href="#" className="transition duration-300 ease-in-out hover:text-violet-400 text-2xl">Subir Archivo</Link>
          </li>
        </ul>
      </nav>
      <div className='avatar w-16 h-16 cursor-pointer'>
        <div className='w-24 rounded-full'>
          <Image src={avatar} alt='Avatar'></Image>
        </div>
      </div>
      <p className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</p>

      {/* Overlay para móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 z-10">
          <div className="absolute top-5 right-10 text-4xl" onClick={() => setIsMenuOpen(false)}>
            &times;
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <a href="#" className="text-xl transition duration-300 ease-in-out hover:text-violet-400">Catálogo</a>
            <a href="#" className="text-xl transition duration-300 ease-in-out hover:text-violet-400">Presupuesto</a>
            <a href="#" className="text-xl transition duration-300 ease-in-out hover:text-violet-400">Tutoriales</a>
            <a href="#" className="text-xl transition duration-300 ease-in-out hover:text-violet-400">Subir Archivo</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
