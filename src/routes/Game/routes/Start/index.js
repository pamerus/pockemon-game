import { useState, useEffect, useContext } from 'react'
import ButtonProg from '../../../../components/utils/Button'
import { PokemonCard } from '../../../../components/Pokemoncard'
import {useHistory} from 'react-router-dom'
import Firebase from '../../../../service/firebase'

import s from './style.module.css'
import { FireBaseContext } from '../../../../context/FirebaseContext'
import { PokemonContext } from '../../../../context/pokemonContext'

const StartPage = () => {
  const nameButton = 'Go back home';
  const history = useHistory();
  const firebase = useContext(FireBaseContext);
  const pokemonsContext = useContext(PokemonContext);

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

  const [pokemons, setPokemons] = useState( {} );
  const [clickAdd, addPok] = useState(false);

  useEffect(() => {
    firebase.getPokemonSoket((pokemons)=>{
      setPokemons(pokemons);
    });
    return () => firebase.offPokemonSoket();
  }, [clickAdd]);

const handleChangeSelected = (key) => {
  const pokemon = {...pokemons[key]}
  pokemonsContext.onSelectedPokemons(key);

  setPokemons(prevState => ({
    ...prevState,
    [key]: {
      ...prevState[key],
      selected: !prevState[key].selected
    }
  }))
}

  addPok(clickAdd => !clickAdd);

const handlerStartGameClick = () => {
  history.push('/game/board');
}

  return (
    <div>
      THIS IS GAME PAGE!
      <div className={s.flex}>
        <button
          onClick={handlerStartGameClick}
          disabled={Object.keys(pokemonsContext.pokemons).length < 5}>
          Start Game
        </button>
      </div>
      <div className={s.flex}>
        {
          Object.entries(pokemons).map(([key, {name, img, id, type, values, selected}]) => (
            <PokemonCard
              className={s.card}
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive={true}
              isSelected={selected}
              onClickCard={() => {
                if (Object.keys(pokemonsContext.pokemons).length < 5 || selected){
                  handleChangeSelected(key);
                }
              }}
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