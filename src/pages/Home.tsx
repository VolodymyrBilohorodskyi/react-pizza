import { PizzaItem } from '../components/PizzaItem'
import { Offers } from '../components/Offers'
import { useAppSelector } from '../hooks'

export const Home: React.FC = () => {
  const Pizzas = useAppSelector((state) => state.pizza.filtered)

  return (
    <main className='home'>
      <div className='home__container'>
        <div className='home__offers'>
          <Offers />
        </div>
        <div className='home__pizzas pizza-block'>
          <div className='pizza-block__list'>
            {Pizzas.map((pizza) => (
              <PizzaItem key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
