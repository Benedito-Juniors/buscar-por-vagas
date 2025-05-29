'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathname = usePathname()

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Sobre', path: '/sobre' },
        { name: 'Vagas', path: '/vagas' },
        { name: 'Cadastrar Vagas', path: '/vagas/cadastro' },
    ]

    return (
        <nav className='flex items-center justify-between py-6 mx-auto max-w-5xl w-full'>
            <img src="/logo.svg" width='50px' alt='Logo' />

            <ul className='flex items-center gap-6'>
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            href={item.path}
                            className={`pb-1 transition-colors border-b-2 ${
                                pathname === item.path
                                    ? 'border-purple-600 text-purple-700'
                                    : 'border-transparent hover:border-purple-400'
                            }`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
