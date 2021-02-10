import cn from 'classnames'

import s from './style.module.css'
import {Link} from 'react-router-dom'

const Menu = ({ isOpen }) => {
  const ROUTS_MENU = [
    {to: "home", title: "HOME"},
    {to: "game", title: "GAME"},
    {to: "about", title: "ABOUT"},
    {to: "contact", title: "CONTACT"}];
return (
<div className={cn(s.menuContainer, {
  [s.active] : isOpen === true,
  [s.deactive] : isOpen === false
})}>
  <div className={s.overlay}/>
  <div className={s.menuItems}>
    <ul>
      {
        ROUTS_MENU.map(({to, title}, index) => <li key={index}><Link to={to}>{title}</Link></li>)
      }
    </ul>
  </div>
</div>
)}
export default Menu;