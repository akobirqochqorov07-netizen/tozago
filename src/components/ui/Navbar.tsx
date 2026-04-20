import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Language } from '../../contexts/LanguageContext';
import { Moon, Sun, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

// Import images correctly for Vite
import logoImg from '../../assets/logo.png';

export function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages: { code: Language; label: string }[] = [
        { code: 'ru', label: 'Русский' },
        { code: 'uz', label: 'O\'zbekcha' },
        { code: 'en', label: 'English' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container" style={{ paddingLeft: '0', maxWidth: '1400px' }}>
                {/* Logo: text removed, enlarged, moved left by reducing padding on container/logo */}
                <a href="#" className="nav-logo" style={{ marginLeft: '-1rem' }}>
                    <img src={logoImg} alt="TozaGo Logo" className="logo-img" />
                </a>

                <div className="nav-links">
                    <a href="#services" className="nav-link">{t('nav.services')}</a>
                    <a href="#how" className="nav-link">{t('nav.howItWorks')}</a>
                    <a href="#pricing" className="nav-link">{t('nav.pricing')}</a>
                </div>

                <div className="nav-actions">
                    {/* Creative Language Dropdown */}
                    <div className="lang-dropdown-container">
                        <button
                            className="creative-btn lang-toggle"
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
                        >
                            <Globe size={18} />
                            <span className="lang-text">{language.toUpperCase()}</span>
                            <ChevronDown size={16} className={`chevron ${isLangOpen ? 'open' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isLangOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="lang-dropdown-menu"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            className={`lang-option ${language === lang.code ? 'active' : ''}`}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setIsLangOpen(false);
                                            }}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Creative Theme Toggle */}
                    <button onClick={toggleTheme} className="creative-btn theme-toggle" aria-label="Toggle theme">
                        <motion.div
                            initial={false}
                            animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                            transition={{ duration: 0.5, type: 'spring' }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            {theme === 'light' ? <Moon size={20} className="moon-icon" /> : <Sun size={20} className="sun-icon" />}
                        </motion.div>
                    </button>

                    <a href="#contact" className="btn-primary get-started-btn">
                        {t('nav.contact')}
                    </a>
                </div>
            </div>
        </nav>
    );
}
