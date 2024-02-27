import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { ShippingCartProvider } from "./context/shoppingCartContext"
import About from "./pages/About"
import Home from "./pages/Home"
import Store from "./pages/Store"
function App() {

  return (
    <ShippingCartProvider>
      <Navbar />

      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </ShippingCartProvider>
  )
}

export default App
