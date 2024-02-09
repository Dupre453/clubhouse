"use client"
import React from 'react';

import styles from './EnterPhoneStep.module.scss'
import {WhiteBlock} from "../../whiteblock";
import {NumberFormatBase} from 'react-number-format';
import clsx from "clsx";
import {Button} from "../../button";
import {StepInfo} from "../../stepinfo/StepInfo";
import {MainContext} from "../../../app/page";

type InputValueState = {
    formattedValue: string;
    value: string;
}

const EnterPhoneStep = () => {

    const {onNextStep} = React.useContext(MainContext)

    const [values, setValues] = React.useState<InputValueState>({} as InputValueState)

    const nextDisabled = !values.formattedValue || values.formattedValue.includes('_')

    return (
        <div className={styles.block}>
            <StepInfo
                icon=''
                title='Enter your phone #'
                description='We will send you a confirmation code'
            />
            <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
                <div className={clsx('mb-30', styles.input)}>
                    <img src="" alt=""/>
                    <NumberFormatBase
                        className='field'
                        format='+# (###) ###-##-##'
                        mask='_'
                        placeholder='+7 (999) 333-22-11'
                        value={values.value}
                        onValueChange={({formattedValue, value}) => setValues({formattedValue, value})}
                    />
                </div>
                <Button disabled={nextDisabled} onClick={onNextStep}>
                    Next
                    <img className='d-ib ml-10' src="" alt=""/>
                </Button>
                <p className={clsx(styles.polycyText, 'mt-30')}>
                    By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
                </p>
            </WhiteBlock>
        </div>
    );
};

export default EnterPhoneStep;