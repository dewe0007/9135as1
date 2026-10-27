import { View, Text } from 'react-native';
import styles, { colors } from '../theme/styles';

export default function EmptyList() {
	return (
		<View style={styles.container}>
			<Text>no items for you!</Text>
		</View>
	);
}
