import { StyleSheet } from 'react-native';

const colors = {
	text: 'hsl(297, 100%, 7%)',
	background: 'hsl(228, 97%, 86%)',
	primary: 'hsl(196, 96%, 51%)',
	secondary: 'hsl(297, 100%, 7%)',
	accent: 'hsl(264, 100%, 38%)',
	grey: 'hsl(196, 0%, 30%)',
};

const styles = StyleSheet.create({
	container: {
		padding: 12,
		flex: 1,
		alignItems: 'center',
	},
	title: {
		padding: 40,
		fontSize: 35,
		fontWeight: 900,
		color: colors.text,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},
	text: {
		fontSize: 20,
		color: colors.text,
		paddingInline: 10,
		fontWeight: 500,
		textAlign: 'center',
	},
	copyright: {
		fontSize: 20,
		color: colors.grey,
		position: 'bottom',
	},
	screen: {
		backgroundColor: colors.primary,
		flex: 1,
		justifyContent: 'start',
		alignItems: 'center',
	},
	homeContent: {
		flex: 1,
		alignItems: 'center',
	},
	homeScreen: {
		paddingTop: 120,
		paddingBottom: 12,
		paddingInline: 24,
		flex: 1,
		justifyContent: 'space-between',
	},
	flatlist: {
		width: '100%',
		flex: 1,
	},
	listitem: {
		width: '100%',
		padding: 8,
		borderBottomWidth: 1,
		borderBottomColor: colors.secondary,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'start',
	},
	listitem_title: {
		fontSize: 24,
	},
	listitem_description: {
		color: colors.text,
		fontSize: 16,
	},
	listitem_col: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	listitem_row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'start',
		gap: 10,
	},
	image: {
		width: 250,
		height: 250,
		marginBottom: 10,
		marginTop: 20,
		borderRadius: 12,
	},
	imageThumb: {
		width: 50,
		height: 50,
		marginBottom: 10,
		borderRadius: 12,
	},
	tabBar: {
		marginTop: 10,
	},
	button: {
		backgroundColor: colors.accent,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
		height: 52,
	},
	buttonText: {
		color: colors.lightPink,
		textAlign: 'center',
		fontSize: 15,
	},
});

export default styles;
export { colors };
