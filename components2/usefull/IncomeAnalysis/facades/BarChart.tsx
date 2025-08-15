'use client';

import { BarChart as RechartsBarChart, BarChartProps } from 'recharts';

interface BarChartFacadeProps extends BarChartProps {
    // Add any additional props specific to your facade
    className?: string;
    children?: React.ReactNode;
}

const BarChartFacade = ({ className, children, ...props }: BarChartFacadeProps) => {
    return (
        <RechartsBarChart
            className={className}
            {...props}
        >
            {children}
        </RechartsBarChart>
    );
};

export default BarChartFacade;
