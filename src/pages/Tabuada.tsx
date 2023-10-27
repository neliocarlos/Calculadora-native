import React, { useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState } from "react";
import InputMultiplier from '../components/InputMultiplier';
import { useNavigation } from '@react-navigation/native';

const Tabuada = () => {
    const [inputValue, setInputValue] = useState('');
    const navigation = useNavigation();

    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        console.log(inputValue) 
    }, [inputValue])
    

    return (
        <View className="bg-white">
            <View className="flex flex-col bg-white text-slate-600 gap-3">
                <Text className="px-3 pt-3 text-lg">Digite um valor numérico:</Text>
                    <TextInput
                        className="text-slate-600 bg-white w-full px-5 py-2 border-slate-600 border text-lg"
                        maxLength={15}
                        keyboardType='numeric'
                        value={inputValue}
                        onChange={(e) => handleChange(e)}
                        />

                <View className="flex flex-col justify-center items-center">
                    <Text className='text-lg'>TABUADA do {inputValue}</Text>
                    <InputMultiplier inputValue={inputValue} multiplier={1} />
                    <InputMultiplier inputValue={inputValue} multiplier={2} />
                    <InputMultiplier inputValue={inputValue} multiplier={3} />
                    <InputMultiplier inputValue={inputValue} multiplier={4} />
                    <InputMultiplier inputValue={inputValue} multiplier={5} />
                    <InputMultiplier inputValue={inputValue} multiplier={6} />
                    <InputMultiplier inputValue={inputValue} multiplier={7} />
                    <InputMultiplier inputValue={inputValue} multiplier={8} />
                    <InputMultiplier inputValue={inputValue} multiplier={9} />
                    <InputMultiplier inputValue={inputValue} multiplier={10} />
                </View>
            </View>
            <TouchableOpacity 
                className="flex justify-center items-center align-midle bg-slate-600 py-4 mt-10" 
                onPress={() => navigation.navigate('Calculadora' as never)} >
                <Text className="text-center text-white text-xl">Ir para Calculadora</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default Tabuada;