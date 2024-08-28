'use client';
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {

    const { ref } = useSectionInView("Contact", 0.5);

    return (
        <motion.section id="contact" ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
        initial = {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition = {{duration: 1}}
        viewport={{once: true}}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-5'>Please contact me directly at <a className='underline' href="mailto:naitikpanchal.35@gmail.com">naitikpanchal.35@gmail.com</a> or through this form.</p>
            
            <form action={ async (formData) =>{ 
                const { data, error } = await sendEmail(formData);
                if (error) {
                    toast.error(error);
                    return;
                }
                toast.success('Email sent successfully');
                }}
                className='mt-10 flex flex-col'>
                <input type="email" name="senderEmail" placeholder='Your email' className='px-4 h-14 rounded-lg borderBlack' required maxLength={500} />
                <textarea placeholder='Your message' name="message" className='p-4 h-52 my-3 rounded-lg borderBlack' required maxLength={500}/>
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
