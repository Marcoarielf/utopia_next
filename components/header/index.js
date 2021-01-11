import logoUtopia from './../../public/images/logo_utopia.svg'
import React, {useEffect} from 'react';
import { gsap } from 'gsap';
import utopia from './../../public/images/marca_fbyb.svg'
import css from './header.module.scss'

export default function Header() {
    const animated = React.createRef();

    useEffect(() => {
      gsap.to(animated.current, {opacity: 0.5, duration: 2})
    }, [animated])
    return (
      <div className={`${css.portada} ${css.portada_sitio}`}>
          <img src={utopia} className={css.marca_fbyb} />
          <div>
              <div className={css.logo_utopia}>
                  <img src={logoUtopia} />
              </div>
              <div className={css.descripcion_utopia} ref={animated}>
                  <h1>Un espacio para vincularse con las<br /> tecnologías exponenciales desde el<br /> ámbito educativo. Para interrogarnos<br /> acerca del presente e imaginar el<br /> futuro desde diferentes ámbitos de<br /> la vida en sociedad.</h1>
              </div>           
          </div>
      </div>
    );
  }
