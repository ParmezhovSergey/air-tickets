import angle from "../../img/angle.png";
import style from './Header.module.css'

const Header = () => {
  return (
    <div>
      <img className={style.wrapper__image} src={angle} />
    </div>
  );
};

export default Header;
