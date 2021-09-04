import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const Pokemon = (props) => {
  const classes = props.classes;

  useEffect(() => {

  }, []);

  return (
    <React.Fragment>
      <Paper elevation={3}>
        <Card className={clsx(classes.pokemonWrap)}>
          <p className={clsx(classes.pokemonName)}>{props.pokemon.name}</p>
          <Button variant="contained" color="primary" size="small">More Detail</Button>
        </Card>
      </Paper>
    </React.Fragment>
  );
}

const styles = {
  pokemonWrap: {
    display: 'flex',
    padding: '1rem',
    alignItems: 'center',
    flexDirection: 'column'
  },
  pokemonName: {
    margin: '0 0 0.7rem',
    fontSize: '1.2rem'
  }
};

export default withStyles(styles)(Pokemon);