import { useRouteMatch, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import StartPage from './routes/Start'
import BoardPage from './routes/Board'
import FinishPage from './routes/Finish'
import { PokemonContext } from '../../context/pokemonContext'

  const GamePage = () => {
   const [pokemonsList, addPokemons] = useState([]);

  const addPokemonToList = (selectedPokemon) => {
    addPokemons(pokemonsList.push(selectedPokemon));
  }
    const match = useRouteMatch('/game/');
    return (
      <PokemonContext.Provider value={{
        pokemonsList,
        adderPokemons: addPokemonToList
      }}>
        <Switch>
          <Route path={`${match.path}/`} exact component={StartPage} />
          <Route path={`${match.path}/board`} component={BoardPage} />
          <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
      </PokemonContext.Provider>
    );
  };

export default GamePage;