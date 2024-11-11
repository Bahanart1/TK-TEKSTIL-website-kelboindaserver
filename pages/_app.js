import "../styles/global.css"
import Header from "../components/nav/index"
import { useState, useEffect } from 'react';
function MyApp({Component, pageProps}) {
    const [showSplash, setShowSplash] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 3000);
        const hideTimer = setTimeout(() => {
            setShowSplash(false);
        }, 4000);
        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);
    return(
        <div className="antialiased text-black">
            <main className="mb-6">
                <Header/>
                <Component {...pageProps}/>
            </main>
            {showSplash && (
                <div className={`flex items-center justify-center h-screen w-screen bg-black fixed top-0 left-0 transition-opacity duration-500 ${
                        fadeOut ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-white text-4xl font-bold animate-pulse">LOGO</p>
                </div>
            )}
        </div>


    )
}

export default MyApp