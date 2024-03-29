import CartIcon from "./CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from '../../store/cart-context'
import { useContext, useEffect, useState } from "react"

const HeaderCartButton = props => {
    const [btnHighlight, setBtnHighlight] = useState(false)
    const cartCtx = useContext(CartContext)

    const { items } = cartCtx

    const numberOfCartItems = items.reduce((currentNum, item) => {
        return currentNum + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${ btnHighlight ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnHighlight(true)
    const timer = setTimeout(() => {
            setBtnHighlight(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
}

export default HeaderCartButton