import React, { useState, useEffect, createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import * as R from "ramda"

import { sortCountries } from '../../lib/country/sortCountries'
import { searchCountry } from '../../lib/country/searchCountry'
import { TableHeadPersonalized } from './TableHeadPersonalized'
import { TableBodyPersonalized } from './TableBodyPersonalized'
import { TableHeadPersonalizedSmall } from './TableHeadPersonalizedSmall'
import { TableBodyPersonalizedSmall } from './TableBodyPersonalizedSmall'
import { TableFotterPersonalized } from './TableFotterPersonalized'

import SearchCountry from '../SearchCountry'
import data from '../../lib/data/medalists.json';



const useStyles = makeStyles((theme) => ({
    root: { width: '60vw', backgroundColor: '#fff', borderRadius: "2%", minWidth: '200px' },
}));

export const ThemeContext = createContext();
export const SearchContext = createContext()

export default function CountryList() {
    const classes = useStyles();
    const mediaQuerySmall = useMediaQuery('(max-width:700px)');
    const [page, setPage] = useState(0);
    const [countries, setCountries] = useState([])
    const [type, setType] = useState('byTotal')
    const [searchText, setSearchText] = useState('')
    const rowsPerPage = 10

    useEffect(() => {
        setCountries(sortCountries(data, type))
    }, [type])
    useEffect(() => {
        setType('byTotal')
    }, [])

    const searchResult = searchCountry(R.toUpper(searchText), countries)

    const contextValueTheme = { page, setPage, rowsPerPage, countries, searchResult }
    const contextValueSearch = { searchText, setSearchText }
    if (mediaQuerySmall) {
        return (
            <SearchContext.Provider value={contextValueSearch}>
                <Box><SearchCountry /></Box>
                <TableContainer component={Paper} className={classes.root}>
                    <Table aria-label="customized table">
                        <TableHeadPersonalizedSmall />
                        <ThemeContext.Provider value={contextValueTheme}>
                            <TableBodyPersonalizedSmall />
                            <TableFotterPersonalized />
                        </ThemeContext.Provider>
                    </Table>
                </TableContainer>
            </SearchContext.Provider>
        );

    }
    return (
        <SearchContext.Provider value={contextValueSearch}>
            <Box><SearchCountry /></Box>
            <TableContainer component={Paper} className={classes.root}>
                <Table aria-label="customized table">
                    <TableHeadPersonalized setType={setType} />
                    <ThemeContext.Provider value={contextValueTheme}>
                        <TableBodyPersonalized />
                        <TableFotterPersonalized />
                    </ThemeContext.Provider>
                </Table>
            </TableContainer>
        </SearchContext.Provider>
    );
}