import { useLanguage } from '../contexts/LanguageContext';
import { Smartphone, Bell, PieChart } from 'lucide-react';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './AppShowcaseSection.css';

// Import images correctly for Vite
import phoneMockupImg from '../assets/mockup1.png';
import logoImg from '../assets/logo.png';

export function AppShowcaseSection() {
    const { language } = useLanguage();

    return (
        <section className="app-showcase">
            <div className="container showcase-grid">
                <AnimatedContainer animation="scale-up">
                    <div className="showcase-mockup">
                        <div className="glow-circle"></div>
                        {/* Using the user uploaded mockup */}
                        <div style={{ position: 'relative', width: '500px', height: '700px', zIndex: 1, transform: 'scale(1.15) translateY(-20px)' }}>
                            <img
                                src={phoneMockupImg}
                                alt="Phone Mockup"
                                style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.4))' }}
                            />

                            {/* Overlay the TozaGo Logo on the phone screen cleanly using CSS absolute positioning */}
                            <div style={{
                                position: 'absolute',
                                top: '40%',
                                left: '50%',
                                transform: 'translate(-50%, -50%) rotate(25deg) skewX(-15deg)', // Adjusted to match isometric angle roughly
                                background: 'rgba(255,255,255,0.95)',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '1rem',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                backdropFilter: 'blur(10px)',
                                zIndex: 10
                            }}>
                                <img src={logoImg} alt="TozaGo" style={{ height: '32px' }} />
                            </div>
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
                            {language === 'ru' ? 'Управляйте в один клик' : (language === 'en' ? 'Manage in one click' : 'Bir klik bilan boshqaring')}
                        </h2>
                        <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '4px solid var(--brand-primary)', marginBottom: '3rem' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', fontWeight: 500, lineHeight: '1.6' }}>
                                {language === 'ru' ? 'Наше мобильное приложение позволяет легко управлять подпиской, отслеживать график вывоза и копить эко-бонусы.' : (language === 'en' ? 'Our mobile app lets you easily manage your subscription, track pickup schedules, and earn eco-bonuses.' : "Bizning mobil ilovamiz orqali obunani qulay boshqarish, olib ketish jadvalini kuzatish va eko-bonuslar yig'ish mumkin.")}
                            </p>
                        </div>
                    </AnimatedContainer>

                    <ul className="showcase-list">
                        <AnimatedContainer animation="fade-up" delay={0.2}>
                            <li className="showcase-item">
                                <div className="showcase-icon"><Smartphone /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Удобный интерфейс</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Все настройки под рукой 24/7</p>
                                </div>
                            </li>
                        </AnimatedContainer>

                        <AnimatedContainer animation="fade-up" delay={0.3}>
                            <li className="showcase-item">
                                <div className="showcase-icon"><Bell /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Умные уведомления</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Напомним накануне о вывозе мусора</p>
                                </div>
                            </li>
                        </AnimatedContainer>

                        <AnimatedContainer animation="fade-up" delay={0.4}>
                            <li className="showcase-item">
                                <div className="showcase-icon"><PieChart /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Эко-статистика</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>Следите за своим личным вкладом в экологию</p>
                                </div>
                            </li>
                        </AnimatedContainer>
                    </ul>
                </div>
            </div>
        </section>
    );
}
