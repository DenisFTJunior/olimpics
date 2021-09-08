import TableBody from '@material-ui/core/TableBody';
import * as R from 'ramda';

import { StyledTableRow } from './StyledTableRow'
import { StyledTableCell } from './StyledTableCell'
import { ThemeContext, SearchContext } from '.';
import { useContext } from 'react';

const rows = (data) => {
    function createData(country, gold, silver, bronze, total) {
        return { country, gold, silver, bronze, total };
    }
    const result = R.map((item) => {
        return createData(item.country, item.gold, item.silver, item.bronze, item.total)
    }, data)

    return result
};

export const TableBodyPersonalizedSmall = () => {
    const { page, rowsPerPage, countries, searchResult } = useContext(ThemeContext)
    const { searchText } = useContext(SearchContext)
    const position = (row) =>  R.inc(R.indexOf(row, rows(countries)))

    if (searchText !== '') return (
        <TableBody>
            {rows(searchResult).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <StyledTableRow key={row.country}>
                    <StyledTableCell>{position(row)}</StyledTableCell>
                    <StyledTableCell align="right">{row.country}</StyledTableCell>
                    <StyledTableCell align="right">{row.total}</StyledTableCell>
                </StyledTableRow>
            ))}
        </TableBody>)

    // return content
    return (
        <TableBody>
            {rows(countries).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <StyledTableRow key={row.country}>
                    <StyledTableCell>{position(row)}</StyledTableCell>
                    <StyledTableCell align="right">{row.country}</StyledTableCell>
                    <StyledTableCell align="right">{row.total}</StyledTableCell>
                </StyledTableRow>
            ))}
        </TableBody>)
}