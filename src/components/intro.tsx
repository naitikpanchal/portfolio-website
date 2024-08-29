'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id="home">
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                    initial={{ opacity: 0, scale:0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{type: 'tween', duration: 0.2}}
                    >
                        <Image src="/naitik.png" alt='naitik photo' width={600} height={600} quality={95} priority={true} className='h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
                    </motion.div>
                    <motion.span className='absolute bottom-0 right-0 text-4xl'
                    initial={{ opacity: 0, scale:0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{type: 'spring', stiffness: 125, delay: 0.1, duration: 0.5}}
                    >👋</motion.span>
                </div>
            </div>
            
            <motion.h1 className='mb-10 mt-10 px-5 text-2xl font-medium !leading-[1.5] sm:text-3xl'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }} >
            <span className="font-bold">Hello, I&apos;m Naitik.</span> I&apos;m a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">2 years</span> of experience. I enjoy building <span className="italic">sites & playing with data</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
            </motion.h1>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
                initial = {{ opacity: 0, y: 100 }}
                animate = {{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}>
                <Link href="#contact" className='group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all' onClick={() => {
                    setActiveSection('Contact');
                    setTimeOfLastClick(Date.now());
                }} > Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition-all'/>
                </Link>
                <a href="/CV.pdf" download className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-white/5'>Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition-all'/> </a>
                <a href="https://www.linkedin.com/in/naitik-panchal/" target='_blank' className='bg-white p-4 text-gray-900 text-[1.25rem] flex items-center gap-2 rounded-full focus:scale-[1.15]] hover:scale-[1.15] hover:text-[#0077B5] active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/80'><BsLinkedin /></a>
                <a href="https://github.com/naitikpanchal" target='_blank' className='bg-white p-4 text-gray-800 text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15]] hover:scale-[1.15] hover:text-[#171515] active:scale-105 transition-all cursor-pointer borderBlack dark:bg-white/80'><FaGithub /></a>
            </motion.div>
        </section>
    )
}