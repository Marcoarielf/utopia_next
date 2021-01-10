import logoUtopia from './../../public/images/logo_utopia.svg'
import css from './nav.module.scss'

function Nav() {
  return (
        <header className={css.hportada}>
            <div>
                <img class={css.logo_utopia} src={logoUtopia} alt="lgoo"/>
                <p className={css.btn_espacio_cenit}>espacio cenit</p>
                <div className={css.abrir_menu}>
                    <span className={`${css.line_menu_1} ${css.line_menu_animation}`}></span>
                    <span className={`${css.line_menu_2} ${css.line_menu_animation}`}></span>
                    <span className={`${css.line_menu_3} ${css.line_menu_animation}`}></span>
                </div>
            </div>
        </header>
  );
}

export default Nav;
