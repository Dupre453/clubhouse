import React from 'react';
import styles from './Room.module.scss'
import clsx from "clsx";
import Link from "next/link";
import {Button} from "../button";
import '../../public/tap-button-svgrepo-com.svg'

interface RoomProps {
    title: string
}


export  const Room: React.FC<RoomProps> = ({title}) => {
    return (
        <div className={styles.wrapper}>
            <div className='d-flex align-items-center justify-content-between'>
                <h2>{title}</h2>
                <div className={clsx('d-flex align-items-center', styles.actionButtons)}>
                    <Link href='/rooms'>
                        <Button color='gray'className={styles.leaveButton}>

                            <svg className={styles.emoji} width={28} height={28} id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                                <g id="color">
                                    <g id="salute">
                                        <path fill="#fcea2b" d="M38,13.7c-12.7025,0-23,10.2975-23,23s10.2975,23,23,23,23-10.2975,23-23c-.0018-12.7018-10.2982-22.9982-23-23Z"/>
                                        <path fill="#fcea2b" d="M10,34.3l6.6-6.3c1.7,1.3,2.6,.9,4.7,.8,2-.1,3.3-2.3,5.6-2.7,2.1-.4,3.3-1.5,2.6-2.8-.5036-.6877-1.3723-1.0036-2.2-.8-2.1,.5-4.7,1.4-6.5,1,0,0,7.8988-5.1721,13.6988-9.4721,.2209-.1343,.2911-.4222,.1569-.6431-.039-.0641-.0928-.1179-.1569-.1569-.8-.5-2.8988-1.1279-6.0988,.2721l-13,6.8s-5.2512,4.2515-8.1512,6.4515l-.9023,.7401,2.9785,6.8084h.675Z"/>
                                    </g>
                                </g>
                                <g id="line">
                                    <g id="line-2">
                                        <g id="line-3">
                                            <path fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2" d="M35.6,13.9c.7302-.0832,1.4652-.1166,2.2-.1,12.7025,0,23,10.2975,23,23s-10.2975,23-23,23-23-10.2975-23-23h0c.0076-2.3758,.3785-4.7364,1.1-7"/>
                                            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28.9,43.8l5.9,.5c2.0618,.2,4.1382,.2,6.2,0l6-.5"/>
                                            <path d="M31.9,31.8c0,1.6569-1.3431,3-3,3s-3-1.3431-3-3,1.3431-3,3-3h0c1.6549,.0047,2.9953,1.3451,3,3"/>
                                            <path d="M49.9,31.8c0,1.6569-1.3431,3-3,3s-3-1.3431-3-3,1.3431-3,3-3h0c1.627-.0298,2.9702,1.265,3,2.892,.0007,.036,.0007,.072,0,.108"/>
                                        </g>
                                        <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.3,34l7.3-5.9c1.7,1.3,1.8,1.1,3.9,1,2.5,0,4.2-2.7,7.1-3,2.7-.5,2.1-3.2,.4-3.4l-7.3,.9s8.6-5.5,14.4-9.9c0,0-1.0156-.9766-2.9004-1.2451-1.1309-.1611-2.5746-.0674-4.2996,.6451l-10.3,5.6c-1.9183,1.0122-3.7278,2.2185-5.4,3.6-2.3,1.8-4.2,3.3-6,4.7"/>
                                    </g>
                                </g>
                            </svg>


                            Leave quietly
                        </Button>
                    </Link>
                </div>
            </div>

            <div className='users'>
                {/*{isLoading && <div className = 'loader'></div>*/}
               {/* {users.map((obj) => (
                    <User {...obj} />
                ))}
*/}
            </div>
        </div>
    );
};

