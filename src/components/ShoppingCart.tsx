import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import storeItems from '../data/data.json';
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from './CartItem';

type ShoppingCartProps = {
    isOpen: boolean
}

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCarts, cartItems } = useShoppingCart()

    return (
        <Offcanvas show={isOpen} onHide={closeCarts} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Giỏ hàng
                </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                <Stack gap={3} >
                    {
                        cartItems.map(item => (
                            <CartItem key={item.id}  {...item} />
                        ))
                    }

                    {/* Tổng tiền */}
                    <div className="ms-auto fw-bold fs-5">
                        Tổng cộng:  {
                            formatCurrency(
                                cartItems.reduce((total, cartItem) => {
                                    const data = storeItems.find(x => x.id === cartItem.id)
                                    return total + (data?.price || 0) * cartItem.quantity
                                }, 0)
                            )}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
