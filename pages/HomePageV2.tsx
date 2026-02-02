import React from 'react';
import HeroV2 from '../components/HeroV2';
import ProblemSolutionV2 from '../components/ProblemSolutionV2';
import BenefitsV2 from '../components/BenefitsV2';
import Usage from '../components/Usage';
import UserGalleryV2 from '../components/UserGalleryV2';
import IngredientsV2 from '../components/IngredientsV2';
import RollOnApplicator from '../components/RollOnApplicator';
import TimelineV2 from '../components/TimelineV2';
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
                <UserGalleryV2 />
                <ProblemSolutionV2 />
                <BenefitsV2 />
                <IngredientsV2 />
                <RollOnApplicator />
                <ComparisonTable />
                <Usage />
                <TimelineV2 />
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
