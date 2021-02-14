import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBB6V6914ATPB-mDcjGdGrxmpDJSsXIB2c",
  authDomain: "pokemon-game-8a8c0.firebaseapp.com",
  databaseURL: "https://pokemon-game-8a8c0-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-8a8c0",
  storageBucket: "pokemon-game-8a8c0.appspot.com",
  messagingSenderId: "927123012587",
  appId: "1:927123012587:web:b01a5324017b797b0cb7ae"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor () {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value',(snapshot)=>{
      cb(snapshot.val());
    })
  }

  getPokemonsOnce = async () =>{
    return await this.database.ref('pokemons').once('value')
      .then(snapshot => snapshot.val());
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  }

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data).then(()=>cb());
  }

  offPokemonSoket = (cb) => {
    this.database.ref('pokemons').off();
  }
}

export default Firebase;