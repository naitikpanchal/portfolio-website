'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

    const { ref } = useSectionInView("About");

    return (
        <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
            initial = {{ opacity:0, y: 100}}
            animate = {{ opacity:1, y: 0}}
            transition = {{ delay: 0.175}}
            id='about'
        >
            <SectionHeading>About Me</SectionHeading>
            <p className='mb-3 '>
                After graduating with a degree in <span className="font-medium">Computer Engineering</span>, I further enhanced my skills by studying IT Solutions. During this time, I honed my expertise in
                <span className="font-medium"> full-stack web development</span>.
                <span className="italic"> My favorite part of programming</span> is the
                problem-solving aspect and I <span className="underline">love</span> the
                feeling of finally cracking a challenging problem. My core stack is
                <span className="font-medium"> React, Next.js, Node.js, and MongoDB</span>. I am also familiar with TypeScript, Express and Prisma. I am always eager to learn new technologies and I am currently seeking a    
                <span className="font-medium"> full-time position</span> as a software developer.
            </p>
            <p>
                <span className="italic">When I&apos;m not coding</span>, I enjoy playing video games, watching movies, and playing with my dog. I also enjoy<span className="font-medium"> learning new things.</span> I am currently learning <span className="font-medium"> japanese language</span>. I&apos;m also learning how to play the piano.
            </p>
        </motion.section>
    );
}