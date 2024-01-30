import React from 'react';
import Typewriter from '../../animations/typewriter';
import SlideUpWhenVisible from '../../animations/slideUpWhenVisible';

const About_Section1 = () => {

    return (
        <>
            <div className='min-w-screen min-h-svh grid xl:grid-cols-2 ' >
                <div className='sm:min-h-screen px-10 2xl:px-40 text-gray-500 text-3xl sm:text-7xl bg-backgroundGray rounded-br-3xl rounded-bl-3xl md:rounded-bl-none grid grid-rows-[3fr_3fr_3fr] md:mr-2 md:mb-2 order-last md:order-first h-72 pt-4'>
                    <span className='hidden sm:block'></span>
                    <Typewriter speed={80}>"Your brand is what people say about you when you're not in the room."</Typewriter>
                    <div className='text-xl w-full text-end'><SlideUpWhenVisible delay={6.6} y={20}>Jeff Bezos</SlideUpWhenVisible></div>
                </div>
                <div className='p-10 order-first md:order-none sm:hidden flex justify-center xl:items-center xl:flex'>
                    <img 
                        src='/bild_im_hemd_1_.webp'
                        loading='lazy'
                        alt='Wallpaper'
                        width={630}
                        height={630}
                        className='w-full max-w-80 xl:max-w-[36rem] max-h-80 xl:max-h-[36rem] rounded-full shadow-lg shadow-white mt-20 md:mt-0 grayscale'
                    />
                </div>
            </div>
        </>
    )
}

export default React.memo(About_Section1);