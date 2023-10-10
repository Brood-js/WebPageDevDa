import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Home = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        //TODO: poner gradiente como fondo
        className='w-screen h-screen'
      >
        <SwiperSlide className='bg-red-500'>
          <div className='h-full w-full'>
            <div className='flex justify-between mx-4'>
              <h1>logo</h1>
              <p>prueba navbar</p>
            </div>
            <div className='container bg-blue-500 h-full flex flex-col items-center justify-center mx-auto'>
              <button>PRUEBA</button>
              <div>
                <h1>prueba</h1>
                <p>prueba</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='bg-blue-dark'>
          <div className='h-full w-full'>
            <div className='flex justify-between mx-4'>
              <h1>logo</h1>
              <p>prueba navbar</p>
            </div>
            <div className='container bg-blue-500 h-full flex flex-col items-center justify-center mx-auto'>
              <button>PRUEBA</button>
              <div>
                <h1>prueba</h1>
                <p>prueba</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home
