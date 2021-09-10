import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import queryString from 'query-string';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PokemonDetail = (props) => {
  const classes = props.classes;
  const pokeNum = queryString.parse(window.location.search)['pokenum'];
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
 
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`).then(res => {
      setName(res.data.name);
      setImg(res.data.sprites["front_default"]);
      console.log(res.data);
    });    
  }, []);

  return (
    <React.Fragment>
      <Card className={clsx(classes.pokemonCard)}>
        <CardActionArea>
          <CardMedia
            className={clsx(classes.pokemonImg)}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={clsx(classes.pokemonCardActionWrap)}>
          <Button size="small" color="primary" variant="contained" href="/">
            Back
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

const styles = {
  pokemonCard: {
    maxWidth: 345,
    margin: '0 auto'
  },
  pokemonImg: {
    height: 240,
  },
  pokemonCardActionWrap: {
    justifyContent: 'center'
  }
};

export default withStyles(styles)(PokemonDetail);