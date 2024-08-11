import { createContext, useState } from "react";
import { food_list } from "../assest/assets";

export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
    // here we create a  state  that item counts in the carts 

    const [cartItems, setCartItems] = useState({});
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    //here we create a function to calaculate total sum of all dishes that added into the cart

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        //here this for in loop traverse each item into the cart ...... here find method compare every product with the food list [items] and then if it is present then its return total sum 
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider; 