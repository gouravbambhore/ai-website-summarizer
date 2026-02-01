import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center space-y-6">
                <h1 className="text-9xl font-bold text-primary">404</h1>
                <h2 className="text-3xl font-semibold">Page Not Found</h2>
                <p className="text-muted-foreground">
                    The page you're looking for doesn't exist.
                </p>
                <Button asChild size="lg">
                    <Link to="/">
                        <Home className="mr-2 h-5 w-5" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
