import { BsCart3 } from 'react-icons/bs'
import { PizzaList } from '../redux/pizza/type'
import { useState } from 'react'
import { addCart } from '../redux/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '../hooks'

export const PizzaItem: React.FC<PizzaList> = ({ id, title, options, imgUrl }) => {
  const dispatch = useAppDispatch()
  const [crust, setCrust] = useState<string>('Thin')
  const [size, setSize] = useState<string>('Medium')
  const [price, setPrice] = useState(
    Math.round(options.price[size.toLowerCase() as keyof typeof options.price] * 37)
  )

  const handleChangeSize = (sizeName: string) => {
    setSize(sizeName)
    const pizzaPrice = Math.round(
      options.price[sizeName.toLowerCase() as keyof typeof options.price] * 37
    )
    setPrice(pizzaPrice)
  }
  const pizzaId = id + size
  const handleAddCart = () => {
    const item = {
      id,
      title,
      imgUrl,
      price,
      size,
      crust,
      count: 1,
      pizzaId,
    }
    dispatch(addCart(item))
  }
  const pizzaItem = useAppSelector((state) => state.cart.list.filter((item) => item.id === id))
  if (pizzaItem.length > 0) {
    console.log(pizzaItem)
  }

  const pizzaCount = pizzaItem.reduce((sum, item) => {
    return sum + item.count
  }, 0)

  return (
    <div className='pizza-block__item'>
      <div className='pizza-block__border'>
        <div className='pizza-block__img'>
          <img src={imgUrl} alt='Pizza' />
        </div>
        <div className='pizza-block__container'>
          <div className='pizza-block__title'>{title}</div>
          <div className='pizza-block__option'>
            <div className='pizza-block__thickness'>
              {options.crust.map((crustName, index) => (
                <button
                  key={index}
                  className={crustName === crust ? 'active' : ''}
                  onClick={() => setCrust(crustName)}
                >
                  {crustName}
                </button>
              ))}
            </div>
            <div className='pizza-block__size'>
              {options.sizes.map((sizeName, index) => (
                <button
                  key={index}
                  className={sizeName === size ? 'active' : ''}
                  onClick={() => handleChangeSize(sizeName)}
                >
                  {sizeName}
                </button>
              ))}
            </div>
          </div>
          <div className='pizza-block__action'>
            <div className='pizza-block__price'>{price} UAH</div>
            <button className='pizza-block__add' onClick={() => handleAddCart()}>
              <BsCart3 />
              <span className='pizza-block__add-btn'>ADD</span>
              {pizzaCount > 0 && <span className='pizza-block__count'>{pizzaCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
