import { useRecoilState } from "recoil";
import { cartState } from "./cartAtom";

export function useCart(){
    const[cart,setCart] = useRecoilState(cartState)

    const addToCart= (product)=>{

        const existingProduct = cart.find(item=>item.id===product.id);

        if (existingProduct) {
            alert("Item already in cart!");
          } else {
            setCart([...cart, { ...product, quantity: 1 }]);
          }
    }
    return {cart,addToCart};
}