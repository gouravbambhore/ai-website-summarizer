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
                )}

            </div>
        </div>
    );
};

export default Index;
