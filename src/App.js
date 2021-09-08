import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import CountryList from './components/countryList/index'
import { CountryPodium } from './components/CountryPodium'

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: "#4169e1",
    backgroundImage:`url(/tokioBackground.jpg)`,
  },
  containerGrid: {
    width: '100%',
  },
  containerItemGrid: {
    width: '60vw',
  },
}));

export default function App() {
  const classes = useStyles();


  return (
    <Box className = {classes.root}>
      <Grid container spacing={4} justifyContent="center" alignItems="center" direction="column">
        <Grid item className={classes.containerItemGrid}><CountryPodium /></Grid>
        <Grid item className={classes.containerItemGrid}><CountryList /> </Grid>
      </Grid >
    </Box>
  )
}
