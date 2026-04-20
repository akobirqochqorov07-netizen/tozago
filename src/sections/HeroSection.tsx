import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './HeroSection.css';

// Import images correctly for Vite
import heroImage from '../assets/hero-image.png';
import appMockup from '../assets/mockup2.png';

export function HeroSection() {
    const { t } = useLanguage();
    const { scrollY } = useScroll();

    const yImage = useTransform(scrollY, [0, 500], [0, 150]);
    const yPhone = useTransform(scrollY, [0, 500], [0, -50]);
    const rotatePhone = useTransform(scrollY, [0, 500], [0, 5]);

    return (
        <section className="hero-section">
            <div className="hero-glow"></div>

            {/* Background Parallax Image */}
            <motion.div className="hero-bg-wrapper" style={{ y: yImage }}>
                <div
                    className="hero-parallax-bg"
                    style={{ backgroundImage: `url(${heroImage})` }}
                />
            </motion.div>

            <div className="container hero-grid">
                <div className="hero-content">
                    <AnimatedContainer animation="fade-up" delay={0.1}>
                        <div className="hero-badge">{t('hero.badge')}</div>
                    </AnimatedContainer>

                    <AnimatedContainer animation="fade-up" delay={0.2}>
                        <h1 className="hero-title">
                            <span className="text-gradient">{t('hero.title_part1')}</span>{' '}
                            {t('hero.title_part2')}
                        </h1>
                    </AnimatedContainer>

                    <AnimatedContainer animation="fade-up" delay={0.3}>
                        <p className="hero-subtitle">
                            {t('hero.subtitle')}
                        </p>
                    </AnimatedContainer>

                    <AnimatedContainer animation="fade-up" delay={0.4}>
                        <div className="hero-buttons">
                            <a href="#pricing" className="btn-primary">
                                {t('hero.cta')} <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                            </a>
                            <a href="#how" className="btn-secondary">
                                {t('nav.howItWorks')}
                            </a>
                        </div>
                    </AnimatedContainer>
                </div>

                <AnimatedContainer animation="scale-up" delay={0.5}>
                    <motion.div
                        className="hero-longscroll-container"
                        style={{ y: yPhone, rotateZ: rotatePhone }}
                    >
                        {/* Using the realistic User uploaded mockup */}
                        <img
                            src={appMockup}
                            alt="TozaGo App Screen Mockup"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '700px',
                                filter: 'drop-shadow(0 35px 60px rgba(0,0,0,0.25))',
                                transform: 'scale(1.1)'
                            }}
                        />
                    </motion.div>
                </AnimatedContainer>
            </div>
        </section>
    );
}
