import React from 'react';
import HeroV2 from '../components/HeroV2';
import ProblemSolution from '../components/ProblemSolution';
import Benefits from '../components/Benefits';
import Usage from '../components/Usage';
import UserGallery from '../components/UserGallery';
import Ingredients from '../components/Ingredients';
import RollOnApplicator from '../components/RollOnApplicator';
import Timeline from '../components/Timeline';
import Pricing from '../components/Pricing';
import ComparisonTable from '../components/ComparisonTable';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import UrgencySection from '../components/UrgencySection';

const HomePageV2: React.FC = () => {
    return (
        <>
            <main className="overflow-x-hidden">
                {/* You can now edit this page independently for split testing */}
                <HeroV2 />
                <UserGallery />
                <ProblemSolution />
                <Benefits />
                <Ingredients />
                <RollOnApplicator />
                <ComparisonTable />
                <Usage />
                <Timeline />
                <UrgencySection />
                <Pricing />
                <Reviews />
                <FAQ />
            </main>
            <Footer />
        </>
    );
};

export default HomePageV2;
