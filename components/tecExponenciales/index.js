import css from './styles.module.scss'

export default function TecnologiasExponenciales() {
  return (
    <section className={css.tecnologias_exponenciales}>
        <h3>Tecnologías Exponenciales</h3>
        <div className={css.linea_tecno}></div>
            <div className={css.contenedor_tecnologias}>
                <div className={css.tecnologias}>
                    <p><span>Inteligencia artificial</span></p>
                    <p><span>Big data</span></p>
                    <p><span>Ciencia de datos</span></p>
                    <p><span>Realidad aumentada</span></p>
                    <p><span>Biotecnología</span></p>
                    <p><span>Impresión 3D</span></p>
                    <p><span>Metodologías ágiles</span></p>
                    <p><span>Cultura digital</span></p>
                    <p><span>Internet de las cosas</span></p>
                    <p><span>Blockchain</span></p>
                    <p><span>Realidad virtual</span></p>
                    <p><span>Nanotecnología</span></p>
                    <p><span>Programación</span></p>
                    <p><span>Robótica</span></p>
                    <p><span>Transmedia</span></p>
                    <p><span>Territorios digitales</span></p>
                    </div>
            </div>
        <div className={css.linea_tecno}></div>
        <div className={css.descripcion_tec_ex}>
            <p>Las tecnologías exponenciales son aquellas que siguen un patrón<br /> de crecimiento acelerado o exponencial; esto significa que, en poco<br /> tiempo, su precio y complejidad se reducen de forma relevante,<br /> mientras que su capacidad y el número de aplicaciones que las<br /> aprovechan aumenta de forma vertiginosa.</p>
        </div>
    </section>
  );
}


