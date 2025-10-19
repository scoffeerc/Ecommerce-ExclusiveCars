import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './context/CartContext/CartProvider'
import { Nav } from './components/Nav/Nav'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer' // ← AGREGAR ESTO
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav/>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/detail/:id" element={<ItemDetailContainer />}/> 
        </Routes>
      </CartProvider>
    </BrowserRouter>  
  )
}

export default App