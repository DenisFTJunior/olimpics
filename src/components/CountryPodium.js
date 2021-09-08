import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '60vw',
    height: '20vw',
    backgroundColor: '#f5f5f5',
    borderRadius: "2%",
    marginTop: '3vw',
    minWidth:'200px',
  },
  avatarContainer: {
    width: '60vw',
    position: 'absolute',
  },
  eua: {
    width: "7vw",
    height: "7vw",
    position: 'relative',
    top: '-3vw',
    left: '26.5vw'
  },
  russia: {
    width: "7vw",
    height: "7vw",
    position: 'relative',
    top: '-6vw',
    left: '14.5vw'
  },
  jamaica: {
    width: "7vw",
    height: "7vw",
    position: 'relative',
    top: '-12vw',
    left: '38vw'
  },
  imageContainer: {
    width: '45vw',
    },
    img:{
      width: '45vw',
    }
}));

export const CountryPodium = () => {
  const classes = useStyles();

  return (<Box className={classes.container}>
    <Box className={classes.avatarContainer}>
      <Avatar className={classes.eua} alt="EUA" src="/eua.jpg" />
      <Avatar className={classes.russia} alt="Russia" src="/russia.png" />
      <Avatar className={classes.jamaica} alt="Jamaica" src="/jamaica.png" />
    </Box>
    <Box >
      <Grid container item justifyContent="center" alignItems="center" direction="column">
          <Box className={classes.imageContainer} ><img className={classes.img} src="/podium.png" alt="Podium" /></Box>
      </Grid>
    </Box>
  </Box>
  );
}