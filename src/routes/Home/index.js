import MenuHeader from '../../components/MenuHeader'
import { Header } from '../../components/Header'
import { Layout } from '../../components/Layout/'
import { Footer } from '../../components/Footer/'
import { PokemonCard } from '../../components/Pokemoncard'
import image1 from  '../../background/bg1.jpeg'
import image2 from  '../../background/bg3.jpeg'
import logoIMG from '../../background/card-back-side.jpeg'
import s from './style.module.css';

const POKEMONS = [
  {
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
  },
  {
    "abilities": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "special-attack": 65,
      "special-defense": 79,
      "speed": 80
    },
    "type": "poison",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    "name": "arbok",
    "base_experience": 157,
    "height": 35,
    "id": 24,
    "values": {
      "top": 5,
      "right": 9,
      "bottom": "A",
      "left": "A"
    }
  },
  {
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "type": "electric",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "name": "pikachu",
    "base_experience": 112,
    "height": 4,
    "id": 25,
    "values": {
      "top": 8,
      "right": "A",
      "bottom": 9,
      "left": 6
    }
  },
  {
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 45
    },
    "type": "grass",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "name": "bulbasaur",
    "base_experience": 64,
    "height": 7,
    "id": 1,
    "values": {
      "top": 8,
      "right": 4,
      "bottom": 2,
      "left": 7
    }
  },
  {
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special-attack": 60,
      "special-defense": 50,
      "speed": 65
    },
    "type": "fire",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "name": "charmander",
    "base_experience": 62,
    "height": 6,
    "id": 4,
    "values": {
      "top": 7,
      "right": 6,
      "bottom": 1,
      "left": 4
    }
  }
]

  const colorBg = '#fa33bc';
  const urlForBg1 = image1;
  const urlForBg3 = image2;
  const firstLayerTitle = 'ПИУ ПИУ ПАУ ПАУ';
  const firstLayerDescription = 'АХА ПОПАЛСЯ!!! НУ БЕРЕГИСЬ, ЕСЛИ НЕ СМОЖЕШЬ УНЕСТИ СВОИ НОГИ!!!!';
  const secondLayerTitle = 'Ты попал в покедоку 2!';
  const secondLayerDescription ='Это игра, где ты ловишь покемона, или ты сам есть покемон, где ты ловишь самыми ' +
    'изощрёнными способами покемонов. То есть там ты можешь придумать свою определённую местность, ' +
    'то есть можешь придумать ту же школу покемонов, так же посадить их туда или поймать. Но там более изощрённая ситуация.' +
    ' Там ты не изготавливаешь ловушку для покемонов. Тебе даются различные покеболы, ты можешь трейд делать.  ';
  const thirdLayerTitle = 'Ты можешь делайть трейд покеболами';
  const thirdLayerDescription = 'Удачи в покедоке2';
const  HomePage = ({onChangePage}) =>{
  const handleClickButton = ( page ) => {
    onChangePage && onChangePage(page);
  }

  return (
    <div className="App">
      {/*<MenuHeader />*/}
      <Header
        title="Покедока 2"
        descr="Игра о ловле покемонов"
      onClickButton={handleClickButton}/>
      <Layout
        id="rules"
        urlBg={urlForBg1}
        title={firstLayerTitle}>
        <p>{firstLayerDescription}</p>
      </Layout>
      <Layout
        id="cards"
        colorBg={colorBg}
        title={secondLayerTitle}>
        <div className={s.flex}>
          {
            POKEMONS.map((item, index) => <PokemonCard key={index}  {...item}/>  )
          }
        </div>
      </Layout>
      <Layout
        id="about"
        urlBg={urlForBg3}
        title={thirdLayerTitle}>
        {thirdLayerDescription}
      </Layout>
      <Footer />
    </div>
  );
}

export default HomePage;
