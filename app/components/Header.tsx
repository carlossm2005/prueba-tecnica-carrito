"use client"

import Image from 'next/image'
import React from 'react'
import { useTheme } from '../context/ThemeContext';
import Link from 'next/link';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className='fixed w-full py-3'>
      <nav className='px-12 flex justify-between items-center'>
        <Image src={'/logo.png'} alt='vercel' width={180} height={36}/>
        <div>
          <Link href={'/'}>Inicio</Link>
          <Link href={'/cart'}>Carrito</Link>
          <Link href={'/combinacion'}>Lógica (Ejercicio 3)</Link>
          <button onClick={toggleTheme} className='toggle-theme mr-8'>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header