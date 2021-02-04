import cn from 'classnames'

import s from './style.module.css'
import { useState } from 'react'
const Menu = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  }
  const ROUTS_MENU = [
    {href : "welcome", title: "HOME"},
    {href :"game", title: "GAME"},
    {href: "about", title: "ABOUT"},
    {href: "contact", title: "CONTACT"}];
return (
<div className={cn(s.menuContainer, {[s.active] : isActive})} onClick={handleClick}>
  <div className={s.overlay}/>
  <div className={s.menuItems}>
    <ul>
      {
        ROUTS_MENU.map((item, index) => <li key={index}><a href={item.href}>{item.title}</a></li>)
      }
    </ul>
  </div>
</div>
)}
export default Menu;