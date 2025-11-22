import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './context/CartContext/CartProvider'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer' // ← AGREGAR ESTO
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ProductFormContainer } from"./components/adminComponents/ProductFormContainer/ProductFormContainer"
import { MainLayout } from "./layouts/MainLayout"
import { AdminLayout } from "./layouts/AdminLayout"
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida"
import { Login } from "./components/Login/Login"
import { Cart } from "./components/Cart/Cart"
import { Checkout } from "./components/Cart/Checkout";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route 
              path="/" 
              element={<ItemListContainer />}/>
            <Route 
              path="/category/:categoryId" 
              element={<ItemListContainer />}/>
            <Route 
              path="/detail/:id" 
              element={<ItemDetailContainer />}/> 
          </Route>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>  
          <Route path="/admin" element={<AdminLayout/>}>
          <Route index element = {<Login/>}/>
          <Route path="alta-productos" element= {
            <RutaProtegida>
              <ProductFormContainer/>
            </RutaProtegida>
          }/>
          </Route>  
        </Routes>
      </CartProvider>
    </BrowserRouter>  
  )
}

export default App