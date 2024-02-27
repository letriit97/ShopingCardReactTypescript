import { ReactNode, createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { CartItems } from "./store";


type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    openCarts: () => void
    closeCarts: () => void

    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    descreaseCartQuantity: (id: number) => void
    removeCartQuantity: (id: number) => void

    totalQuantity: number;
    cartItems: CartItems[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShippingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItems[]>('shoppingCarts',[])
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openCarts = () => setIsOpen(true);
    const closeCarts = () => setIsOpen(false);
    const totalQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    function getItemQuantity(id: number) {
        return cartItems.find(x => x.id == id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems((currentItems) => {
            if (currentItems.find(x => x.id == id) == null)
                return [...currentItems, { id, quantity: 1 }]
            else {
                return currentItems.map(item => {
                    if (item.id === id)
                        return { ...item, quantity: item.quantity + 1 }
                    else return item
                })
            }
        })
    }
    function descreaseCartQuantity(id: number) {
        setCartItems((currentItems) => {
            if (currentItems.find(x => x.id == id)?.quantity === 1)
                return currentItems.filter(x => x.id !== id)
            else {
                return currentItems.map(item => {
                    if (item.id === id)
                        return { ...item, quantity: item.quantity + 1 }
                    else return item
                })
            }
        })
    }
    function removeCartQuantity(id: number) {
        setCartItems((currentItems) => currentItems.filter(x => x.id !== id))
    }


    return (
        <ShoppingCartContext.Provider
            value={{
                openCarts,
                closeCarts,
                getItemQuantity,
                increaseCartQuantity,
                descreaseCartQuantity,
                removeCartQuantity,
                totalQuantity,
                cartItems
            }}
        >
            {children}

            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}