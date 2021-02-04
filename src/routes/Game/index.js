import ButtonProg from '../../components/utils/Button'

const GamePage = ({
  onChangePage
}) => {
  const nameButton = 'Go back home';
  return (
    <div>
      THIS IS GAME PAGE!
      <ButtonProg
        onClickButton={onChangePage}
        nameOfButton={nameButton} />
    </div>
  );
};

export default GamePage;