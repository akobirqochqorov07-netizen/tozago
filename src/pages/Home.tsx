import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { HeroSection } from '../sections/HeroSection';
import { ProblemSolutionSection } from '../sections/ProblemSolutionSection';
import { FeaturesSection } from '../sections/FeaturesSection';
import { HowItWorksSection } from '../sections/HowItWorksSection';
import { AppShowcaseSection } from '../sections/AppShowcaseSection';
import { PricingSection } from '../sections/PricingSection';
import { ContactSection } from '../sections/ContactSection';
import { CTASection } from '../sections/CTASection';

export function Home() {
    return (
        <div className="app-wrapper">
            <Navbar />
            <main>
                <HeroSection />
                <ProblemSolutionSection />
                <FeaturesSection />
                <HowItWorksSection />
                <AppShowcaseSection />
                <PricingSection />
                <ContactSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
