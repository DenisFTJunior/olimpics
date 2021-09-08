import {
    useParams,
} from "react-router-dom";
import * as R from "ramda"

import data from '../../lib/data/medalists.json';
import {countryAthletes} from '../../lib/country/countryAthletes'
import AthleteCard from './AthleteCard'
import { Box, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(3),
    },
  }));
  

export default function CountryAthletes(){
    const classes = useStyles()
    const { country } = useParams();
    // eslint-disable-next-line
    const athletes = countryAthletes(data,country)
    const content = R.map(athlete => <Grid item><AthleteCard athlete = {athlete}/></Grid>,athletes)
    return (
    <Box className = {classes.root}>
        <Grid container justifyContent ='center' alignItems ='center' spacing = {3} >
            {content}
        </Grid>
    </Box>)
}