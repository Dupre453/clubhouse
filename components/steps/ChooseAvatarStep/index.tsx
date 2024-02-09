
import styles from './ChooseAvatarStep.module.scss'

import React from 'react';
import {WhiteBlock} from "../../whiteblock";
import clsx from "clsx";
import {Button} from "../../button";
import {Avatar} from '../../avatar'
import {StepInfo} from "../../stepinfo/StepInfo";
import {MainContext} from "../../../app/page";


export const ChooseAvatarStep: React.FC = () => {

    const {onNextStep} = React.useContext(MainContext)

    const [avatarUrl, setAvatarUrl] = React.useState<string>('https://i.pinimg.com/564x/52/35/db/5235db9f01751e8665d600ae6ce64a7f.jpg')
    const inputFileRef = React.useRef<HTMLInputElement>(null)

    const handleChangeImage = (event: Event): void => {
        const [file] = (event.target as HTMLInputElement).files[0]
        if(file) {
            const imageUrl = URL.createObjectURL(file)
            setAvatarUrl(imageUrl)
        }
     }

     React.useEffect(() => {
         if( inputFileRef.current) {
             inputFileRef.current.addEventListener('change', handleChangeImage)
         }
     }, [])


     return (
         <>
             <div className={styles.block}>
                <StepInfo
                     icon=''
                     title='Okay, Seraphine Dupre!'
                     description='How’s this photo?'
                 />
                 <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
                     <div className={styles.avatar}>
                        <Avatar
                            width='120px'
                            height='120px'
                            src={avatarUrl}/>
                     </div>
                     <div className='mb-30'>
                         <label className='link cup' htmlFor="image">
                             Choose a different photo
                         </label>
                     </div>
                     <input id='image' ref={inputFileRef} type="file" hidden />
                     <Button onClick={onNextStep}>
                         Next
                         <img className='d-ib ml-10' src="" alt=""/>
                     </Button>
                 </WhiteBlock>
             </div>
         </>
     );
};
