import { Suspense, lazy } from 'react';
import Navbar from '../../components/navbar';
import { Helmet } from 'react-helmet';

const Section1 = lazy(() => import('./components/section1'));
const Section2 = lazy(() => import('./components/section2'));
const Section3 = lazy(() => import('./components/section3'));
const Section4 = lazy(() => import('./components/section4'));

const Divider = () => (
    <div className="h-1 w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-500 via-backgroundGray to-backgroundGray"></div>
);

const Home = () => {

    return (
        <>
            <Helmet>
                <title>Mario Raach</title>
                <meta name="description" content="Just a guy having fun :D" />
                <meta name="keywords" content="Mario Raach, Industriekaufmann, Webentwickler, Technologie, Entrepreneurship, Sport, Künstliche Intelligenz, Webentwicklung, Startups, Projektideen" />
            </Helmet>
            
            <Navbar />
            <Suspense fallback={<div className='h-screen w-screen bg-backgroundGray'></div>}>
                <main className='overflow-hidden grid grid-cols-1 gap-6 bg-backgroundGray font-kalam text-white'>    
                    <Section1 />
                    <Section2 />
                    <Divider />
                    <Section3 />
                    <Divider />
                    <Section4 />
                </main>
            </Suspense>
        </>
    );
}

export default Home