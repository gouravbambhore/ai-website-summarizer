import React from 'react';

export const LoadingAnimation: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20">
            {/* Animated Rings */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
                <div className="absolute inset-0 rounded-full border-4 border-teal-500/30 animate-ping"></div>
                <div className="absolute inset-2 sm:inset-3 rounded-full border-4 border-teal-400/50 animate-pulse"></div>
                <div className="absolute inset-4 sm:inset-5 lg:inset-6 rounded-full border-4 border-cyan-400 animate-spin"></div>
                <div className="absolute inset-6 sm:inset-8 lg:inset-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 animate-pulse"></div>
            </div>

            {/* Loading Text */}
            <div className="mt-6 sm:mt-8 text-center px-4">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2">
                    Analyzing Website...
                </h3>
                <p className="text-sm sm:text-base text-slate-400">
                    Our AI is crafting your snarky summary
                </p>
            </div>

            {/* Progress Dots */}
            <div className="flex gap-2 mt-4 sm:mt-6">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full animate-bounce"></div>
            </div>
        </div>
    );
};
