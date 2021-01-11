import css from './css.module.scss';

export default function Dimensiones() {
  return (
    <section className={css.selector_dimensiones}>
        <div className={css.todo}>
            <div className={css.dim_pensar}>
                <div className={css.circulo}></div>
                <h2><strong>PENSAR</strong>con inteligencia expandida</h2>
                <a href="pensar.html" target="_parent">explorar</a>
            </div>
            <div className={css.dim_crear}>
                <div className={css.cubo}>
                    <div class={`${css.cara} ${css.frente}`}></div>
                    <div class={`${css.cara} ${css.atras}`}></div>
                    <div class={`${css.cara} ${css.arriba}`}></div>
                    <div class={`${css.cara} ${css.abajo}`}></div>
                    <div class={`${css.cara} ${css.izquierda}`}></div>
                    <div class={`${css.cara} ${css.derecha}`}></div>
                </div>
                <h2><strong>CREAR</strong>con herramientas digitales</h2>
                <a href="crear.html" target="_parent">explorar</a>
            </div>
            <div className={css.dim_vivir}>
                <div className={css.cubo}>
                <div class={`${css.cara} ${css.frente}`}></div>
                    <div class={`${css.cara} ${css.atras}`}></div>
                    <div class={`${css.cara} ${css.arriba}`}></div>
                    <div className={css.circulo}></div>
                    <div class={`${css.cara} ${css.abajo}`}></div>
                    <div class={`${css.cara} ${css.izquierda}`}></div>
                    <div class={`${css.cara} ${css.derecha}`}></div>
                </div>
                
                <h2><strong>VIVIR</strong>inmersos en la cultura digital</h2>
                <a href="vivir.html" target="_parent">explorar</a>
            </div>
        </div>
    </section>
  );
}


