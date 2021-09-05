import React, { useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import queryString from 'query-string';
import { withStyles } from '@material-ui/core/styles';

const PokemonDetail = (props) => {
  const classes = props.classes;
  const pokeNum = queryString.parse(window.location.search)['pokenum'];
 
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`).then(res => {
      console.log(res);
    });    
  }, []);

  return (
    <React.Fragment>

    </React.Fragment>
  );
}

const styles = {

};

export default withStyles(styles)(PokemonDetail);