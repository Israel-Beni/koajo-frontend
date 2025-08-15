"use client";
import { useState } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import cn from "clsx";
import styles from "./Notifications.module.sass";
import Icon from "@/components2/usefull/Icon";
import Notification from "@/components2/usefull/Notification";

import { NotificationsType } from "@/types/index";

type NotificationsProps = {
    items: NotificationsType[];
};

const Notifications = ({ items }: NotificationsProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div
                className={cn(styles.notifications, {
                    [styles.active]: visible,
                })}
            >
                <button
                    className={styles.button}
                    onClick={() => setVisible(!visible)}
                >
                    <Icon name="notification" />
                </button>
                <div className={styles.body}>
                    <div className={styles.title}>Notification</div>
                    <div className={styles.list}>
                        {items.slice(0, 4).map((notification) => (
                            <Notification
                                item={notification}
                                key={notification.id}
                            />
                        ))}
                    </div>
                    <Link
                        className="button-stroke button-wide"
                        href="/dashboard/notification"
                    >
                        See more Notification
                    </Link>
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default Notifications;
