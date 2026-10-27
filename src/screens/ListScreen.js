import { View, FlatList } from 'react-native';
import styles from '../theme/styles.js';
import { useData } from '../context/ContextProvider.js';
import ListItem from '../components/ListItem';
import EmptyList from '../components/EmptyList';

export default function ListScreen() {
	const { data } = useData();

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				ListEmptyComponent={EmptyList}
				renderItem={({ item, index }) => <ListItem item={item} index={index} />}
				keyExtractor={(item) => item.uuid}
				style={styles.flatlist}
			/>
		</View>
	);
}
