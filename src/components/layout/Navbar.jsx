import { useState, useEffect } from 'react';
import '../../styles/navbar.css';
import StormLogo from './StormLogo.jsx';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setIsDark(false);
            document.documentElement.removeAttribute('data-theme');
        }

        const handleScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        if (newTheme) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="/" className="logo" aria-label="Storm Inc — home">
                    <StormLogo className="logo-img" />
                </a>

                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                    <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Approach</a></li>
                    <li className="nav-divider" aria-hidden="true"></li>
                    <li className="theme-toggle">
                        <button onClick={toggleTheme} aria-label="Toggle dark mode">
                            {isDark ? '☼' : '☾'}
                        </button>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="nav-cta">
                            Start a project
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
