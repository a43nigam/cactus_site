import React, {useEffect, useState} from 'react';
import {Sun} from "lucide-react";

const ResumePage = () => {
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
        <div className="container">

            <header className="flex justify-between items-center py-8">
                <div className="header-logo-container">
                    {/*<img src="/favicon.svg" width={100} height={100} alt="Astro Cactus Logo"/>*/}
                    <h1 className="text-2xl logo">Anubhav Nigam</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="nav-link">Portfolio</a></li>
                        <li><a href="/resume" className="nav-link active">Resume</a></li>
                        <li><a href="/about" className="nav-link">About</a></li>
                    </ul>
                </nav>
                <div className="flex space-x-4">
                    <button className="icon-button" onClick={toggleDarkMode}><Sun size={20}/></button>
                </div>
            </header>

            <main>
                <section className="mb-12">

                    <h4>Education</h4>
                    <p2>Cornell University - B.S. in Applied & Engineering Physics (Current)</p2>
                    <p> Coursework: Spacecraft Propulsion, Lasers and Photonics, Nanofabrication and Electronic
                        Characterization</p>
                    <span>---</span>
                    <br></br>

                    <h4>Technologies and Techniques</h4>
                    <p>Technologies: Solidworks, Ansys, Python, MATLAB, Mathematica, EaglePCB</p>
                    <p>Techniques: CFD, Optics, Chemical/Electric Propulsion, Machining,
                        Photo/E-Beam Lithography, SEM/AFM Microscopy, Electronics Testing</p>
                    <span>---</span>
                    <br></br>

                    <h4>Experience</h4>
                    <p2>Cornell Hyperloop - Mechanical Engineer (Current)</p2>
                    <p>Currently working with the team to design and implement maglev. Previously designed/built
                        a high thrust linear induction motor.</p>
                    <span>---</span>
                    <br></br>

                    <p2>Yasuda Lab - Undergraduate Research Assistant (Current)</p2>
                    <p>I'm studying superconductive superlattices, specifically those created by van der Waals
                        heterostructures. Currently working to create 2d-transfer station (see portfolio). Previously engineered cryogenic
                        cooling system (see portfolio).</p>
                    <span>---</span>
                    <br></br>

                    <p2>Air Force Research Laboratory - Research Intern (Summer 2024, Albuquerque)</p2>
                    <p>Investigated and characterized ion-emission phemonena, used experimental methods to improve
                        models of ionospheric space weather, specifically with plasmas. Used computational tools to model
                        novel alloys and predict their electronic properties, then developed novel processes to
                        fabricate materials which are relevant to the Space Force's mission.</p>
                    <span>---</span>
                    <br></br>

                    <h4>Languages</h4>
                    <p>English, German, Hindi</p>

                </section>
            </main>
        </div>
    );
};


export default ResumePage;
