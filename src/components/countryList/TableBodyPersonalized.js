import TableBody from '@material-ui/core/TableBody';
import * as R from 'ramda';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StyledTableRow } from './StyledTableRow'
import { StyledTableCell } from './StyledTableCell'
import { ThemeContext, SearchContext } from '.';

const rows = (data) => {
    function createData(country, gold, silver, bronze, total) {
        return { country, gold, silver, bronze, total };
    }
    const result = R.map((item) => {
        return createData(item.country, item.gold, item.silver, item.bronze, item.total)
    }, data)

    return result
};

export const TableBodyPersonalized = () => {
    const { page, rowsPerPage, countries, searchResult } = useContext(ThemeContext)
    const { searchText } = useContext(SearchContext)
    const position = (row) => R.inc(R.indexOf(row, rows(countries)))
    if (searchText !== '') return (
        <TableBody>
            {rows(searchResult).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <StyledTableRow key={row.country}>
                    <StyledTableCell>{position(row)}</StyledTableCell>
                    <StyledTableCell align="right">{row.country}</StyledTableCell>
                    <StyledTableCell align="right">{row.gold}</StyledTableCell>
                    <StyledTableCell align="right">{row.silver}</StyledTableCell>
                    <StyledTableCell align="right">{row.bronze}</StyledTableCell>
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
                        <StyledTableCell align="right"><Link to={`/${row.country}`}> {row.country}</Link></StyledTableCell>
                        <StyledTableCell align="right">{row.gold}</StyledTableCell>
                        <StyledTableCell align="right">{row.silver}</StyledTableCell>
                        <StyledTableCell align="right">{row.bronze}</StyledTableCell>
                        <StyledTableCell align="right">{row.total}</StyledTableCell>
                    </StyledTableRow>
            ))}
        </TableBody>)
}