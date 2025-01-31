import s from '../../styles/components/hoc/Header.module.scss'

const Header = () => {
  return (
    <div className={s.header}>
      <div>
        <img src="/Logo_Dark.svg" alt="" />
      </div>
      <div className={s.search}>
        <img src="/Search.svg" alt="" />
        <input type="text" className={s.search__input} placeholder='Search' />
      </div>
      <div className={s.search__icons}>
        <a href="/favorite">
          <img src="/Favorites.svg" alt="" />
        </a>
        <a href="/cart">
          <img src="/Cart.svg" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
