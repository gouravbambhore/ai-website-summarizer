import React, { useState } from 'react';
import { SummaryDisplay } from '@/components/SummaryDisplay';
import { LoadingAnimation } from '@/components/LoadingAnimation';
import { api } from '@/lib/api';
import { toast } from 'sonner';
import { Globe, Brain, Zap, Search, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Summary {
    url: string;
    title: string;
    summary: string;
}

const Index: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [summary, setSummary] = useState<Summary | null>(null);
    const [url, setUrl] = useState('');

    const handleSummarize = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url.trim()) return;

        setIsLoading(true);
        setSummary(null);

        try {
            const response = await api.summarize(url.trim());

            if (response.success) {
                setSummary({
                    url: response.url,
                    title: response.title,
                    summary: response.summary,
                });
                toast.success('Website summarized successfully!');
            } else {
                toast.error(response.error || 'Failed to summarize website');
            }
        } catch (error) {
            console.error('Error summarizing website:', error);
            toast.error(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Badge */}
                <div className="flex justify-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-teal-500/30 bg-slate-800/50 backdrop-blur">
                        <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal-400" />
                        <span className="text-teal-400 text-xs sm:text-sm font-medium">AI-Powered Summarizer</span>
                    </div>
                </div>

                {/* Hero Section */}
                <header className="text-center mb-10 sm:mb-12 lg:mb-16 max-w-4xl mx-auto px-2">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                        <span className="text-white">Website</span>
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                            Summarizer
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed px-4">
                        Drop any URL and watch our snarky AI distill the essence of any website into a{' '}
                        <span className="text-cyan-400 font-semibold">witty, digestible summary</span>
                    </p>
                </header>

                {/* Search Box - Mobile Optimized */}
                <form onSubmit={handleSummarize} className="max-w-3xl mx-auto mb-4 sm:mb-6">
                    {/* Desktop/Tablet Layout */}
                    <div className="hidden sm:flex gap-3 p-2 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700/50">
                        <div className="flex-1 flex items-center gap-3 px-4">
                            <Search className="h-5 w-5 text-slate-400 flex-shrink-0" />
                            <Input
                                type="url"
                                placeholder="Enter website URL to summarize..."
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                disabled={isLoading}
                                className="border-0 bg-transparent text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0 h-12 text-sm sm:text-base"
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={isLoading || !url.trim()}
                            className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold px-6 lg:px-8 h-12 rounded-xl whitespace-nowrap"
                        >
                            <Sparkles className="h-4 w-4 mr-2" />
                            Summarize
                        </Button>
                    </div>

                    {/* Mobile Layout - Stacked */}
                    <div className="sm:hidden space-y-3">
                        <div className="flex items-center gap-3 p-4 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700/50">
                            <Search className="h-5 w-5 text-slate-400 flex-shrink-0" />
                            <Input
                                type="url"
                                placeholder="Paste website URL..."
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                disabled={isLoading}
                                className="border-0 bg-transparent text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 text-base"
                                required
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={isLoading || !url.trim()}
                            className="w-full bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold h-12 rounded-xl text-base"
                        >
                            <Sparkles className="h-4 w-4 mr-2" />
                            Summarize
                        </Button>
                    </div>
                </form>

                <p className="text-center text-slate-400 mb-10 sm:mb-12 lg:mb-16 text-sm sm:text-base px-4">
                    Paste any URL and get a snarky AI-powered summary in seconds
                </p>

                {/* Loading State */}
                {isLoading && <LoadingAnimation />}

                {/* Summary Display */}
                {!isLoading && summary && (
                    <SummaryDisplay
                        url={summary.url}
                        title={summary.title}
                        summary={summary.summary}
                    />
                )}

                {/* Feature Cards - Responsive Grid */}
                {!isLoading && !summary && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
                        <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-6 sm:p-8 text-center hover:border-teal-500/50 transition-all touch-manipulation">
                            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-500/10 mb-3 sm:mb-4">
                                <Globe className="h-7 w-7 sm:h-8 sm:w-8 text-teal-400" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Any Website</h3>
                            <p className="text-sm sm:text-base text-slate-400">
                                Works with blogs, news sites, documentation, and more
                            </p>
                        </div>

                        <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-6 sm:p-8 text-center hover:border-teal-500/50 transition-all touch-manipulation">
                            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-500/10 mb-3 sm:mb-4">
                                <Brain className="h-7 w-7 sm:h-8 sm:w-8 text-teal-400" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">AI Analysis</h3>
                            <p className="text-sm sm:text-base text-slate-400">
                                Powered by advanced LLMs for intelligent summarization
                            </p>
                        </div>

                        <div className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-2xl p-6 sm:p-8 text-center hover:border-teal-500/50 transition-all touch-manipulation sm:col-span-2 lg:col-span-1">
                            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-500/10 mb-3 sm:mb-4">
                                <Zap className="h-7 w-7 sm:h-8 sm:w-8 text-teal-400" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Instant Results</h3>
                            <p className="text-sm sm:text-base text-slate-400">
                                Get your summary in seconds with markdown formatting
                            </p>
                        </div>
                    </div>
                )

                }

                {/* Footer with Creator Credit */}
                <footer className="mt-16 pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm md:text-base mb-4">
                        Built with 💙 by{' '}
                        <a
                            href="https://github.com/gouravbambhore"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-400 hover:text-teal-300 transition-colors font-semibold"
                        >
                            Gourav Bambhore
                        </a>
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <a
                            href="https://github.com/gouravbambhore/ai-website-summarizer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/50 hover:bg-slate-700/50 transition-all group"
                            aria-label="GitHub Repository"
                        >
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/gourav-bambhore-543457202/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/50 hover:bg-slate-700/50 transition-all group"
                            aria-label="LinkedIn Profile"
                        >
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>

                        <a
                            href="mailto:gouravbambhore650@gmail.com"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/50 hover:bg-slate-700/50 transition-all group"
                            aria-label="Email"
                        >
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-teal-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>

                    <p className="text-gray-500 text-xs md:text-sm">
                        AI-powered website summarization using Groq LLM
                    </p>
                </footer>

            </div>
        </div>
    );
};

export default Index;
