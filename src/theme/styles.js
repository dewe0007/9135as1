import { StyleSheet } from 'react-native';

const colors = {
	text: 'hsl(297, 100%, 7%)',
	background: 'hsl(228, 97%, 86%)',
	primary: 'hsl(196, 96%, 51%)',
	secondary: 'hsl(297, 100%, 7%)',
	accent: 'hsl(264, 100%, 38%)',
};

const styles = StyleSheet.create({
	container: {
		padding: 12,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default styles;
export { colors };
