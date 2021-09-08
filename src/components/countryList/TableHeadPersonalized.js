import { Button } from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { StyledTableCell } from './StyledTableCell'

export const TableHeadPersonalized = ({ setType }) => {
    const content =
        <TableHead>
            <TableRow>
                <StyledTableCell>Position</StyledTableCell>
                <StyledTableCell align="right">Country</StyledTableCell>
                <StyledTableCell align="right"><Button onClick={() => setType('byGold')}>Gold</Button></StyledTableCell>
                <StyledTableCell align="right"><Button onClick={() => setType('bySilver')} >Silver</Button></StyledTableCell>
                <StyledTableCell align="right"><Button onClick={() => setType('byBronze')}>Bronze</Button></StyledTableCell>
                <StyledTableCell align="right"><Button onClick={() => setType('byTotal')}>Total</Button></StyledTableCell>
            </TableRow>
        </TableHead>

    return content
}