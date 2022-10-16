import React from 'react'
import { styled } from 'nativewind'
import { Text } from 'react-native'

const ButtonOpEl = styled(Text);

const ButtonOp = ({ op, DopStyles, click }) => {
    return (
        <ButtonOpEl onPress={click} className={`text-center text-white text-3xl py-8 w-1/4 bg-green-500 ${DopStyles}`} >
            {op}
        </ButtonOpEl>
    )
}

export default ButtonOp