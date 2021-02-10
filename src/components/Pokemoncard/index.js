import { useContext } from 'react';
import { PokemonContext } from '../../context/pokemonContext'
import cn from 'classnames';
import cardBackSide from '../../background/card-back-side.jpeg';
import s from './pokemoncard.module.css'

export const PokemonCard = (
    {
      name,
      img,
      id,
      type,
      values,
      isActive,
      onClickCard,
      minimize,
      className
    }
  ) =>{
  const onClick = () => {
    onClickCard(id);
    PokemonContext.adderPokemons(id);
  }

return(
  <div className={s.root} onClick={onClick}>
    <div className={cn(className, s.pokemonCard, {[s.active] : isActive})}>
      <div className={s.cardFront}>
        <div className={cn(s.wrap, s.front)}>
          <div className={cn(s.pokemon, s[type])}>
            <div className={s.values}>
              <div className={cn(s.count, s.top)}>{values.top}</div>
              <div className={cn(s.count, s.right)}>{values.right}</div>
              <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
              <div className={cn(s.count, s.left)}>{values.left}</div>
            </div>
            <div className={s.imgContainer}>
              <img src={img} alt={name} />
            </div>
            { !minimize && (<div className={s.info}>
              <span className={s.number}>#{id}</span>
                <h3 className={s.name}>{name}</h3>
                <small className={s[type]}>Type:
                  <span>{type}</span>
                </small>
            </div>) }
          </div>
        </div>
      </div>
      <div className={s.cardBack}>
        <div className={cn(s.wrap, s.back)}>
          <img src={ cardBackSide } alt="Сard Backed" />
        </div>
      </div>
    </div>
  </div>
  );
}