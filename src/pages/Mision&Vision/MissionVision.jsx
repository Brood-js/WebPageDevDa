import imgm from '../../assets/img-mision.png'
import imgv from '../../assets/img-vision.png'
import style from './mission_vision.module.css'

const MissionVision = () => {
  return (
    <div
      className={`${style.container_mision_vision} grid place-content-center`}
    >
      <div className={style.misionyvision}>
        <div className={style.mision}>
          <div className={style.cont_mision_v}>
            <div className={style.img_misi}>
              <img className={style.image_m_v} src={imgm} alt='' />
            </div>
            <div className={style.info_mision_vision}>
              <h1 className={style.title_m_v}>MISIÓN, NUESTRA META</h1>
              <p className={style.p_m_v}>
                En Devdatep, tenemos como misión proporcionar soluciones
                tecnológicas y eficaces para nuestros clientes a travéz del
                desarrollo de software a medida.
              </p>
            </div>
          </div>
        </div>
        <div className={style.vision}>
          <div className={style.cont_mision_v}>
            <div className={style.img_vis}>
              <img className={style.image_m_v} src={imgv} alt='' />
            </div>
            <div className={style.info_mision_vision}>
              <h1 className={style.title_m_v}>NUESTRA VISIÓN, QUEREMOS</h1>
              <p className={style.p_m_v}>
                Nuestra vision es hacer a la empresa y ser lideres y ser lideres
                en el sector de la tecnologia, brindando las soluciones
                adecuadas en relacion con las necesidades de nuestros clientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionVision
