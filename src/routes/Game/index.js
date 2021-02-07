import { useState, useEffect } from 'react'
import ButtonProg from '../../components/utils/Button'
import { PokemonCard } from '../../components/Pokemoncard'
import {useHistory} from 'react-router-dom'
import database from '../../service/firebase'

import s from './style.module.css'

const GamePage = () => {
  const nameButton = 'Go back home';
  const history = useHistory();
  const onChangePage = () => {
    history.push('/home')
  }
  const handleActive = (id) => {
    setPokemons(prevState => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        if (pokemon.id === id) {
          pokemon.active = true;
        };
        acc[item[0]] = pokemon;
        return acc;
      }, {});
    });
  }

  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
database.ref('pokemons').once('value', (snapshot) => {
  setPokemons(snapshot.val());
});
  }, []);

  database.ref('pokemons/' + objID).set({

  });

  return (
    <div>
      THIS IS GAME PAGE!
      <div className={s.flex}>
        {
          Object.entries(pokemons).map(([key, {name, img, id, type, values, active}]) => (
            <PokemonCard
              key={id}
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

export default GamePage;