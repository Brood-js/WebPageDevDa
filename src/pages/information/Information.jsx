import img1 from './../../assets/img-info.jpg'
import styles from './info.module.css'

const Information = () => {
  return (
    <div className={`${styles.container_major} grid place-content-center`}>
      <div className={styles.container_struct}>
        <div className={styles.container_information}>
          <div className={styles.question}>
            <h3 className={styles.pregunta}>¿QUIÉNES SOMOS?</h3>
            <div className={styles.parrafos}>
              <p className={styles.p1}>
                Nuestra familia esta formada por apasionados expertos en
                tecnología, completamente dedicados a ayudarte a alcanzar y
                superar tus metas digitales.
              </p>
              <p className={styles.p2}>
                Nos enorgullecemos de nuestr compromiso y entusiasmo para
                brindarte la mejor experiencia posible en este mundo tecnológico
                en constante evolución.
              </p>
              <p className={styles.p3}>
                Estamos aquí para colaborar contigo en cada paso del camino y
                asegurarnos de que logres tus objetivos de manera exitosa y
                satisfactoria. <span>¡Tu exito es nuestra prioridad!</span>
              </p>
            </div>
          </div>

          <div className={styles.ilustration}>
            <img
              className={styles.img_ilus}
              src={img1}
              alt=''
              width='541px'
              height='435px'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
