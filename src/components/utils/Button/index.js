import cn from 'classnames'
import s from './style.module.css'

const ButtonProg = ( { nameOfButton, onClickButton }) => {
  const getPageName = (nameOfButton) => {
    if (nameOfButton === 'Start game'){
      return ('game');
    }
    else if (nameOfButton === 'Go back home'){
      return ('app');
    }
  };

  const handleClick = () => { onClickButton && onClickButton(getPageName(nameOfButton)) }
  return(
    <button onClick={handleClick} className={cn(s.buttoncolor, s.buttonsize)}>
      {nameOfButton}
    </button>
  );
}

export default ButtonProg;