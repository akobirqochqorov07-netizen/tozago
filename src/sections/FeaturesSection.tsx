import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Recycle, CalendarClock, Leaf, Shield, Zap, Heart } from 'lucide-react';
import './FeaturesSection.css';

import mockup1 from '../assets/mocup1.png';
import mockup2 from '../assets/mocup2.png';

// Plays once when the card first enters the viewport, never resets
function TypewriterText({ text, trigger }: { text: string; trigger: boolean }) {
    const [displayed, setDisplayed] = useState('');
    const hasPlayedRef = useRef(false);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        // Only start if never played before AND element is in view
        if (!trigger || hasPlayedRef.current) return;

        hasPlayedRef.current = true;
        setDisplayed('');
        let i = 0;

        timerRef.current = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));
            if (i >= text.length) {
                clearInterval(timerRef.current!);
                timerRef.current = null;
            }
        }, 16);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [trigger, text]);

    const isTyping = trigger && displayed.length < text.length && hasPlayedRef.current;

    return (
        <span>
            {displayed || (!hasPlayedRef.current ? text : '')}
            {isTyping && <span className="typewriter-cursor">|</span>}
        </span>
    );
}

function FeatureCard({
    icon: Icon,
    title,
    desc,
    stat,
    statLabel,
    number,
    index,
}: {
    icon: React.ElementType;
    title: string;
    desc: string;
    stat: string;
    statLabel: string;
    number: string;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, disconnect — no need to track exit
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`feature-card ${isVisible ? 'feature-card--visible' : ''}`}
            style={{ transitionDelay: `${index * 0.08}s` }}
        >
            <div className="feature-card-number">{number}</div>
            <div className="feature-card-content">
                <div className="feature-card-icon">
                    <Icon size={22} />
                </div>
                <h3 className="feature-card-title">{title}</h3>
                <p className="feature-card-desc">
                    <TypewriterText text={desc} trigger={isVisible} />
                </p>
                <div className="feature-card-stat">
                    <span className="feature-card-stat-value">{stat}</span>
                    <span className="feature-card-stat-label">{statLabel}</span>
                </div>
            </div>
        </div>
    );
}

export function FeaturesSection() {
    const { t } = useLanguage();

    const whyTozago = [
        {
            icon: Recycle,
            title: t('features.f1_title'),
            desc: t('features.f1_desc'),
            stat: t('features.f1_stat'),
            statLabel: t('features.stat1_label'),
        },
        {
            icon: CalendarClock,
            title: t('features.f2_title'),
            desc: t('features.f2_desc'),
            stat: t('features.f2_stat'),
            statLabel: t('features.stat2_label'),
        },
        {
            icon: Leaf,
            title: t('features.f3_title'),
            desc: t('features.f3_desc'),
            stat: t('features.f3_stat'),
            statLabel: t('features.stat3_label'),
        },
    ];

    const whyPeople = [
        {
            icon: Shield,
            title: t('features.f4_title_short'),
            desc: t('features.f4_desc_long'),
            stat: t('features.f4_stat'),
            statLabel: t('features.stat4_label'),
        },
        {
            icon: Zap,
            title: t('features.f5_title_short'),
            desc: t('features.f5_desc_long'),
            stat: t('features.f5_stat'),
            statLabel: t('features.stat5_label'),
        },
        {
            icon: Heart,
            title: t('features.f6_title_short'),
            desc: t('features.f6_desc_long'),
            stat: t('features.f6_stat'),
            statLabel: t('features.stat6_label'),
        },
    ];

    return (
        <section className="features-section" id="why">
            <div className="container">
                <div className="features-header">
                    <h2 className="section-title">{t('features.title')}</h2>
                    <p className="section-subtitle">{t('features.subtitle')}</p>
                </div>

                {/* Block 1: Left sticky image + Right scrolling cards */}
                <div className="features-block">
                    <div className="features-sticky-col">
                        <div className="features-sticky-wrapper">
                            <img src={mockup1} alt={t('alt.tozago_app')} className="features-sticky-img" />
                            <div className="features-img-glow features-img-glow--green" />
                        </div>
                    </div>
                    <div className="features-cards-col">
                        <div className="features-cards-label">{t('features.block1_label')}</div>
                        {whyTozago.map((f, i) => (
                            <FeatureCard
                                key={i}
                                icon={f.icon}
                                title={f.title}
                                desc={f.desc}
                                stat={f.stat}
                                statLabel={f.statLabel}
                                number={`0${i + 1}`}
                                index={i}
                            />
                        ))}
                    </div>
                </div>

                {/* Block 2: Right sticky image + Left scrolling cards */}
                <div className="features-block features-block--reverse">
                    <div className="features-sticky-col">
                        <div className="features-sticky-wrapper">
                            <img src={mockup2} alt={t('alt.tozago_team')} className="features-sticky-img" />
                            <div className="features-img-glow features-img-glow--blue" />
                        </div>
                    </div>
                    <div className="features-cards-col">
                        <div className="features-cards-label">{t('features.block2_label')}</div>
                        {whyPeople.map((f, i) => (
                            <FeatureCard
                                key={i}
                                icon={f.icon}
                                title={f.title}
                                desc={f.desc}
                                stat={f.stat}
                                statLabel={f.statLabel}
                                number={`0${i + 4}`}
                                index={i}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
