import { lighten, makeStyles } from '@material-ui/core/styles';

const useToolbarStyles = makeStyles(theme => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
		backgroundColor: '#F9F9F9'
	},
	highlight:
		theme.palette.type === 'light'
			? {
				color: theme.palette.secondary.main,
				backgroundColor: lighten(theme.palette.secondary.light, 0.85),
			}
			: {
				color: theme.palette.text.primary,
				backgroundColor: theme.palette.secondary.dark,
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