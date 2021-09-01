import React from 'react'
import classes from './Search-box.module.css'

export const SearchBox = ({ handleChange, placeholder }) => (
    <input className={classes.search}
                type='search'
                placeholder={placeholder}
                onChange={handleChange} />

)

