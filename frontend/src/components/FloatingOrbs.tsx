import React, { useEffect, useRef } from 'react';

export const FloatingOrbs: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Create orbs dynamically
        const orbCount = 5;
        for (let i = 0; i < orbCount; i++) {
            const orb = document.createElement('div');
            orb.className = 'floating-orb';

            // Random positioning
            orb.style.left = `${Math.random() * 100}%`;
            orb.style.top = `${Math.random() * 100}%`;

            // Random size
            const size = 100 + Math.random() * 200;
            orb.style.width = `${size}px`;
            orb.style.height = `${size}px`;

            // Random animation duration
            orb.style.animationDuration = `${15 + Math.random() * 10}s`;
            orb.style.animationDelay = `${Math.random() * 5}s`;

            container.appendChild(orb);
        }

        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return (
        <>
            <div ref={containerRef} className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" />
            <style>{`
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.1));
          filter: blur(60px);
          animation: float linear infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(-20px, -20px) scale(1.05);
          }
        }
      `}</style>
        </>
    );
};
