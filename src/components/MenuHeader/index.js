import Menu from  '../Menu'
import NavBar from '../NavBar'
import { useState } from 'react'

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null);

  const handleClickHamburg = () => {
    setOpen(prevState => !prevState);
  }

  return(
    <>
      <Menu isOpen={isOpen} onClick={handleClickHamburg}/>
      <NavBar isOpen={isOpen} bgActive={bgActive} onClickHamburg={handleClickHamburg}/>
    </>
  );
}

export default MenuHeader;