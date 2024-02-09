import React from 'react';
import clsx from "clsx";

import styles from './ConversationCard.module.scss'
import {Avatar} from "../avatar";
import WhiteBlockStyles from "../whiteBlockStyles/WhiteBlockStyles.module.scss";


interface ConversationCard {
    title: string,
    guests: string[],
    avatars: string[],
    guestsCount: number,
    speakersCount: number
}


export const ConversationCard: React.FC<ConversationCard> = ({
                                                                 title,
                                                                 guests = [],
                                                                 avatars = [],
                                                                 guestsCount,
                                                                 speakersCount
                                                             }) => {
    return (
        <div className={clsx('mb-30', WhiteBlockStyles.block, styles.card)}>
            <h4 className={styles.title}>{title}</h4>
            <div className={clsx('d-flex mt-10', styles.content)}>
                <div className={styles.avatar}>
                    {avatars.map((url, i) => (
                        <Avatar
                            key={url}
                            src={url}
                            className={ avatars.lenght > 1 && i === avatars.length - 1 ? 'lastAvatar' : ''}
                            width='55px'
                            height='55px'
                        />
                    ))}
                </div>
                <div className={clsx(styles.info, 'ml-10')}>
                    <ul className={styles.users}>
                        {guests.map((name, i) => (
                            <li
                                key={name + i}>
                                {name}
                                <svg className='ml-5' alt='Cloud' width="15px" height="15px" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 12H8.01M12 12H12.01M16 12H16.01M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
                                        stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"/>
                                </svg>
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.details}>
                        <li className={styles.block}>
                            {guestsCount}
                            <svg className='mr-15 cup'  width="22px" height="22px"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </li>
                        <li>
                            {speakersCount}

                            <svg className='cup'  width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 11H8.01M12 11H12.01M16 11H16.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

