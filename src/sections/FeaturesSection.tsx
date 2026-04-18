import { useLanguage } from '../contexts/LanguageContext';
import { Recycle, CalendarClock, Leaf, Award, Headset } from 'lucide-react';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './FeaturesSection.css';

export function FeaturesSection() {
    const { t, language } = useLanguage();

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
                                src="/src/assets/eco_waste_sorting.png"
                                alt="Waste Sorting Infrastructure"
                                className="sticky-bg-img"
                            />
                            <div className="sticky-overlay-card">
                                <img src="/src/assets/logo.png" alt="TozaGo" style={{ height: '32px' }} />
                                <div className="overlay-text">
                                    {language === 'ru' ? 'Современная эко-инфраструктура' : (language === 'en' ? 'Modern Eco-Infrastructure' : 'Zamonaviy eko-infratuzilma')}
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
                                    {language === 'ru' ? 'Геймификация и Эко-баллы' : (language === 'en' ? 'Gamification & Eco-Points' : 'Geymifikatsiya va Eko-ballar')}
                                </h3>
                                <p className="feature-desc">
                                    {language === 'ru'
                                        ? 'Копите баллы за каждый правильный вывоз и обменивайте их на уникальные экологичные призы или скидки.'
                                        : (language === 'en' ? 'Earn points for every proper pickup and exchange them for unique eco-prizes or discounts.' : 'Har bir to\'g\'ri olib chiqish uchun ball to\'plang va ularni eko-sovg\'alar yoki chegirmalarga almashtiring.')}
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
                                    {language === 'ru' ? 'Круглосуточная цифровая поддержка' : (language === 'en' ? '24/7 Digital Support' : '24/7 Raqamli Qo\'llab-quvvatlash')}
                                </h3>
                                <p className="feature-desc">
                                    {language === 'ru'
                                        ? 'Наш бот и команда диспетчеров всегда на связи. Решаем любые вопросы вывоза за считанные минуты.'
                                        : (language === 'en' ? 'Our bot and dispatch team are always in touch. Resolving any pickup issues in minutes.' : 'Bizning botimiz va dispetcherlar guruhimiz doim aloqada. Har qanday olib chiqish muammolarini daqiqalarda hal qilamiz.')}
                                </p>
                            </div>
                        </AnimatedContainer>

                    </div>
                </div>
            </div>
        </section>
    );
}
