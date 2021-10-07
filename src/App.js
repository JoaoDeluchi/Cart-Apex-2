import { useEffect, useState } from 'react'
import { getAllProducts } from './services/http/products'
import { ProductCard } from './components/Card/card'

function App() {

  const [products, setProducts] = useState([])

  useEffect(async () => {
    const { data } = await getAllProducts()
    setProducts(data)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {products.map(({ description, category, price }) => <ProductCard description={description} category={category} price={price} />)}
      </header>
    </div>
  )
}

export default App
