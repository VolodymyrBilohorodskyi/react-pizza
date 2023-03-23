import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Layout } from './components/Layout'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'

let AppLoad = 0

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  )
)

const App: React.FC = () => {
  console.log('Component App loaded: ', ++AppLoad)

  return (
    <div className='wrapper'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
