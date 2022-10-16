import React from 'react'
import { styled } from 'nativewind'
import { Text } from 'react-native'

const ButtonNum = styled(Text);

const ButtonNumber = ({ BtnNum, DopStyles, click }) => {
    return (
        <ButtonNum onPress={click} className={`text-center text-black text-3xl py-8 w-1/4 bg-white ${DopStyles}`}>{BtnNum}</ButtonNum>
    )
}

export default ButtonNumber