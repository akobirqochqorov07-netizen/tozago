import { useLanguage } from '../contexts/LanguageContext';
import { Recycle, CalendarClock, Leaf, Award, Headset } from 'lucide-react';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './FeaturesSection.css';

// Import images correctly for Vite
import wasteSortingImg from '../assets/eco_waste_sorting.png';
import logoImg from '../assets/logo.png';

export function FeaturesSection() {
    const { t } = useLanguage();

    return (
        <section className="features-section">
            <div className="container">
                <AnimatedContainer animation="fade-up">
                    <h2 className="section-title" style={{ marginBottom: '4rem' }}>{t('features.title')}</h2>
                </AnimatedContainer>

                <div className="features-sticky-layout">

                    {/* Left Sticky Side */}
                    <div className="features-sticky-left">
                        <AnimatedContainer animation="fade-up" delay={0.1} className="sticky-image-wrapper">
                            <img
                                src={wasteSortingImg}
                                alt="Waste Sorting Infrastructure"
                                className="sticky-bg-img"
                            />
                            <div className="sticky-overlay-card">
                                <img src={logoImg} alt="TozaGo" style={{ height: '32px' }} />
                                <div className="overlay-text">
                                    {t('features.eco_infrastructure')}
                                </div>
                            </div>
                        </AnimatedContainer>
                    </div>

                    {/* Right Scrolling Cards Side */}
                    <div className="features-scrolling-right">

                        {/* Card 1 */}
                        <AnimatedContainer animation="fade-up" delay={0.2}>
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <Recycle size={32} />
                                </div>
                                <h3 className="feature-title">{t('features.f1_title')}</h3>
                                <p className="feature-desc">{t('features.f1_desc')}</p>
                            </div>
                        </AnimatedContainer>

                        {/* Card 2 */}
                        <AnimatedContainer animation="fade-up" delay={0.25}>
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <CalendarClock size={32} />
                                </div>
                                <h3 className="feature-title">{t('features.f2_title')}</h3>
                                <p className="feature-desc">{t('features.f2_desc')}</p>
                            </div>
                        </AnimatedContainer>

                        {/* Card 3 */}
                        <AnimatedContainer animation="fade-up" delay={0.3}>
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <Leaf size={32} />
                                </div>
                                <h3 className="feature-title">{t('features.f3_title')}</h3>
                                <p className="feature-desc">{t('features.f3_desc')}</p>
                            </div>
                        </AnimatedContainer>

                        {/* Card 4 (New) */}
                        <AnimatedContainer animation="fade-up" delay={0.35}>
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <Award size={32} />
                                </div>
                                <h3 className="feature-title">
                                    {t('features.f4_title')}
                                </h3>
                                <p className="feature-desc">
                                    {t('features.f4_desc')}
                                </p>
                            </div>
                        </AnimatedContainer>

                        {/* Card 5 (New) */}
                        <AnimatedContainer animation="fade-up" delay={0.4}>
                            <div className="feature-card">
                                <div className="feature-icon-wrapper">
                                    <Headset size={32} />
                                </div>
                                <h3 className="feature-title">
                                    {t('features.f5_title')}
                                </h3>
                                <p className="feature-desc">
                                    {t('features.f5_desc')}
                                </p>
                            </div>
                        </AnimatedContainer>

                    </div>
                </div>
            </div>
        </section>
    );
}
