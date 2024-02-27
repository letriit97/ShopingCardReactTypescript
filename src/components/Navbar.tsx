import { Button, Container, Nav, Navbar as NavbarBst } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/shoppingCartContext'

export function Navbar() {

    // mở danh sách Carts
    const { openCarts, totalQuantity } = useShoppingCart()

    return <NavbarBst className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className='me-auto'>
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
            </Nav>

            {/* BUTTON Shopping Card */}
            <Button onClick={openCarts}>
            {totalQuantity} - 
                Giỏ Hàng 
            </Button>
        </Container>
    </NavbarBst>
}