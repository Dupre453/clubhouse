import React from 'react';
import styles from './Avatar.module.scss'
import clsx from "clsx";

interface AvatarProps {
    src: string;
    width: string;
    height: string;
    className?: string;
    isVoice?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({src, width, height, className, isVoice}) => {
    return (
        <div style ={{width, height, backgroundImage: `url(${src}`}}
        className={clsx(styles.avatar, isVoice ? styles.avatarBorder : '', className)}>

        </div>
    );
};

