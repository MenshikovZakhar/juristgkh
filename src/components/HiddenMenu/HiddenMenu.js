import { NavLink, Link } from 'react-router-dom';
import './HiddenMenu.css';


function HiddenMenu({ onClickCloseMenu }) {
  return (
    <section className='hidden-menu'>
      <nav className='nav__menu_adapt'>
        <div className='nav-menu__close' onClick={onClickCloseMenu}></div>
        <div className='nav-movie__movie_adapt'>

          <Link
            to='/'
            className='nav-movie__link-adapt'
            onClick={onClickCloseMenu}
          >
            Главная
          </Link>
          <NavLink
            to='/servicesphysical'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Услуги для физических лиц
          </NavLink>
          <NavLink
            to='/servicesjuridical'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Услуги для юридических лиц
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Обо мне
          </NavLink>
          <NavLink
            to='/contacts'
            className={({ isActive }) =>
              isActive
                ? 'nav-movie__link-adapt active'
                : 'nav-movie__link-adapt'
            }
            onClick={onClickCloseMenu}
          >
            Контакты
          </NavLink>
        </div>

      </nav>
    </section>
  );
};

export default HiddenMenu;