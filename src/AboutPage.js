import React, {useEffect, useState} from 'react';
import {Sun} from "lucide-react";

const AboutPage = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode === 'enabled' || false;
        // comment
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('dark-mode', 'disabled');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };


    return (
        <div className="container">

            <header className="flex justify-between items-center py-8">
                <div className="header-logo-container">
                    {/*<img src="/favicon.svg" width={100} height={100} alt="Astro Cactus Logo"/>*/}
                    <h1 className="text-2xl logo">Anubhav Nigam</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="nav-link">Portfolio</a></li>
                        <li><a href="/resume" className="nav-link">Resume</a></li>
                        <li><a href="/about" className="nav-link active">About</a></li>
                    </ul>
                </nav>
                <div className="flex space-x-4">
                    <button className="icon-button" onClick={toggleDarkMode}><Sun size={20}/></button>
                </div>
            </header>

            <main>
                <section className="mb-12">
                    <p className="mb-4">Hey, I'm Anubhav, but some of my friends call me Bhuvy. I grew up in the suburbs of Chicago
                    and lived there my whole life before coming to college. I like to cook/eat <a href="https://www.instagram.com/bubbles_eats_fr/">food</a>
                        &#20;and play/watch sports - I mostly play tennis, golf, and snowboard. I also like music -
                        I play the piano and saxophone, and plan on learning the guitar soon.</p>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
