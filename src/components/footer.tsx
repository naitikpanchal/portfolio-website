import React from 'react';

export default function Footer(){
    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>
            <small className='mb-2 block text-xs'>
                &copy; 2024 Naitik. All rights reserved.
            </small>
            <p className='text-xs'>
                <span className='font-semibold'>About this website:</span> built with React & NextJS (App router & Server Actions), TypeScript, TailWind CSS, Framer motion, React Email &amp; Resend, Vercel hosting.
            </p>
        </footer>
    )
}