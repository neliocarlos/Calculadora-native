
import 'react-native-gesture-handler';
import Calculadora from './src/pages/Calculadora';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabuada from './src/pages/Tabuada';

const Stack = createStackNavigator();

export default function App() {
  return (  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Calculadora' component={Calculadora} />
        <Stack.Screen name='Tabuada' component={Tabuada} />
      </Stack.Navigator>
    </NavigationContainer>
      // <Calculadora />
  );
}

