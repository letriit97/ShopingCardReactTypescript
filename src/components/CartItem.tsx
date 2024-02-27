import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { CartItems } from "../context/store";
import storeData from '../data/data.json';
import { formatCurrency } from "../utilities/formatCurrency";

export function CartItem(item: CartItems) {
    const { removeCartQuantity } = useShoppingCart();
    const cart = storeData.find(i => i.id === item.id);
    if (cart == null) return null

    return (
        <Stack gap={2} direction="horizontal">
            <img src={cart.avatar} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
            <div className="me-auto">
                <div className="text-bold">
                    {cart.name} {item.quantity > 1 && <span className="text-bold text-muted" style={{fontSize: '.65rem'}}></span>}
                </div>
                <div>
                    {formatCurrency(cart.price)} 
                </div>
                <Button variant="outline-danger" size="sm" onClick={() => removeCartQuantity(cart.id)}> Xóa </Button>
            </div>
            <div> {formatCurrency(cart.price * item.quantity)}  </div>
        </Stack>
    )
}