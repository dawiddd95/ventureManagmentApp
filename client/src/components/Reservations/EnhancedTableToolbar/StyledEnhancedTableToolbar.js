import { lighten, makeStyles } from '@material-ui/core/styles';

const useToolbarStyles = makeStyles(theme => ({
	
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
	},
	highlight: {
		backgroundColor: '#FF4D4F',
		color: 'white',
		'& .MuiButtonBase-root': {
			color: 'white',
		},
	},
	spacer: {
		flex: '1 1 100%',
	},
	actions: {
		color: theme.palette.text.secondary,
	},
	title: {
		flex: '0 0 auto',
	},
}));

export default useToolbarStyles;