import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import clsx from "clsx";
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";

const App = (props) => {
  const classes = props.classes;

  return (
    <div className={clsx(classes.pokeWrap)}>
      <CssBaseline />
      <Router>
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom align="center" className={clsx(classes.mainTitle)}>
            Pokemon API
          </Typography>
          <Switch>
            <Route path="/detail">
              <PokemonDetail />
            </Route>
            <Route path="/" exact>
              <PokemonList />
            </Route>
          </Switch>          
        </Container>    
      </Router>
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