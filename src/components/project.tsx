"use client";
import React, { useRef } from "react";
import { motion,useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target:ref,
		offset: ["0 1", "1.33 1"],
	});
    const scaleProgress =  useTransform(scrollYProgress, [0, 1], [0.75, 1]);
    const opacityProgress =  useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
    <motion.div ref={ref}
    style={{ scale: scaleProgress,
        opacity: scrollYProgress,
    }}
    className="group mb-3 sm:mb-8 last:mb-0"
    >
        <article className=" bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-6 rounded-lg hover:shadow-sm hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/15 dark:text-white">
        <div className="pb-7 pt-6 pl-6 pr-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/90" key={index}>
                {tag}
            </li>
            ))}
        </ul>
        </div>
        <Image
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 
			group-hover:-rotate-2 group:even:-right-[initial] group-even:-left-40 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 
			group-even:group-hover:rotate-2 transition"
        src={imageUrl}
        alt={"Projects I have worked on"} quality={95} />
        </article>
    </motion.div>
    );
}