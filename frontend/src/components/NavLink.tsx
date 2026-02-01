import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children, className }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={cn(
                'px-4 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                className
            )}
        >
            {children}
        </Link>
    );
};
