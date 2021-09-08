import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { StyledTableCell } from './StyledTableCell'

export const TableHeadPersonalizedSmall = () => {
    const content =
        <TableHead>
            <TableRow>
                <StyledTableCell>Position</StyledTableCell>
                <StyledTableCell align="right">Country</StyledTableCell>
                <StyledTableCell align="right" >Total</StyledTableCell>
            </TableRow>
        </TableHead>

    return content
}