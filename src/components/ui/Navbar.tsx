import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Language } from '../../contexts/LanguageContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

import logoImg from '../../assets/logo.png';

export function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileLangOpen, setMobileLangOpen] = useState(false);
    const langRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setScrolled(window.scrollY > 20);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close lang dropdown when clicking outside
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (langRef.current && !langRef.current.contains(e.target as Node)) {
                setMobileLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    // Lock scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
        { code: 'ru', label: 'Русский', flag: '🇷🇺' },
        { code: 'en', label: 'English', flag: '🇬🇧' },
    ];

    const navLinks = [
        { href: '#services', label: t('nav.services') },
        { href: '#how', label: t('nav.howItWorks') },
        { href: '#pricing', label: t('nav.pricing') },
    ];

    const currentLang = languages.find(l => l.code === language);

    return (
        <>
            <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar-glass" />

                <div className="navbar-inner">
                    {/* Logo */}
                    <a href="#" className="nav-logo" onClick={() => setMobileOpen(false)}>
                        <img src={logoImg} alt={t('alt.logo')} className="logo-img" />
                    </a>

                    {/* Desktop center links */}
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="nav-link">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop right actions */}
                    <div className="nav-actions">
                        {/* Language dropdown — desktop only */}
                        <div className="lang-container desktop-only" ref={langRef}>
                            <button
                                className="glass-btn lang-toggle"
                                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                                aria-label={t('nav.aria_language')}
                            >
                                <span className="lang-flag-sm">{currentLang?.flag}</span>
                                <span className="lang-code">{language.toUpperCase()}</span>
                                <motion.span
                                    animate={{ rotate: mobileLangOpen ? 180 : 0 }}
                                    transition={{ duration: 0.22 }}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {mobileLangOpen && (
                                    <motion.div
                                        className="lang-menu"
                                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                className={`lang-option ${language === lang.code ? 'lang-option--active' : ''}`}
                                                onClick={() => { setLanguage(lang.code); setMobileLangOpen(false); }}
                                            >
                                                <span className="lang-flag">{lang.flag}</span>
                                                <span>{lang.label}</span>
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Theme toggle */}
                        <button onClick={toggleTheme} className="glass-btn theme-btn" aria-label={t('nav.aria_theme')}>
                            <AnimatePresence mode="wait">
                                {theme === 'light' ? (
                                    <motion.div key="moon"
                                        initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.22 }}>
                                        <Moon size={18} className="moon-icon" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="sun"
                                        initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.22 }}>
                                        <Sun size={18} className="sun-icon" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* Contact CTA — desktop only */}
                        <a href="#contact" className="btn-primary nav-cta desktop-only">
                            {t('nav.contact')}
                        </a>

                        {/* Mobile burger */}
                        <button
                                className="glass-btn mobile-burger"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label={t('nav.aria_menu')}
                            >
                            <AnimatePresence mode="wait">
                                {mobileOpen ? (
                                    <motion.div key="x"
                                        initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                                        <X size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu"
                                        initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                                        <Menu size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="mobile-overlay"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        style={{ top: scrolled ? '64px' : '72px' }}
                    >
                        <div className="mobile-overlay-glass" />
                        <div className="mobile-menu-content">

                            {/* Nav links */}
                            <nav className="mobile-nav-links">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        className="mobile-nav-link"
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.04 + i * 0.06, duration: 0.3 }}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Language selector inside menu */}
                            <motion.div
                                className="mobile-lang-section"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.22, duration: 0.3 }}
                            >
                                <div className="mobile-lang-label">{t('nav.language')}</div>
                                <div className="mobile-lang-row">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            className={`mobile-lang-btn ${language === lang.code ? 'mobile-lang-btn--active' : ''}`}
                                            onClick={() => { setLanguage(lang.code); setMobileOpen(false); }}
                                        >
                                            <span>{lang.flag}</span>
                                            <span>{lang.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Contact CTA in menu */}
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.3 }}
                            >
                                <a
                                    href="#contact"
                                    className="btn-primary mobile-cta"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {t('nav.contact')}
                                </a>
                            </motion.div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
