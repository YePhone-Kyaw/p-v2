'use client'

import React from 'react'

import IconHtml from '@/components/icons/html';
import IconJava from '@/components/icons/java';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import IconCss from '@/components/icons/css';
import IconJavaScript from '@/components/icons/javascript';

const Skills = () => {

  useGSAP(() => {
    gsap.from('#java, #html', {y:-50, repeat: -1, duration:2,  ease:'bounce'})
  });

  return (
    <section id='skills'
    className="flex flex-col min-h-screen w-full items-center justify-center py-10 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32"
     >

      <div className='flex flex-row'>
        <IconHtml id='html' className='w-10 h-10' />
        <IconCss id='css' className='w-10 h-10' />
        <IconJavaScript id='javascript' className='w-10 h-10' />
        
        <IconJava id='java' className='w-10 h-10' />
      </div>
    </section>
  )
}

export default Skills