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
    <button onClick={handleClick}>
      {nameOfButton}
    </button>
  );
}

export default ButtonProg;