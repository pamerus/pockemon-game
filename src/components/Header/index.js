import s from './header.module.css'
import ButtonProg from '../utils/Button'

export const Header = ({
  title,
  descr,
  onClickButton
}) => {
  const nameButton = 'Start game';
  return(
  <header className={s.root}>
    <div className={s.forest}></div>
    <div className={s.container}>
      <h1>{title}</h1>
      <p>{descr}</p>
      <ButtonProg
        onClickButton={onClickButton}
        nameOfButton={nameButton} />
    </div>
  </header>);
};
