import React, { useContext } from 'react';
import { FormControl, Input, InputAdornment, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { SearchContext } from './countryList';


const useStyles = makeStyles((theme) => ({
  margin: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    width:'20vw',
    borderRadius: '2%',
    backgroundColor: '#fff',
    [theme.breakpoints.down('sm')]: {
      width:'45vw',
    },
  },
}));

export default function SearchCountry() {
  const classes = useStyles();
  const { searchText, setSearchText } = useContext(SearchContext)

  return (
    <FormControl className={classes.margin}>
      <Input
        label
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        id="input-with-icon-search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
