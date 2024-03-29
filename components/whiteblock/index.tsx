import React from 'react';
import clsx from "clsx";
import styles from './WhiteBlock.scss'


export const WhiteBlock = ({children, className}) => {
    return <div className={clsx(styles.block, className)}>{children}</div>

};

