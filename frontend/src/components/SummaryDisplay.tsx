import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface SummaryDisplayProps {
    url: string;
    title: string;
    summary: string;
}

export const SummaryDisplay: React.FC<SummaryDisplayProps> = ({ url, title, summary }) => {
    return (
        <Card className="w-full max-w-4xl mx-auto mt-6 sm:mt-8 bg-slate-800/50 backdrop-blur border-slate-700/50">
            <CardHeader className="space-y-3 border-b border-slate-700/50 pb-4 sm:pb-6 p-4 sm:p-6">
                <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl sm:text-2xl text-white mb-1 sm:mb-2 break-words">{title}</CardTitle>
                        <CardDescription className="flex items-start sm:items-center gap-2 text-sm sm:text-base text-slate-300">
                            <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-teal-400 transition-colors break-all sm:truncate"
                            >
                                {url}
                            </a>
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                <div className="prose prose-invert prose-slate max-w-none 
                        prose-headings:text-teal-400 
                        prose-headings:font-bold
                        prose-h1:text-2xl sm:prose-h1:text-3xl prose-h1:mb-3 sm:prose-h1:mb-4
                        prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mb-2 sm:prose-h2:mb-3 prose-h2:mt-4 sm:prose-h2:mt-6
                        prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-3 sm:prose-h3:mt-4
                        prose-p:text-sm sm:prose-p:text-base prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-3 sm:prose-p:mb-4
                        prose-ul:text-sm sm:prose-ul:text-base prose-ul:text-slate-300 prose-ul:mb-3 sm:prose-ul:mb-4
                        prose-ol:text-sm sm:prose-ol:text-base prose-ol:text-slate-300 prose-ol:mb-3 sm:prose-ol:mb-4
                        prose-li:mb-1.5 sm:prose-li:mb-2
                        prose-strong:text-teal-300 prose-strong:font-semibold
                        prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline prose-a:break-words
                        prose-code:text-xs sm:prose-code:text-sm prose-code:text-teal-300 prose-code:bg-slate-900/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                        prose-pre:bg-slate-900/50 prose-pre:border prose-pre:border-slate-700 prose-pre:text-sm prose-pre:overflow-x-auto">
                    <ReactMarkdown>{summary}</ReactMarkdown>
                </div>
            </CardContent>
        </Card>
    );
};
