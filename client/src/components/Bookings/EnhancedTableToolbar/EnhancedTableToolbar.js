import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import useToolbarStyles from './StyledEnhancedTableToolbar';

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
		<Toolbar
			className={clsx(classes.root, {
			[classes.highlight]: numSelected > 0,
			})}
		>
			<div className={classes.title}>
			{numSelected > 0 
				? (
					<Typography color="inherit" variant="subtitle1">
						{numSelected} selected
					</Typography>
					) 
				: <div sttyle={{'fontSize': '16px'}}>Bookings List</div>
			}
			</div>
			<div className={classes.spacer} />
			<div className={classes.actions}>
			{numSelected > 0 
				? (
					<Tooltip title="Delete">
						<IconButton aria-label="delete">
							<DeleteIcon />
						</IconButton>
					</Tooltip>
					)
				: null
			}
			</div>
		</Toolbar>
	);
};

export default EnhancedTableToolbar;