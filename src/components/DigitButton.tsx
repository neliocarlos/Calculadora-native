import { TouchableOpacity, View, Text } from "react-native";

type Props = {
    label: any;
    onClick?: () => void;
    style?: string;
};

const DigitButton = ({ label, onClick, style }: Props) => {
    return (
        <View>
            <TouchableOpacity className={`flex justify-center align-middle w-20 h-20 border mr-2 mb-2 border-slate-600 rounded-full ${style}`} onPress={onClick}>
                <Text className="text-center text-2xl">{label}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DigitButton;