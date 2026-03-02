import React from 'react';
import { Zap, Wind, Thermometer, RefreshCw } from 'lucide-react';

const technologies = [
    {
        image: "/tech-vacuum.png",
        title: "Vakuumstimulering",
        description:
            "Skapar ett kontrollerat undertryck som lyfter vävnaden och separerar fibrerna mekaniskt. Ökar blodflöde och lymfcirkulation direkt.",
        tag: "Teknik 1",
    },
    {
        image: "/tech-heat.png",
        title: "Djupvärme",
        description:
            "Mild värmeutveckling mjukar upp bindvävsstrukturen och gör vävnaden mer mottaglig för mekanisk bearbetning.",
        tag: "Teknik 2",
    },
    {
        image: "/tech-vibration.png",
        title: "Mikrovibration",
        description:
            "Precisionsvibrationer på cellulär nivå aktiverar kollagenproduktion och bidrar till ökad elasticitet över tid.",
        tag: "Teknik 3",
    },
    {
        image: "/tech-rotation.png",
        title: "360° Rotation",
        description:
            "Roterande huvud säkerställer att behandlingen når alla vinklar av det behandlade området — ingen zon lämnas obehandlad.",
        tag: "Teknik 4",
    },
];

const SolutionSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#F4EFEA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-20 space-y-4">
                    <span className="text-[#B8986A] text-xs font-semibold uppercase tracking-widest">Tekniken bakom</span>
                    <h2 className="font-serif text-4xl lg:text-5xl text-[#3B2E28]">
                        Fyra mekanismer.<br />
                        <em className="not-italic text-[#B8986A]">Ett sammanhängande system.</em>
                    </h2>
                    <p className="text-[#7A6A62] text-lg max-w-2xl mx-auto leading-relaxed">
                        LuminaFlow 360 kombinerar fyra beprövade tekniker i ett och samma verktyg —
                        för strukturell förändring, inte bara ytlig effekt.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech) => {
                        return (
                            <div
                                key={tech.title}
                                className="group bg-white rounded-3xl overflow-hidden border border-[#DDD4CB] hover:border-[#B8986A] hover:shadow-xl transition-all duration-300 flex flex-col"
                            >
                                {/* Image header */}
                                <div className="w-full aspect-square bg-[#EDE6DF] relative overflow-hidden">
                                    <img
                                        src={tech.image}
                                        alt={tech.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="text-[10px] font-bold text-[#B8986A] uppercase tracking-widest bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                                            {tech.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Text content */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="font-serif text-xl text-[#3B2E28] mb-3">{tech.title}</h3>
                                    <p className="text-[#7A6A62] text-sm leading-relaxed">{tech.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default SolutionSection;
