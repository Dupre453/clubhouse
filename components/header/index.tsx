


import styles from './Header.module.scss'
import clsx from "clsx";
import {Avatar} from "../avatar";
import React from "react";
import Link from "next/link";


export const Header: React.FC = () => {
    return(

            <div className={styles.header}>
                <div className='container d-flex align-items-center justify-content-between'>
                <Link href='/'>
                    <div className={clsx('d-flex align-items-center cup', styles.headerLogo)}>
                        <img src="" alt=""/>
                        <h4>Clubhouse</h4>
                    </div>
                </Link>
                    <Link href='/profile/id'>
                        <div className='d-flex align-items-center cup'>
                            <b className='mr-5 '>Seraphine Dupre</b>
                            <Avatar
                                className={styles.avatar}
                                src='https://img.freepik.com/premium-photo/watercolor-of-colorpoint-shorthair-cat-with-a-cloche-hat-velvet-dress-teal-patrick-day-clipart_655090-1075639.jpg?w=826'
                                width='50px'
                                height='50px'
                                color='#f3efe4'
                            />
                        </div>
                    </Link>
                </div>
            </div>
    )
}