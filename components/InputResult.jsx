import React from 'react'
import { styled } from 'nativewind'
import { Text } from 'react-native'

const TextResult = styled(Text);

const InputResult = ({ text }) => {
    return (
        <TextResult className="text-black text-5xl px-4">{text}</TextResult>
    )
}

export default InputResult