import React, { useRef, useState } from 'react';

const videos = [
    { src: '/cel1.mp4' },
    { src: '/cel2.mp4' },
    { src: '/cel3.mp4' },
    { src: '/cel4.mp4' },
];

const VideoSection: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Mobile: 2 videos per slide → 2 slides (0 = vid1+2, 1 = vid3+4)
    const totalSlides = 2;
    const prev = () => setCurrent(c => (c === 0 ? totalSlides - 1 : c - 1));
    const next = () => setCurrent(c => (c === totalSlides - 1 ? 0 : c + 1));

    const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.targetTouches[0].clientX; };
    const onTouchMove = (e: React.TouchEvent) => { touchEndX.current = e.targetTouches[0].clientX; };
    const onTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 40) next();
        else if (diff < -40) prev();
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section className="py-16 bg-[#F4EFEA] overflow-hidden">

            {/* ── Desktop: 4 kolumner ── */}
            <div className="hidden md:grid md:grid-cols-4 gap-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {videos.map((v, i) => (
                    <div key={i} className="relative rounded-2xl overflow-hidden bg-[#EDE6DF] aspect-[9/16] group shadow-md hover:shadow-xl transition-shadow duration-300">
                        <video src={v.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3B2E28]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                ))}
            </div>

            {/* ── Mobil: 2 per slide, pilar, dots ── */}
            <div
                className="md:hidden relative"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-[380ms] ease-out"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {/* Slide 0 */}
                        <div className="min-w-full flex gap-1.5 px-2">
                            {videos.slice(0, 2).map((v, i) => (
                                <div key={i} className="w-1/2 aspect-[9/16] bg-[#EDE6DF] rounded-2xl overflow-hidden flex-shrink-0">
                                    <video src={v.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        {/* Slide 1 */}
                        <div className="min-w-full flex gap-1.5 px-2">
                            {videos.slice(2, 4).map((v, i) => (
                                <div key={i} className="w-1/2 aspect-[9/16] bg-[#EDE6DF] rounded-2xl overflow-hidden flex-shrink-0">
                                    <video src={v.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pil vänster */}
                <button
                    onClick={prev}
                    aria-label="Föregående"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white z-10"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                {/* Pil höger */}
                <button
                    onClick={next}
                    aria-label="Nästa"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white z-10"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4">
                    {[0, 1].map(i => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-5 bg-[#B8986A]' : 'w-2 bg-[#DDD4CB]'}`}
                        />
                    ))}
                </div>
            </div>

        </section>
    );
};

export default VideoSection;
