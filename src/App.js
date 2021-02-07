import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom'
import HomePage from './routes/Home'
import GamePage from './routes/Game'
import MenuHeader from './components/MenuHeader'
import About from './routes/About'
import Contact from './routes/Contact'
import NotFound from './routes/NotFound'
import { Footer } from './components/Footer'
import cn from 'classnames'
import s from './style.module.css'

const App = () => {
  const match = useRouteMatch('/');

return (
    <Switch>
      <Route path="/404" render={NotFound}/>
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact}/>
          <div className={cn(s.wrap, {
            [s.isHomePage] : match.isExact
          })}>
            <Switch>
              <Route path="/home" component={HomePage}/>
              <Route path="/game" component={GamePage}/>
              <Route path="/" exact component={HomePage}/>
              <Route path="/about" render={About}/>
              <Route path="/contact" render={Contact}/>
              <Route render={() => (
                <Redirect to="/404" />
              )} />
            </Switch>
            </div>
          <Footer/>
        </>
      </Route>
    </Switch>
)

};

export default App;