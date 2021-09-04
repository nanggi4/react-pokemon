import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Pokemon from './Pokemon';

const PokemonList = (props) => {
  const classes = props.classes;
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
      console.log(res.data);
      setPokemons(res.data.results);
      console.log(pokemons);
    });
  }, [currentPageUrl]);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {pokemons.map((pokemon, index) => {
          return (
            <Grid item xs={12} sm={3}>
              <Pokemon pokemon={pokemon} key={index} />
            </Grid>
          )
        })}                        
      </Grid>      
    </React.Fragment>
  );
}

const styles = {

};

export default withStyles(styles)(PokemonList);