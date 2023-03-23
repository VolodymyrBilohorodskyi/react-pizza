import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Offers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className='offers-block'>
      <Slider {...settings}>
        <div className='offers-block__item'>
          <img src='/img/slider/cinnamonrolls-slider-pc-ukr.webp' alt='' />
        </div>
        <div className='offers-block__item'>
          <img src='/img/slider/newfriespizzanational-slider-pc-ukr.webp' alt='' />
        </div>
        <div className='offers-block__item'>
          <img src='/img/slider/newpizzasets-slider-pc-ukr.webp' alt='' />
        </div>
        <div className='offers-block__item'>
          <img src='/img/slider/potatoesmushroomsausages-slider-pc-ukr.webp' alt='' />
        </div>
      </Slider>
    </div>
  )
}
