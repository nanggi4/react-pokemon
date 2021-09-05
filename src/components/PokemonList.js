import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Pokemon from './PokemonCard';

const PokemonList = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
      setPokemons(res.data.results);
    });
  }, [currentPageUrl]);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {pokemons.map((pokemon, index) => {
          return (
            <Grid item xs={12} sm={3}>
              <Pokemon 
                key={index} 
                pokemon={pokemon}
              />
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