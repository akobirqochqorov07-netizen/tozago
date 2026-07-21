import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedContainer } from '../components/ui/AnimatedContainer';
import './ProblemSolutionSection.css';

import mockup3 from '../assets/mocup3.png';
import mockup4 from '../assets/mocup4.png';

export function ProblemSolutionSection() {
    const { t } = useLanguage();

    return (
        <section className="problem-solution" id="services">
            <div className="container">
                <AnimatedContainer animation="fade-up">
                    <h2 className="section-title">{t('problem.title')}</h2>
                    <p className="section-subtitle">{t('problem.subtitle')}</p>
                </AnimatedContainer>

                <div className="ps-grid">
                    <AnimatedContainer animation="fade-up" delay={0.2}>
                        <div className="ps-visual">
                            <div className="ps-image-wrapper">
                                <img src={mockup3} alt={t('alt.before')} className="ps-image" />
                                <div className="ps-image-badge ps-image-badge--before">
                                    <span className="ps-badge-dot" />
                                    {t('problem.before_label')}
                                </div>
                            </div>
                            <div className="ps-text-block ps-text-block--before">
                                <h3 className="ps-visual-title">{t('problem.before_title_card')}</h3>
                                <p className="ps-visual-desc">{t('problem.before_desc_card')}</p>
                                <div className="ps-tags">
                                    <span className="ps-tag">{t('problem.tag_yard')}</span>
                                    <span className="ps-tag">{t('problem.tag_smell')}</span>
                                    <span className="ps-tag">{t('problem.tag_problem')}</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedContainer>

                    <AnimatedContainer animation="fade-up" delay={0.35}>
                        <div className="ps-connector">
                            <div className="ps-connector-line-wrap">
                                <div className="ps-connector-line ps-connector-line--top" />
                                <div className="ps-connector-dot ps-connector-dot--top" />
                            </div>
                            <div className="ps-connector-label">
                                <span>{t('problem.solution_part1')} {t('problem.solution_part2')}</span>
                            </div>
                            <div className="ps-connector-line-wrap">
                                <div className="ps-connector-line ps-connector-line--bottom" />
                                <div className="ps-connector-dot ps-connector-dot--bottom" />
                            </div>
                        </div>
                    </AnimatedContainer>

                    <AnimatedContainer animation="fade-up" delay={0.5}>
                        <div className="ps-visual">
                            <div className="ps-image-wrapper">
                                <img src={mockup4} alt={t('alt.after')} className="ps-image" />
                                <div className="ps-image-badge ps-image-badge--after">
                                    <span className="ps-badge-dot ps-badge-dot--green" />
                                    {t('problem.after_label')}
                                </div>
                            </div>
                            <div className="ps-text-block ps-text-block--after">
                                <h3 className="ps-visual-title ps-visual-title--gradient">
                                    {t('problem.after_title_card')}
                                </h3>
                                <p className="ps-visual-desc">{t('problem.after_desc_card')}</p>
                                <div className="ps-tags ps-tags--green">
                                    <span className="ps-tag ps-tag--green">{t('problem.tag_eco')}</span>
                                    <span className="ps-tag ps-tag--green">{t('problem.tag_fast')}</span>
                                    <span className="ps-tag ps-tag--green">{t('problem.tag_trust')}</span>
                                </div>
                            </div>
                        </div>
                    </AnimatedContainer>
                </div>
            </div>
        </section>
    );
}
