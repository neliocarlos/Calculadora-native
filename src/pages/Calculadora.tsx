
import { useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View, Text} from "react-native";
import DigitButton from "../components/DigitButton";
import { TabRouterOptions, useNavigation } from "@react-navigation/native";

export default function Calculadora() {
    const [inputValue, setInputValue] = useState("");
    const [secondInputValue, setSecondInputValue] = useState("");
    const [operation, setOperation] = useState("");
    const navigation = useNavigation();

    const handleInputValue = (value) => {
        setInputValue(inputValue + value);
    };

    const handleComma = (value) => {
        const comma = inputValue.split("");
        const hasComma = comma.filter((char) => {
            return char === value;
        });
        hasComma[0] == "." ? null : setInputValue(inputValue + value);
    };

    const handleEraseDigit = () => {
        const value = inputValue.split("");
        value.pop();
        const correctedValue = value.join("");
        setInputValue(correctedValue);
    };

    const handleMathOperation = (value) => {
        setOperation(value);
        setSecondInputValue(inputValue);
        setInputValue("");
    };

    const handleReset = () => {
        setInputValue("");
        setSecondInputValue("");
        setOperation("");
    };

    const handleResult = () => {
        const firstValue = parseFloat(secondInputValue);
        const secondValue = parseFloat(inputValue);
        operation == "+"
            ? setInputValue((firstValue + secondValue).toString())
            : operation == "-"
            ? setInputValue((firstValue - secondValue).toString())
            : operation == "x"
            ? setInputValue((firstValue * secondValue).toString())
            : operation == "/"
            ? setInputValue((firstValue / secondValue).toString())
            : operation == "%"
            ? setInputValue(((firstValue / 100) * secondValue).toString())
            : operation == "^"
            ? setInputValue((firstValue ** secondValue).toString())
            : null;
        setSecondInputValue("");
    };

    useEffect(() => {
        console.log(operation);
    }, [operation]);

    return (
        <View className="flex-1 flex-col justify-center align-middle bg-white text-slate-600">
            <TextInput
                className="h-8 p-2 text-md border-b border-slate-400"
                value={secondInputValue}
            />
            <View className="flex flex-row">
                <TextInput
                    className="h-14 p-4 text-xl border-b w-5/6 border-slate-400"
                    value={inputValue}
                />
                <TextInput
                    className="h-14 w-full p-4 text-xl border-b flex justify-center border-slate-400"
                    value={operation}
                />
            </View>
            <View className="flex flex-col justify-center items-center py-6">
                <View className="flex flex-row">
                    <DigitButton label="AC" onClick={() => handleReset()} style="bg-red-300" />
                    <DigitButton
                        label="%"
                        style="bg-blue-300"
                        onClick={() => handleMathOperation("%")}
                    />
                    <DigitButton
                        label="^"
                        style="bg-blue-300"
                        onClick={() => handleMathOperation("^")}
                    />
                    <DigitButton
                        label="/"
                        style="bg-blue-300"
                        onClick={() => handleMathOperation("/")}
                    />
                </View>
                <View className="flex flex-row">
                    <DigitButton label="7" style="bg-slate-300" onClick={() => handleInputValue("7")} />
                    <DigitButton label="8" style="bg-slate-300" onClick={() => handleInputValue("8")} />
                    <DigitButton label="9" style="bg-slate-300" onClick={() => handleInputValue("9")} />
                    <DigitButton
                        label="x"
                        style="bg-blue-300"
                        onClick={() => handleMathOperation("x")}
                    />
                </View>
                <View className="flex flex-row">
                    <DigitButton label="4" style="bg-slate-300" onClick={() => handleInputValue("4")} />
                    <DigitButton label="5" style="bg-slate-300" onClick={() => handleInputValue("5")} />
                    <DigitButton label="6" style="bg-slate-300" onClick={() => handleInputValue("6")} />
                    <DigitButton
                        label="-"
                        style="bg-blue-300"
                        onClick={() => handleMathOperation("-")}
                    />
                </View>
                <View className="flex flex-row">
                    <DigitButton label="1" style="bg-slate-300" onClick={() => handleInputValue("1")} />
                    <DigitButton label="2" style="bg-slate-300" onClick={() => handleInputValue("2")} />
                    <DigitButton label="3" style="bg-slate-300" onClick={() => handleInputValue("3")} />
                    <DigitButton
                        label="+"
                        style="bg-blue-300"
                        onClick={() => handleMathOperation("+")}
                    />
                </View>
                <View className="flex flex-row">
                    <DigitButton label="0" style="bg-slate-300" onClick={() => handleInputValue("0")} />
                    <DigitButton label="." style="bg-slate-300" onClick={() => handleComma(".")} />
                    <DigitButton
                        label="<<"
                        style="bg-red-300"
                        onClick={() => handleEraseDigit()}
                    />
                    <DigitButton
                        label="="
                        style="bg-green-300"
                        onClick={() => handleResult()}
                    />
                </View>
            </View>
            <TouchableOpacity 
                className="flex justify-center align-middle border py-4 border-slate-600" 
                onPress={() => navigation.navigate('Tabuada' as never)} >
                <Text className="text-center text-xl">Ir para Tabuada</Text>
            </TouchableOpacity>
        </View>
    );
}