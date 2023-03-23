import { useAppDispatch } from '../hooks'
import {} from '../redux/pizza/pizzaSlice'
import { CartItem as CartItemProp } from '../redux/cart/type'
import { removeCart, increaseCount } from '../redux/cart/cartSlice'

export const CartItem: React.FC<CartItemProp> = ({
  pizzaId,
  title,
  imgUrl,
  price,
  size,
  crust,
  count,
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className='cart__item cart-item'>
      <div className='cart-item__img'>
        <img src={imgUrl} alt={title} />
      </div>
      <div className='cart-item__info'>
        <div className='cart-item__title'>{title}</div>
        <div className='cart-item__option'>
          <div className='cart-item__size'>Size: {size}</div>
          <div className='cart-item__crust'>Crust: {crust}</div>
        </div>
      </div>
      <div className='cart-item__price'>{price} UAH</div>
      <div className='cart-item__action'>
        <button onClick={() => dispatch(increaseCount({ pizzaId, change: 'increase' }))}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increaseCount({ pizzaId, change: 'decrease' }))}>-</button>
      </div>
      <button className='cart-item__remove' onClick={() => dispatch(removeCart(pizzaId))}>
        &#10006;
      </button>
    </div>
  )
}
