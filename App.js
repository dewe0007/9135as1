import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { SymbolView } from 'expo-symbols';
import { View } from 'react-native';
import ListScreen from './screens/ListScreen';
// import ListStack from './components/ListStack';
import styles from './theme/styles';

export default function App() {
	return (
		<NavigationContainer>
			<View style={styles.container}>
				<ListScreen />
			</View>
		</NavigationContainer>
	);
}
