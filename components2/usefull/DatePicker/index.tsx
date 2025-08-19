import DatePicker from "react-datepicker";
import cn from "clsx";
import styles from "./DatePicker.module.sass";
import Icon from "@/components2/usefull/Icon";

type DateChoiceProps = {
    className?: string;
    label?: string;
    selected?: Date | null;
    selectsRange?: true;
    startDate?: Date | null;
    endDate?: Date | null;
    onChange: (date: Date | [Date | null, Date | null] | null, event: React.SyntheticEvent<Element> | undefined) => void;
    placeholderText?: string;
    dateFormat?: string;
    medium?: boolean;
    icon?: boolean;
    props?: Record<string, unknown>;
};

const DateChoice = ({
    className,
    label,
    selected,
    selectsRange,
    startDate,
    endDate,
    onChange,
    placeholderText,
    dateFormat,
    medium,
    icon,
}: DateChoiceProps) => (
    <div
        className={cn(
            styles.date,
            { [styles.dateIcon]: icon, [styles.dateMedium]: medium },
            className
        )}
    >
        {label && <div className={styles.label}>{label}</div>}
        <div className={styles.wrap}>
            {/* <DatePicker
                dateFormat={dateFormat}
                selected={selected}
                selectsRange={selectsRange}
                startDate={startDate}
                endDate={endDate}
                onChange={onChange}
                placeholderText={placeholderText}
                selectsMultiple={undefined}
            /> */}
            {icon && <Icon name="calendar" />}
        </div>
    </div>
);

export default DateChoice;
