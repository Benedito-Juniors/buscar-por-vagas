import { Github, Instagram, Mail } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black py-10 text-white'>
      <div className='mx-auto max-w-5xl flex justify-between items-start'>
        {/* Seção da Logo e Texto */}
        <div className='flex max-w-md gap-3 items-start'>
          <img src="/logo.svg" width='50px' alt='Logo' />

          <p className='text-base font-bold mt-2 text-white'>
            O Codante Vagas conecta candidatos a empregos ideais, oferecendo funcionalidades
            intuitivas para busca, salvamento e gerenciamento de oportunidades, facilitando a jornada profissional de forma simples e eficaz.
          </p>

        </div>

        {/* Seção de Ícones */}
        <div className='flex gap-3'>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='cursor-pointer transition-color hover:text-blue-500'>
            <Instagram />
          </a>
          <a href='https://github.com' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='cursor-pointer transition-color hover:text-blue-500'>
            <Github />
          </a>
          <a href='mailto:contato@codante.com' aria-label='Email' className='cursor-pointer transition-color hover:text-blue-500'>
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

