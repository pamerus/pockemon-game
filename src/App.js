import { Header } from './components/Header/header'
import { Layout } from './components/Layout/layout'
import { Footer } from './components/Footer/footer'
import './App.css';
import image1 from  './background/bg1.jpeg'
import image2 from  './background/bg3.jpeg'

function App() {
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
  return (
    <div className="App">
      <Header />
      <Layout urlBg={urlForBg1} descr={firstLayerDescription} title={firstLayerTitle}/>
      <Layout colorBg={colorBg} descr={secondLayerDescription} title={secondLayerTitle}/>
      <Layout urlBg={urlForBg3} descr={thirdLayerDescription} title={thirdLayerTitle}/>
      <Footer />
    </div>
  );
}

export default App;
