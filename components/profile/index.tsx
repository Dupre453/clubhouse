import React from "react";
import {Avatar} from "../avatar";
import {Button} from "../button";
import styles from './Profile.module.scss'
import clsx from "clsx";
import Link from "next/link";
import {BackButton} from "../BackButton";


interface ProfileProps {
    fullname: string
    username: string
    avatarUrl: string
    about: string
}

export const Profile: React.FC<ProfileProps> = ({fullname, username,avatarUrl,about}) => {
return(
    <div>
       <Link href='/rooms'>
         <BackButton title='Back' href='/rooms'/>
       </Link>
        <div className='d-flex align-items-center'>
            <div className='d-flex align-items-center'>
                <Avatar
                    className='br-30'
                    src='https://img.freepik.com/premium-photo/watercolor-of-colorpoint-shorthair-cat-with-a-cloche-hat-velvet-dress-teal-patrick-day-clipart_655090-1075639.jpg?w=826'
                    width='100px' height='100px'/>
                <div className='d-flex flex-column ml-30 mr-30'>
                    <h2 className='mt-0 mb-0'>{fullname}</h2>
                    <h3 className={clsx('mt-0 mb-0', styles.username)}>{username}</h3>
                </div>
            </div>
            <Button className={styles.followBtn} color='blue'>
                Follow
            </Button>
        </div>
        <p className={styles.block}> {about}</p>
    </div>

)
}