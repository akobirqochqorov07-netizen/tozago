import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, X, Zap, Star, Crown, ArrowRight } from 'lucide-react';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import { motion } from 'framer-motion';
import './PricingSection.css';

export function PricingSection() {
    const { t } = useLanguage();
    const [selected, setSelected] = useState<string | null>(null);

    const handlePayment = (planName: string, amount: string) => {
        setSelected(planName);
        const transaction = {
            name: 'User_' + Math.floor(Math.random() * 10000),
            plan: planName,
            amount: amount,
            date: new Date().toISOString()
        };
        const existing = JSON.parse(localStorage.getItem('tozago_transactions') || '[]');
        existing.unshift(transaction);
        localStorage.setItem('tozago_transactions', JSON.stringify(existing));
        setTimeout(() => setSelected(null), 3000);
    };

    const plans = [
        {
            key: 'basic',
            icon: Zap,
            name: t('pricing.basic_title'),
            price: '50 000',
            period: t('pricing.period'),
            color: 'var(--text-secondary)',
            accentColor: 'rgba(100,116,139,0.15)',
            popular: false,
            features: [
                { text: t('pricing.basic_f1'), included: true },
                { text: t('pricing.basic_f2'), included: true },
                { text: t('pricing.basic_f3'), included: true },
                { text: t('pricing.basic_f4'), included: false },
                { text: t('pricing.basic_f5'), included: false },
            ],
            amount: '50 000',
        },
        {
            key: 'standard',
            icon: Star,
            name: t('pricing.standard_title'),
            price: '80 000',
            period: t('pricing.period'),
            color: 'var(--brand-primary)',
            accentColor: 'rgba(34,197,94,0.12)',
            popular: true,
            features: [
                { text: t('pricing.standard_f1'), included: true },
                { text: t('pricing.standard_f2'), included: true },
                { text: t('pricing.standard_f3'), included: true },
                { text: t('pricing.standard_f4'), included: true },
                { text: t('pricing.standard_f5'), included: false },
            ],
            amount: '80 000',
        },
        {
            key: 'premium',
            icon: Crown,
            name: t('pricing.premium_title'),
            price: '120 000',
            period: t('pricing.period'),
            color: '#0ea5e9',
            accentColor: 'rgba(14,165,233,0.12)',
            popular: false,
            features: [
                { text: t('pricing.premium_f1'), included: true },
                { text: t('pricing.premium_f2'), included: true },
                { text: t('pricing.premium_f3'), included: true },
                { text: t('pricing.premium_f4'), included: true },
                { text: t('pricing.premium_f5'), included: true },
            ],
            amount: '120 000',
        },
    ];

    return (
        <section className="pricing-section" id="pricing">
            <div className="container">
                <AnimatedContainer animation="fade-up">
                    <div className="pricing-header">
                        <span className="pricing-badge">{t('pricing.badge')}</span>
                        <h2 className="section-title">{t('pricing.title')}</h2>
                        <p className="section-subtitle">{t('pricing.subtitle')}</p>
                    </div>
                </AnimatedContainer>

                <div className="pricing-grid">
                    {plans.map((plan, i) => {
                        const Icon = plan.icon;
                        return (
                            <AnimatedContainer key={plan.key} animation={plan.popular ? 'scale-up' : 'fade-up'} delay={0.1 + i * 0.1}>
                                <motion.div
                                    className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''} ${selected === plan.key ? 'pricing-card--selected' : ''}`}
                                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                    style={{ '--plan-color': plan.color, '--plan-accent': plan.accentColor } as React.CSSProperties}
                                >
                                    {plan.popular && (
                                        <div className="pricing-popular-badge">
                                            <Star size={12} fill="currentColor" />
                                            {t('pricing.popular')}
                                        </div>
                                    )}

                                    {/* Plan header */}
                                    <div className="pricing-plan-header">
                                        <div className="pricing-plan-icon">
                                            <Icon size={20} />
                                        </div>
                                        <h3 className="pricing-plan-name">{plan.name}</h3>
                                    </div>

                                    {/* Price */}
                                    <div className="pricing-price-block">
                                        <div className="pricing-price-row">
                                            <span className="pricing-currency">{t('pricing.currency')}</span>
                                            <span className="pricing-amount">{plan.price}</span>
                                        </div>
                                        <span className="pricing-period">/ {plan.period}</span>
                                    </div>

                                    {/* Divider */}
                                    <div className="pricing-divider" />

                                    {/* Features */}
                                    <ul className="pricing-features-list">
                                        {plan.features.map((f, j) => (
                                            <li key={j} className={`pricing-feature-item ${!f.included ? 'pricing-feature-item--disabled' : ''}`}>
                                                <span className={`pricing-feature-check ${f.included ? 'pricing-feature-check--yes' : 'pricing-feature-check--no'}`}>
                                                    {f.included ? <Check size={14} strokeWidth={3} /> : <X size={14} strokeWidth={3} />}
                                                </span>
                                                <span>{f.text}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <button
                                        className={`pricing-cta ${plan.popular ? 'pricing-cta--primary' : 'pricing-cta--secondary'}`}
                                        onClick={() => handlePayment(plan.key, plan.amount)}
                                    >
                                        {selected === plan.key ? (
                                            <span className="pricing-cta-success">✓ {t('pricing.selected')}</span>
                                        ) : (
                                            <>
                                                {t('pricing.select')}
                                                <ArrowRight size={16} />
                                            </>
                                        )}
                                    </button>
                                </motion.div>
                            </AnimatedContainer>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <AnimatedContainer animation="fade-up" delay={0.4}>
                    <p className="pricing-note">{t('pricing.note')}</p>
                </AnimatedContainer>
            </div>
        </section>
    );
}
