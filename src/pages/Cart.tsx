import { CartItem } from '../components/CartItem'
import { useAppDispatch, useAppSelector } from '../hooks'
import { BsTrash3 } from 'react-icons/bs'
import { clearCart } from '../redux/cart/cartSlice'
export const Cart: React.FC = () => {
  const cartList = useAppSelector((state) => state.cart.list)
  const totalPrice = useAppSelector((state) => state.cart.totalPrice)
  const totalCount = useAppSelector((state) => state.cart.totalCount)
  const dispatch = useAppDispatch()
  return (
    <main className='cart'>
      <div className='cart__container'>
        <div className='cart__top top-cart'>
          <div className='cart__title'>
            <h3>Cart</h3>
          </div>
          <button className='cart__clear' onClick={() => dispatch(clearCart())}>
            <BsTrash3 />
            Clear Cart
          </button>
        </div>

        <div className='cart__list '>
          {cartList.length > 0 ? (
            cartList.map((cartItem, index) => <CartItem key={index} {...cartItem} />)
          ) : (
            <div className='cart__empty'>
              Cart is Empty <span>😢</span>
            </div>
          )}
        </div>
        <div className='cart__info info-cart'>
          <div className='info-cart__title'>Total count: {totalCount}</div>
          <div className='info-cart__price'>Total Price: {totalPrice} UAH</div>
        </div>
      </div>
    </main>
  )
}
