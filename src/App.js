import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './screens/ListScreen';
import { colors } from './theme/styles';
import { Provider as PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DataProvider } from './context/ContextProvider';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<PaperProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<SafeAreaProvider>
					<DataProvider>
						<NavigationContainer>
							<Stack.Navigator>
								<Stack.Screen name='List' component={ListScreen} />
							</Stack.Navigator>
						</NavigationContainer>
					</DataProvider>
				</SafeAreaProvider>
			</GestureHandlerRootView>
		</PaperProvider>
	);
}
