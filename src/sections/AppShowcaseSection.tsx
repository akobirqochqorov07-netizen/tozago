import { useLanguage } from '../contexts/LanguageContext';
import { Smartphone, Bell, PieChart } from 'lucide-react';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './AppShowcaseSection.css';

// Import images correctly for Vite
import phoneMockupImg from '../assets/mockup1.png';

export function AppShowcaseSection() {
    const { t } = useLanguage();

    return (
        <section className="app-showcase">
            <div className="container showcase-grid">
                <AnimatedContainer animation="scale-up">
                    <div className="showcase-mockup">
                        <div className="glow-circle"></div>
                        <div className="showcase-mockup-inner">
                            <img
                                src={phoneMockupImg}
                                alt={t('alt.phone_mockup')}
                                className="showcase-mockup-img"
                            />
                        </div>
                    </div>
                </AnimatedContainer>

                <div className="showcase-content">
                    <AnimatedContainer animation="fade-up" delay={0.1}>
                        <h2 style={{
                            fontSize: '3rem',
                            lineHeight: '1.2',
                            background: 'linear-gradient(135deg, var(--brand-primary) 0%, #10b981 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            marginBottom: '1.5rem',
                            fontWeight: 800
                        }}>
                            {t('showcase.title')}
                        </h2>
                        <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '4px solid var(--brand-primary)', marginBottom: '3rem' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', fontWeight: 500, lineHeight: '1.6' }}>
                                {t('showcase.desc')}
                            </p>
                        </div>
                    </AnimatedContainer>

                    <ul className="showcase-list">
                        <AnimatedContainer animation="fade-up" delay={0.2}>
                            <li className="showcase-item">
                                <div className="showcase-icon"><Smartphone /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{t('showcase.f1_title')}</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>{t('showcase.f1_desc')}</p>
                                </div>
                            </li>
                        </AnimatedContainer>

                        <AnimatedContainer animation="fade-up" delay={0.3}>
                            <li className="showcase-item">
                                <div className="showcase-icon"><Bell /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{t('showcase.f2_title')}</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>{t('showcase.f2_desc')}</p>
                                </div>
                            </li>
                        </AnimatedContainer>

                        <AnimatedContainer animation="fade-up" delay={0.4}>
                            <li className="showcase-item">
                                <div className="showcase-icon"><PieChart /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{t('showcase.f3_title')}</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>{t('showcase.f3_desc')}</p>
                                </div>
                            </li>
                        </AnimatedContainer>
                    </ul>
                </div>
            </div>
        </section>
    );
}
