import {
    BarChartFacade,
    BarFacade,
    XAxisFacade,
    YAxisFacade,
    CartesianGridFacade,
    ResponsiveContainerFacade,
} from "./facades";
import millify from "millify";
import styles from "./IncomeAnalysis.module.sass";
import Analysis from "@/components2/usefull/Analysis";

type IncomeAnalysisType = {
    name: string;
    value: number;
};

type IncomeAnalysisProps = {
    items: IncomeAnalysisType[];
    expense?: string;
    row?: boolean;
};

const IncomeAnalysis = ({ items, expense, row }: IncomeAnalysisProps) => {
    const formatterYAxis = (value: number) => {
        if (value === 0) {
            return "";
        }
        return `${millify(value)}`;
    };

    return (
        <Analysis
            title="Income Analysis"
            tooltip="Small description"
            price="$8,527,224"
            percent={3.1}
            expense={expense}
            row={row}
        >
            <div className={styles.chart}>
                <ResponsiveContainerFacade width="100%" height="100%">
                    <BarChartFacade
                        width={500}
                        height={300}
                        data={items}
                        barSize={20}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGridFacade strokeDasharray="3 3" stroke="#DCE4E8" />
                        <XAxisFacade
                            dataKey="name"
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fontSize: 12,
                                fontWeight: "400",
                                fill: "#ACB5BB",
                            }}
                        />
                        <YAxisFacade
                            tickFormatter={formatterYAxis}
                            type="number"
                            tickLine={false}
                            axisLine={false}
                            tick={{
                                fontSize: 12,
                                fontWeight: "400",
                                fill: "#ACB5BB",
                            }}
                        />
                        <BarFacade dataKey="value" fill="#E7854D" />
                    </BarChartFacade>
                </ResponsiveContainerFacade>
            </div>
        </Analysis>
    );
};

export default IncomeAnalysis;
