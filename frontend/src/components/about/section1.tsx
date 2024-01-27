import React, { useState, useRef } from 'react';
import Typewriter from '../../animations/typewriter';
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';

const About_Section1 = () => {

    return (
        <>

            <div className='min-w-screen min-h-svh grid md:grid-cols-2 ' >
                <p className='md:min-h-screen px-10 md:px-40 text-gray-500 text-3xl md:text-7xl bg-backgroundGray rounded-br-3xl rounded-bl-3xl md:rounded-bl-none grid grid-rows-[3fr_3fr_3fr] md:mr-2 md:mb-2 order-last md:order-first h-72 pt-4'>
                    <span className='hidden md:block'></span>
                    <Typewriter speed={80}>"Your brand is what people say about you when you're not in the room."</Typewriter>
                    <p className='text-xl w-full text-end'><SlideUpWhenVisible delay={6.6} y={20}>Jeff Bezos</SlideUpWhenVisible></p>
                </p>
                <div className='p-10 md:p-40 order-first md:order-none'>
                    <img className='rounded-full shadow-lg shadow-white mt-20 md:mt-0 grayscale' src="/bild_im_hemd.jpg" />
                </div>
            </div>
        </>
    )
}

export default React.memo(About_Section1);
