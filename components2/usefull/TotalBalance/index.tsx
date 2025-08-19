"use client"
import { useState } from "react";
import cn from "clsx";
import styles from "./TotalBalance.module.sass";
import Card from "@/components2/usefull/Card";
import Icon from "@/components2/usefull/Icon";
import Transfer from "@/components2/usefull/Transfer";
import Receive from "@/components2/usefull/Receive";
import Select from "@/components2/usefull/Select";
import {Button} from "@/components/utils";

const cards = [
    {
        title: "#94044940",
        value: "94044940",
    },
    {
        title: "#42344234",
        value: "42344234",
    },
    {
        title: "#12311231",
        value: "12311231",
    },
    {
        title: "#56435643",
        value: "56435643",
    },
];

type TotalBalanceProps = {
    percent?: number;
};

const TotalBalance = ({ percent }: TotalBalanceProps) => {
    const [card, setCard] = useState<string>(cards[0].value);

    const handleChange = (value: string) => setCard(value);

    return (
        <Card
            title="Current Pod"
            tooltip="The pod your are currently viewing"
            right={
                <Select
                    className={styles.select}
                    titlePrefix="ID:"
                    value={card}
                    onChange={handleChange}
                    options={cards}
                    small
                />
            }
        >
            <div className={cn(styles.price, "text-transparent bg-clip-text bg-[image:linear-gradient(107deg,#FD8B51_-2.13%,_#469DA3_49.87%,_#FD8B51_94.01%)]")}>
                $100 Pod
            </div>
            <Button
              text="Join More Pods"
              className="w-full"
            />
            {/* {percent && (
                <div className={styles.line}>
                    <div
                        className={cn(
                            styles.indicator,
                            percent < 0 && styles.negative
                        )}
                    >
                        <Icon name="arrow-thick-right" size="12" />
                        {percent > 0 ? `+${percent}` : percent}%
                    </div>
                    Increate this Month
                </div>
            )} */}
            {/* <div className={styles.btns}>
                <Transfer className={styles.button} />
                <Receive className={styles.button} />
            </div> */}
        </Card>
    );
};

export default TotalBalance;
