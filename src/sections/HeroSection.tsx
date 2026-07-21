import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Play, Recycle } from 'lucide-react';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './HeroSection.css';

import heroImage from '../assets/hero-image.png';
import appMockup from '../assets/mockup2.png';

export function HeroSection() {
    const { t } = useLanguage();
    const { scrollY } = useScroll();

    const yImage      = useTransform(scrollY, [0, 600], [0, 120]);
    const yPhone      = useTransform(scrollY, [0, 600], [0, -60]);
    const rotatePhone = useTransform(scrollY, [0, 600], [0, 4]);

    return (
        <section className="hero-section">
            {/* Ambient glow */}
            <div className="hero-glow" />

            {/* Parallax background */}
            <motion.div className="hero-bg-wrapper" style={{ y: yImage }}>
                <div className="hero-parallax-bg" style={{ backgroundImage: `url(${heroImage})` }} />
            </motion.div>

            <div className="container hero-grid">
                {/* ── Left: content ── */}
                <div className="hero-content">
                    <AnimatedContainer animation="fade-up" delay={0.1}>
                        <h1 className="hero-title">
                            <span className="text-gradient">{t('hero.title_part1')}</span>
                            <br />
                            {t('hero.title_part2')}
                        </h1>
                    </AnimatedContainer>

                    <AnimatedContainer animation="fade-up" delay={0.2}>
                        <p className="hero-subtitle">{t('hero.subtitle')}</p>
                    </AnimatedContainer>

                    <AnimatedContainer animation="fade-up" delay={0.3}>
                        <div className="hero-buttons">
                            <button className="btn-primary hero-btn-primary" onClick={() => {
                                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                {t('hero.cta')}
                                <ArrowRight size={18} />
                            </button>
                            <button className="hero-btn-ghost" onClick={() => {
                                document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <span className="hero-btn-ghost-icon">
                                    <Play size={13} fill="currentColor" />
                                </span>
                                {t('hero.how_cta')}
                            </button>
                        </div>
                    </AnimatedContainer>

                    {/* Stats row */}
                    <AnimatedContainer animation="fade-up" delay={0.45}>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <span className="hero-stat-num">{t('hero.stat1_num')}</span>
                                <span className="hero-stat-label">{t('features.stat4_label')}</span>
                            </div>
                            <div className="hero-stat-divider" />
                            <div className="hero-stat">
                                <span className="hero-stat-num">{t('hero.stat2_num')}</span>
                                <span className="hero-stat-label">{t('features.stat6_label')}</span>
                            </div>
                            <div className="hero-stat-divider" />
                            <div className="hero-stat">
                                <span className="hero-stat-num">{t('hero.stat3_num')}</span>
                                <span className="hero-stat-label">{t('features.stat2_label')}</span>
                            </div>
                        </div>
                    </AnimatedContainer>

                    {/* Mobile-only info text — shown instead of mockup */}
                    <div className="hero-mobile-features">
                        <AnimatedContainer animation="fade-up" delay={0.5}>
                            <div className="hero-mobile-info">
                                <div className="hero-mobile-info-icon">
                                    <Recycle size={20} />
                                </div>
                                <div>
                                    <div className="hero-mobile-info-title">{t('hero.mobile_info_title')}</div>
                                    <div className="hero-mobile-info-desc">{t('hero.mobile_info_desc')}</div>
                                </div>
                            </div>
                        </AnimatedContainer>
                    </div>
                </div>

                {/* ── Right: mockup (desktop only) ── */}
                <AnimatedContainer animation="scale-up" delay={0.4} className="hero-mockup-col">
                    <motion.div
                        className="hero-mockup-wrapper"
                        style={{ y: yPhone, rotateZ: rotatePhone }}
                    >
                        <img
                            src={appMockup}
                            alt={t('alt.tozago_app')}
                            className="hero-mockup-img"
                        />
                    </motion.div>
                </AnimatedContainer>
            </div>
        </section>
    );
}
