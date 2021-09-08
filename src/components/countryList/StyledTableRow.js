import { withStyles } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';

export const StyledTableRow = withStyles((theme) => ({
    root: {
      widht:'60vw',
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);