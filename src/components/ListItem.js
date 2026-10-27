import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useData } from '../context/ContextProvider';
import styles, { colors } from '../theme/styles';

export default function ListItem({ index, item }) {
	return (
		<View style={styles.listitem}>
			<View style={[styles.listitem_row, { flex: 4 }]}>
				<Avatar.Image source={{ uri: `${item.avatar}` }} />
			</View>
			<View>
				<Text style={styles.text}>{item.firstName}</Text>
				<Text style={styles.text}>{item.lastName}</Text>
			</View>
		</View>
	);
}
