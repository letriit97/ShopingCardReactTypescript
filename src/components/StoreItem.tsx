import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from '../context/shoppingCartContext';
import { Store } from '../context/store';
import { formatCurrency } from '../utilities/formatCurrency';

const StoreItem = (item: Store) => {
    
    const { getItemQuantity,increaseCartQuantity,descreaseCartQuantity,removeCartQuantity } = useShoppingCart();
    let quantity = getItemQuantity(item.id);
    
    return (
        <Card className='h-100'>
            <Card.Img variant="top" src={item.avatar} height={200} style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex flex-column justify-content-between align-item-baseline mb-4">
                    <span className='fs-5'>{item.name}</span>
                    <span className='mt-3 fs-6 text-muted'>Giá: {formatCurrency(item.price)}</span>
                </Card.Title>
            </Card.Body>

            <div className='mt-auto mb-3'>
                {quantity === 0 ?
                    (<Button className='w-100' onClick={() => increaseCartQuantity(item.id)}> Thêm vào giỏ hàng </Button>)
                    : <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem" }}>
                        <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                            <Button size='sm' onClick={() => descreaseCartQuantity(item.id)}>-</Button>
                            <div>
                                <span className='fs-5'>{quantity}</span>
                            </div>
                            <Button size='sm' onClick={() => increaseCartQuantity(item.id)}>+</Button>
                        </div>
                    </div>
                }
            </div>

            {/* Remove quantiy */}
            <Button variant='danger' size='sm' onClick={() => removeCartQuantity(item.id)}> Xóa </Button>
        </Card>
    );
};

export default StoreItem;