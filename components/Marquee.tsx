'use client';

export default function Marquee() {
  const text = "SOFTWARE ENGINEERING · UI/UX · AI · DATA · AUTOMATION · CREATIVE TECHNOLOGY · ";
  const repeatCount = 4;

  return (
    <section className="relative py-12 md:py-16 overflow-hidden flex bg-main border-y border-border">
      {/* Subtle technical grid line continuation */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <div 
        className="relative z-10 flex whitespace-nowrap w-max"
        style={{
          animation: 'marquee 60s linear infinite',
        }}
      >
        {[...Array(repeatCount)].map((_, i) => (
          <span 
            key={i} 
            className="text-7xl md:text-8xl lg:text-9xl font-bold uppercase text-elevated select-none pr-8"
          >
            {text}
          </span>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (prefers-reduced-motion: reduce) {
          .flex.whitespace-nowrap {
            animation-play-state: paused !important;
          }
        }
      `}} />
    </section>
  );
}
