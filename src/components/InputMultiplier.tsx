import React from 'react'
import { View, Text } from 'react-native'

type Props = {
    multiplier: number;
    inputValue: string;
}

const InputMultiplier = ({inputValue, multiplier}: Props) => {
    const convertedInputValue = parseFloat(inputValue)
  return (
    <View>
        <Text className='text-lg'>
            {multiplier} x {inputValue} = {convertedInputValue * multiplier}
        </Text>
    </View>
  )
}

export default InputMultiplier