import { ReactComponent as SetaIcon } from 'assets/images/Seta.svg';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <div>
        <button className="btn btn-primary">
          <h6>Inicie agora a sua busca</h6>
        </button>
      </div>
      <div>
        <SetaIcon />
      </div>
    </div>
  );
};

export default ButtonIcon;
