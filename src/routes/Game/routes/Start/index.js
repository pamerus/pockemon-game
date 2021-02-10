import { useState, useEffect, useContext } from 'react'
import ButtonProg from '../../../../components/utils/Button'
import { PokemonCard } from '../../../../components/Pokemoncard'
import {useHistory} from 'react-router-dom'
import Firebase from '../../../../service/firebase'

import s from './style.module.css'
import { FireBaseContext } from '../../../../context/FirebaseContext'

const StartPage = () => {
  const nameButton = 'Go back home';
  const history = useHistory();
  const firebase = useContext(FireBaseContext);

  const onChangePage = () => {
    history.push('/home')
  }

  const handleActive = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
          pokemon.isActive = !pokemon.isActive;
        };
        acc[item[0]] = pokemon;
        firebase.postPokemon(item[0], pokemon);
        return acc;
      }, {});
    });
  }

  const pokemonAdditional = {
    "active": true,
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 71
    },
    "type": "flying",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "base_experience": 122,
    "height": 11,
    "id": 17,
    "values": {
      "top": "A",
      "right": 2,
      "bottom": 7,
      "left": 5
    }
  };

  const [pokemons, setPokemons] = useState( {} );
  const [clickAdd, addPok] = useState(false);

  useEffect(() => {
    firebase.getPokemonSoket((pokemons)=>{
      setPokemons(pokemons);
    })
  }, [clickAdd]);

const addPokemon = () => {
  const data = pokemonAdditional;
  firebase.addPokemon(data, async ()=>{
  })

  addPok(clickAdd => !clickAdd);
  console.log(clickAdd);
}

  return (
    <div>
      THIS IS GAME PAGE!
      <div className={s.flex}>
        <button onClick={addPokemon}>
          ADD NEW POKEMON
        </button>
      </div>
      <div className={s.flex}>
        {
          Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) => (
            <PokemonCard
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              onClickCard={handleActive}
            />))
        }
      </div>
      <ButtonProg
        onClickButton={onChangePage}
        nameOfButton={nameButton} />
    </div>
  );
};

export default StartPage;