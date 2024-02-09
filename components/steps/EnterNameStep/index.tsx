import React from 'react';
import {WhiteBlock} from "../../whiteblock";
import clsx from "clsx";
import {Button} from "../../button";
import styles from './EnterNameStep.module.scss'
import {StepInfo} from "../../stepinfo/StepInfo";
import {MainContext} from "../../../app/page";


 export const EnterNameStep = () => {
    const [inputValue, setInputValue] = React.useState<string>('')
    const { onNextStep } = React.useContext(MainContext)

    const onClickNextStep = () => {
        onNextStep()
}
    const nextDisabled = !inputValue

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    return (
        <div className={styles.block}>
            <StepInfo
            icon=''
            title='What’s your full name?'
            description='People use real names on Clubhouse :) Thnx!'
            />
            <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
                <div className='mb-30'>
                    <input
                        onChange={handleChangeInput}
                        value={inputValue}
                        className='field'
                        placeholder='Enter fullname'/>
                </div>
                <Button disabled={nextDisabled} onClick={onClickNextStep}>
                    Next
                    <img className='d-ib ml1-10' src="" alt=""/>
                </Button>
            </WhiteBlock>
        </div>
    );
};

