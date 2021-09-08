import { withStyles } from "@material-ui/core";
import TableCell from '@material-ui/core/TableCell';

export const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.blue,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 16,
      width:'10vw',
      [theme.breakpoints.down('sm')]: {
        fontSize: 12,
      },
      
    },
  }))(TableCell);