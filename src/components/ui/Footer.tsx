import { useLanguage } from '../../contexts/LanguageContext';
import { Mail, Phone, Globe } from 'lucide-react';
import './Footer.css';

// Import images correctly for Vite
import logoImg from '../../assets/logo.png';

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="nav-logo text-gradient" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                            <img src={logoImg} alt="TozaGo Logo" style={{ height: '32px' }} />
                            TozaGo
                        </a>
                        <p className="footer-desc">
                            {t('hero.subtitle')}
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-title">{t('nav.services')}</h4>
                        <ul className="footer-links">
                            <li><a href="#how">{t('nav.howItWorks')}</a></li>
                            <li><a href="#pricing">{t('nav.pricing')}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-title">Компания</h4>
                        <ul className="footer-links">
                            <li><a href="#">О нас</a></li>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-title">Подписаться</h4>
                        <div className="social-links">
                            <a href="#" aria-label="Mail"><Mail size={24} /></a>
                            <a href="#" aria-label="Phone"><Phone size={24} /></a>
                            <a href="#" aria-label="Website"><Globe size={24} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>{t('footer.rights')}</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
