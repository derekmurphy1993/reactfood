import React from "react"

import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactFood</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}><img src={mealsImage} alt="table of food" /></div>
    </React.Fragment>
}

export default Header