import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Search } from 'lucide-react';

interface UrlInputProps {
    onSubmit: (url: string) => void;
    isLoading: boolean;
}

export const UrlInput: React.FC<UrlInputProps> = ({ onSubmit, isLoading }) => {
    const [url, setUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (url.trim()) {
            onSubmit(url.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
            <div className="flex gap-2">
                <Input
                    type="url"
                    placeholder="Enter website URL (e.g., https://example.com)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 h-12 text-lg"
                    required
                />
                <Button
                    type="submit"
                    disabled={isLoading || !url.trim()}
                    size="lg"
                    className="h-12 px-8"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Analyzing...
                        </>
                    ) : (
                        <>
                            <Search className="mr-2 h-5 w-5" />
                            Summarize
                        </>
                    )}
                </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
                Powered by AI • Instant summaries from any website
            </p>
        </form>
    );
};
