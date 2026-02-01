const API_BASE_URL = 'http://localhost:8000';

export interface SummarizeResponse {
    success: boolean;
    url: string;
    title: string;
    summary: string;
    error?: string;
}

export interface SummarizeRequest {
    url: string;
}

export const api = {
    async summarize(url: string): Promise<SummarizeResponse> {
        try {
            const response = await fetch(`${API_BASE_URL}/summarize`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to summarize website');
            }

            return data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error('An unexpected error occurred');
        }
    },

    async healthCheck(): Promise<boolean> {
        try {
            const response = await fetch(`${API_BASE_URL}/health`);
            return response.ok;
        } catch {
            return false;
        }
    },
};
