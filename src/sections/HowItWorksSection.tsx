
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './HowItWorksSection.css';

export function HowItWorksSection() {
    const { t } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="how-section" id="how">
            <div className="container">
                <AnimatedContainer animation="fade-up">
                    <h2 className="section-title" style={{ background: 'linear-gradient(to right, var(--text-primary), var(--brand-primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {t('how.title')}
                    </h2>
                </AnimatedContainer>

                <div className="timeline" ref={containerRef}>
                    <div className="timeline-line-bg"></div>
                    <motion.div className="timeline-line-fill" style={{ height: lineHeight }}></motion.div>
                    <AnimatedContainer animation="fade-up" delay={0.1}>
                        <div className="timeline-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3 className="step-title">{t('how.step1')}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{t('how.step1_desc')}</p>
                            </div>
                        </div>
                    </AnimatedContainer>

                    <AnimatedContainer animation="fade-up" delay={0.2}>
                        <div className="timeline-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3 className="step-title">{t('how.step2')}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{t('how.step2_desc')}</p>
                            </div>
                        </div>
                    </AnimatedContainer>

                    <AnimatedContainer animation="fade-up" delay={0.3}>
                        <div className="timeline-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3 className="step-title">{t('how.step3')}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{t('how.step3_desc')}</p>
                            </div>
                        </div>
                    </AnimatedContainer>
                </div>
            </div>
        </section>
    );
}
