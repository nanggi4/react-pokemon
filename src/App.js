import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import PokemonList from "./components/PokemonList";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const App = (props) => {
  const classes = props.classes;

  return (
    <div className={clsx(classes.pokeWrap)}>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom align="center" className={clsx(classes.mainTitle)}>
          Pokemon API
        </Typography>
        <PokemonList />
      </Container>    
    </div>
  );
}

const styles = {
  pokeWrap: {
    background: "#00a1ed",
    padding: "3rem",
    height: '100vh'
  },
  mainTitle: {
    color: 'white',
    marginBottom: '4rem'
  } 
};

export default withStyles(styles)(App);