import Logo from '../assets/pizzaIcon.svg'
import { useState } from 'react'
import { BsSearch, BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks'
import { filterPizza } from '../redux/pizza/pizzaSlice'

export const Header: React.FC = () => {
  const totalPizzaPrice = useAppSelector((state) => state.cart.totalPrice)
  const totalPizzaCount = useAppSelector((state) => state.cart.totalCount)
  const [search, setSearch] = useState('')
  const dispatch = useAppDispatch()

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    dispatch(filterPizza(event.target.value))
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' className='header__logo'>
          <img src={Logo} alt='Logo' />
          <div>
            <h1>React Pizza</h1>
            <span>I am practice</span>
          </div>
        </Link>

        <div className='header__search search-block'>
          <input
            value={search}
            className='search-block__input'
            type='text'
            placeholder='Searching...'
            onChange={onChangeSearch}
          />
          <div className='search-block__icon'>
            <BsSearch />
          </div>
        </div>
        <div className='header__cart cart-block'>
          <Link to='cart' className='cart-block__amount'>
            <span>{totalPizzaCount}</span>
            <BsCart3 />
          </Link>

          <Link to='cart' className='cart-block__price'>
            {totalPizzaPrice ? `${totalPizzaPrice} UAH` : 'Empty'}
          </Link>
        </div>
      </div>
    </header>
  )
}
