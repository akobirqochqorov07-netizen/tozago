import { useLanguage } from '../contexts/LanguageContext';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './ProblemSolutionSection.css';

// Import images correctly for Vite
import workerTruckImg from '../assets/eco_worker_truck.png';
import logoImg from '../assets/logo.png';

export function ProblemSolutionSection() {
    const { t } = useLanguage();

    return (
        <section className="problem-solution" id="services">
            <div className="container">
                <AnimatedContainer animation="fade-up">
                    <h2 className="section-title">{t('problem.title')}</h2>
                    <p className="section-subtitle">{t('problem.subtitle')}</p>
                </AnimatedContainer>

                <div className="ps-grid relative">
                    {/* Connection Line Desktop Only */}
                    <div className="connection-line hidden md:block">
                        <ArrowRight className="connection-arrow" size={24} />
                    </div>

                    <AnimatedContainer animation="fade-up" delay={0.2}>
                        <div className="problem-card">
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{t('problem.before_title')}</h3>
                            <ul className="ps-list">
                                <li className="ps-list-item">
                                    <div className="ps-icon-prob"><XCircle size={24} /></div>
                                    <span style={{ fontSize: '1.125rem' }}>{t('problem.desc1')}</span>
                                </li>
                                <li className="ps-list-item">
                                    <div className="ps-icon-prob"><XCircle size={24} /></div>
                                    <span style={{ fontSize: '1.125rem' }}>{t('problem.desc2')}</span>
                                </li>
                                <li className="ps-list-item">
                                    <div className="ps-icon-prob"><XCircle size={24} /></div>
                                    <span style={{ fontSize: '1.125rem' }}>{t('problem.desc3')}</span>
                                </li>
                            </ul>
                        </div>
                    </AnimatedContainer>

                    <AnimatedContainer animation="fade-up" delay={0.4}>
                        <div className="solution-card">
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span className="text-gradient">{t('problem.solution_part1')}</span> {t('problem.solution_part2')}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{t('solution.desc')}</p>

                            <ul className="ps-list" style={{ marginTop: 0 }}>
                                <li className="ps-list-item">
                                    <div className="ps-icon-sol"><CheckCircle2 size={24} /></div>
                                    <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>{t('problem.solution_desc1')}</span>
                                </li>
                                <li className="ps-list-item">
                                    <div className="ps-icon-sol"><CheckCircle2 size={24} /></div>
                                    <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>{t('features.f1_desc')}</span>
                                </li>
                                <li className="ps-list-item">
                                    <div className="ps-icon-sol"><CheckCircle2 size={24} /></div>
                                    <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>{t('problem.solution_desc3')}</span>
                                </li>
                            </ul>
                            <div style={{ marginTop: '2rem', position: 'relative', borderRadius: '1rem', overflow: 'hidden' }}>
                                <img
                                    src={workerTruckImg}
                                    alt="TozaGo Worker"
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                />
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.9)', padding: '0.5rem 1rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow-md)', backdropFilter: 'blur(10px)' }}>
                                    <img src={logoImg} alt="TozaGo" style={{ height: '24px' }} />
                                </div>
                            </div>
                        </div>
                    </AnimatedContainer>
                </div>
            </div>
        </section>
    );
}
