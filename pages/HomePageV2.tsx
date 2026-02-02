import React from 'react';
import HeroV2 from '../components/HeroV2';
import ProblemSolutionV2 from '../components/ProblemSolutionV2';
import BenefitsV2 from '../components/BenefitsV2';
import UsageV2 from '../components/UsageV2';
import UserGalleryV2 from '../components/UserGalleryV2';
import IngredientsV2 from '../components/IngredientsV2';
import RollOnApplicator from '../components/RollOnApplicator';
import TimelineV2 from '../components/TimelineV2';
import Pricing from '../components/Pricing';
import ComparisonTable from '../components/ComparisonTable';
import ReviewsV2 from '../components/ReviewsV2';
import FAQV2 from '../components/FAQV2';
import Footer from '../components/Footer';
import UrgencySectionV2 from '../components/UrgencySectionV2';

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
                <UsageV2 />
                <TimelineV2 />
                <UrgencySectionV2 />
                <Pricing />
                <ReviewsV2 />
                <FAQV2 />
            </main>
            <Footer />
        </>
    );
};

export default HomePageV2;
