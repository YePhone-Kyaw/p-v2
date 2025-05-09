'use client'

import React from 'react'

import IconHtml from '@/components/icons/html';
import IconJava from '@/components/icons/java';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import IconCss from '@/components/icons/css';
import IconJavaScript from '@/components/icons/javascript';
import IconReact from '@/components/icons/react';
import IconTypeScript from '@/components/icons/typescript';
import IconPython from '@/components/icons/python';
import IconThreeJs from '@/components/icons/threejs';
import IconCSharp from '@/components/icons/csharp';
import IconGit from '@/components/icons/git';
import IconGH from '@/components/icons/gh';
import IconMySQL from '@/components/icons/mysql';
import IconMongoDB from '@/components/icons/mongo';
import IconPostgreSQL from '@/components/icons/postgresql';
import IconPostman from '@/components/icons/postman';
import IconDocker from '@/components/icons/docker';
import IconNumpy from '@/components/icons/numpy';
import IconNextJS from '@/components/icons/nextjs';
import IconNodeJS from '@/components/icons/nodejs';
import IconTailwind from '@/components/icons/tailwind';
import IconFirebase from '@/components/icons/firebase';
import IconVercel from '@/components/icons/vercel';
import IconNetlify from '@/components/icons/netlify';
import IconFigma from '@/components/icons/figma';
import { firaCode } from '@/fonts/fonts';

const icons = [
  IconHtml, IconCss, IconJavaScript, IconThreeJs,
  IconTypeScript, IconJava, IconPython, IconCSharp,
  IconReact, IconNextJS, IconNodeJS, IconTailwind,
  IconNumpy, IconMySQL, IconMongoDB, IconPostgreSQL,
  IconGit, IconGH, IconDocker, IconPostman,
  IconFirebase, IconVercel, IconNetlify, IconFigma
];

const animationTypes = ['float', 'rotate', 'scale', 'wiggle'];

const getAnimationType = (i) => animationTypes[i % animationTypes.length];

const Skills = () => {
  useGSAP(() => {
    icons.forEach((_, i) => {
      const anim = getAnimationType(i);
      if (anim === 'float') {
        gsap.to(`.skill-icon-${i}`, {
          y: -12 - 8 * Math.random(),
          repeat: -1,
          yoyo: true,
          duration: 2 + Math.random(),
          ease: 'sine.inOut',
          delay: i * 0.1
        });
      } else if (anim === 'rotate') {
        gsap.to(`.skill-icon-${i}`, {
          rotation: 10 + Math.random() * 10,
          repeat: -1,
          yoyo: true,
          duration: 1.5 + Math.random(),
          ease: 'sine.inOut',
          delay: i * 0.1
        });
      } else if (anim === 'scale') {
        gsap.to(`.skill-icon-${i}`, {
          scale: 1.15 + Math.random() * 0.1,
          repeat: -1,
          yoyo: true,
          duration: 1.3 + Math.random(),
          ease: 'elastic.inOut',
          delay: i * 0.1
        });
      } else if (anim === 'wiggle') {
        gsap.to(`.skill-icon-${i}`, {
          x: -15 + Math.random() * 30,
          repeat: -1,
          yoyo: true,
          duration: 1.1 + Math.random(),
          ease: 'power1.inOut',
          delay: i * 0.1
        });
      }
    });
  }, []);

  useGSAP(() => {
    gsap.timeline({scrollTrigger: {
      trigger: '#header, #border, #icons',
      start: 'top center'
    }}).from('#header', {y: -30, opacity: 0,})
    .from('#border', {y: 30, opacity: 0})
      .from('#icons', {y:-20, opacity: 0})
  })

  return (
    <section id='skills'
      className="flex flex-col min-h-screen w-full items-center justify-center py-10 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32"
    >
      <h3 id='header' className={`${firaCode.className} text-3xl text-teal-300 mb-10`}>Skills & Technologies</h3>

      <div id='border' className='border-2 w-full max-w-5xl items-center justify-around border-teal-300/20 p-10 rounded-3xl '>
        <div
          className="
            grid 
            grid-cols-4
            sm:grid-cols-4 
            md:grid-cols-6 
            gap-x-10 gap-y-10
            place-items-center
          "
        >
          {icons.map((Icon, i) => (
            <Icon
            id='icons'
              key={i}
              className={
                `skill-icon-${i} ` +
                (Icon === IconDocker ? 'w-16 h-16' :
                  Icon === IconNetlify ? 'w-14 h-14' :
                  Icon === IconThreeJs || Icon === IconNodeJS ? 'w-12 h-12' :
                  'w-10 h-10')
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
