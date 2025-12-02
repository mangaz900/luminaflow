import React from 'react';
import { Activity, ShieldCheck, MousePointerClick, HeartPulse } from 'lucide-react';
import { ProductFeature } from '../types';

const features: ProductFeature[] = [
  {
    title: "Återaktiverar Hårsäckar",
    description: "Redensyl verkar direkt på hårsäckens stamceller för att starta en ny tillväxtfas.",
    icon: <Activity className="w-8 h-8 text-medical-500" />
  },
  {
    title: "Ökar Hårets Densitet",
    description: "Anagain från ärtgroddar minskar håravfall och gör håret tjockare och fylligare.",
    icon: <ShieldCheck className="w-8 h-8 text-medical-500" />
  },
  {
    title: "Precisions-applicering",
    description: "Roll-on kulan av metall ger en svalkande massage och applicerar serumet exakt där det behövs.",
    icon: <MousePointerClick className="w-8 h-8 text-medical-500" />
  },
  {
    title: "Ökad Cirkulation",
    description: "3% Rosmarin stimulerar blodflödet i hårbotten vilket ger näring till rötterna.",
    icon: <HeartPulse className="w-8 h-8 text-medical-500" />
  }
];

const Features: React.FC = () => {
  return (
    <section id="fordelar" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-medium text-medical-900 mb-4">Vetenskapen bakom tillväxt</h2>
          <p className="text-gray-600 text-lg">
            Lumina Growth är inte bara styling – det är bioteknik. Vi kombinerar naturens starkaste växtstimulerare i en formula.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl bg-medical-50 border border-medical-100 hover:border-medical-200 transition-all hover:shadow-lg group">
              <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm group-hover:scale-110 transition-transform text-medical-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-medical-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;