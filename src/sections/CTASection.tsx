
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './CTASection.css';

export function CTASection() {
    const { t } = useLanguage();

    return (
        <section className="cta-section">
            <div className="container cta-content">
                <AnimatedContainer animation="fade-up">
                    <h2 className="cta-title">{t('cta.title')}</h2>
                    <p className="cta-subtitle">Присоединяйтесь к тысячам семей, которые уже выбрали комфорт и заботу о природе с TozaGo.</p>
                </AnimatedContainer>

                <AnimatedContainer animation="scale-up" delay={0.2}>
                    <a href="#pricing" className="btn-cta">
                        {t('cta.button')} <ArrowRight size={20} />
                    </a>
                </AnimatedContainer>
            </div>
        </section>
    );
}
