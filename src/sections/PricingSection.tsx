
import { useLanguage } from '../contexts/LanguageContext';
import { Check } from 'lucide-react';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './PricingSection.css';

export function PricingSection() {
    const { t } = useLanguage();

    const handlePayment = (planName: string, amount: string) => {
        const transaction = {
            name: 'User_' + Math.floor(Math.random() * 10000),
            plan: planName,
            amount: amount,
            date: new Date().toISOString()
        };
        const existing = JSON.parse(localStorage.getItem('tozago_transactions') || '[]');
        existing.unshift(transaction);
        localStorage.setItem('tozago_transactions', JSON.stringify(existing));

        alert(t('pricing.alert_payment').replace('${planName}', planName));
    };

    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <AnimatedContainer animation="fade-up">
                    <h2 className="section-title">{t('pricing.title')}</h2>
                </AnimatedContainer>

                <div className="pricing-grid">
                    {/* Basic */}
                    <AnimatedContainer animation="fade-up" delay={0.1}>
                        <div className="pricing-card">
                            <h3 className="pricing-title">{t('pricing.basic_title')}</h3>
                            <div className="pricing-price">{t('pricing.basic_price').split('/')[0]} <span>/{t('pricing.basic_price').split('/')[1]}</span></div>
                            <ul className="pricing-features">
                                <li className="pricing-feature"><Check size={20} /> {t('pricing.basic_desc')}</li>
                                <li className="pricing-feature"><Check size={20} /> {t('pricing.containers_2')}</li>
                                <li className="pricing-feature" style={{ color: 'var(--text-secondary)' }}><Check size={20} color="var(--border-color)" /> {t('pricing.no_bonus')}</li>
                            </ul>
                            <div className="pricing-action">
                                <button className="btn-secondary" onClick={() => handlePayment('Basic', '50 000')}>{t('pricing.select')}</button>
                            </div>
                        </div>
                    </AnimatedContainer>

                    {/* Standard */}
                    <AnimatedContainer animation="scale-up" delay={0.2}>
                        <div className="pricing-card popular">
                            <div className="popular-badge">{t('pricing.popular')}</div>
                            <h3 className="pricing-title text-gradient">{t('pricing.standard_title')}</h3>
                            <div className="pricing-price">{t('pricing.standard_price').split('/')[0]} <span>/{t('pricing.standard_price').split('/')[1]}</span></div>
                            <ul className="pricing-features">
                                <li className="pricing-feature"><Check size={20} /> {t('pricing.standard_desc').split('+')[0]}</li>
                                <li className="pricing-feature"><Check size={20} /> {t('pricing.containers_3')}</li>
                                <li className="pricing-feature"><Check size={20} /> + {t('pricing.standard_desc').split('+')[1]}</li>
                            </ul>
                            <div className="pricing-action">
                                <button className="btn-primary" onClick={() => handlePayment('Standard', '80 000')}>{t('pricing.select')}</button>
                            </div>
                        </div>
                    </AnimatedContainer>

                    {/* Premium */}
                    <AnimatedContainer animation="fade-up" delay={0.3}>
                        <div className="pricing-card">
                            <h3 className="pricing-title text-gradient-secondary">{t('pricing.premium_title')}</h3>
                            <div className="pricing-price">{t('pricing.premium_price').split('/')[0]} <span>/{t('pricing.premium_price').split('/')[1]}</span></div>
                            <ul className="pricing-features">
                                <li className="pricing-feature"><Check size={20} /> {t('pricing.premium_desc').split('+')[0]}</li>
                                <li className="pricing-feature"><Check size={20} /> {t('pricing.premium_desc').split('+')[1]}</li>
                                <li className="pricing-feature"><Check size={20} /> {t('pricing.vip_support')}</li>
                            </ul>
                            <div className="pricing-action">
                                <button className="btn-secondary" onClick={() => handlePayment('Premium', '120 000')}>{t('pricing.select')}</button>
                            </div>
                        </div>
                    </AnimatedContainer>
                </div>
            </div>
        </section>
    );
}
