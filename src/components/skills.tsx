'use client';
import React from "react";
import SectionHeading from "@/components/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial:{
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({ 
        opacity: 1,
        y: 0,
        transition:{
            duration: 0.05 * index,
        },
    })
};

export default function Skills() {

    const { ref } = useSectionInView("Skills", 0.5);

    return (
        <section id="skills" ref={ref} className="mb-28 max-w-[53rem] text-center sm:mb-40 scroll-mt-32">
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, index) => (
                        <motion.li key={index} className="bg-white borderBlack rounded-xl px-5 py-3"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true}}
                        custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    );
}