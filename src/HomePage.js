import React, {useEffect, useState} from 'react';
import { Sun, Github } from 'lucide-react';
import './astro-cactus-styles.css';
import TableOfContents from './TableOfContents'


const AstroCactusClone = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode === 'enabled' || false;
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
        <div className={`container ${darkMode ? 'dark' : ''}`}>
            <header className="flex justify-between items-center py-8">
                <div className="header-logo-container">
                    {/*<img src="/favicon.svg" width={100} height={100} alt="Astro Cactus Logo"/>*/}
                    <h1 className="text-2xl logo">Anubhav Nigam</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="nav-link active">Portfolio</a></li>
                        <li><a href="/resume" className="nav-link">Resume</a></li>
                        <li><a href="/about" className="nav-link">About</a></li>
                    </ul>
                </nav>
                <div className="flex space-x-4">
                    <button className="icon-button" onClick={toggleDarkMode}><Sun size={20}/></button>
                </div>
            </header>


            <main>
                <section>
                    <p>
                        Here's some stuff I've worked on:
                    </p>
                    <TableOfContents/>
                    <br></br>
                </section>

                <section>
                <span>---</span>
                    <h4>2d-Transfer Station (Current)</h4>
                    <p>
                        I am designing and engineering a 2d-heterostructure fabrication system for the lab I work in.
                        Our goal is to stack monolayers of various 2d materials, and we want to create a system by which
                        monolayers can be stamped and stacked in order to create samples with 2 or 3 layers of molecules.
                    </p>
                    <p>
                        In its simplest form, this system will consist of 2 plates on top of each other. The top plate will have 3 degrees
                        of freedom (XYZ) and the bottom will have 4 (XYZ + rotation). All movement needs to be precise
                        to 5µm and any amount of vibration will render the system unusable. The goal is to use mostly
                        COTS (Commercial off the Shelf) parts to minimize costs.
                    </p>
                    <p>
                        I'm currently working on conceptualizing the system. After I've finished doing that and
                        consulted with my PI, I'll CAD the system using Solidworks. Depending on cost, I will machine the
                        parts, and assemble the system myself.
                    </p>
                </section>

                <section>
                    <span>---</span>
                    <h4>Cryogenic Measurement System</h4>
                    <p>
                        Last semester, I designed and engineered a cryogenic probe for my lab to allow us to characterize
                        our samples at temperatures as low as 20K.
                    </p>
                    <p>
                        The probe was machined from oxygen-free copper for maximum thermal conductivity. I also designed a
                        PCB - a 44 pin LCC socket is soldered to the PCB, and our sample is wire bonded to the male LCC.
                    </p>

                </section>





                {/*<section>*/}
                {/*  <h3>Posts</h3>*/}
                {/*  <ul className="post-list">*/}
                {/*    {[*/}
                {/*      { date: '25 Aug 2024', title: 'Markdown Admonitions' },*/}
                {/*      { date: '11 Oct 2023', title: 'Adding Webmentions to Astro Cactus' },*/}
                {/*      { date: '4 Jul 2023', title: 'Example Cover Image' },*/}
                {/*      { date: '22 Feb 2023', title: 'A post of Markdown elements' },*/}
                {/*      { date: '22 Feb 2023', title: "This post doesn't have any content" },*/}
                {/*      { date: '1 Feb 2023', title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id' },*/}
                {/*      { date: '30 Jan 2023', title: 'Unique tags validation' },*/}
                {/*      { date: '27 Jan 2023', title: 'Example OG Social Image' },*/}
                {/*    ].map((post, index) => (*/}
                {/*        <li key={index} className="post-item">*/}
                {/*          <span className="post-date">{post.date}</span>*/}
                {/*          <a href="#" className="post-title">{post.title}</a>*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*  </ul>*/}
                {/*</section>*/}
            </main>
        </div>
    );
};

export default AstroCactusClone;