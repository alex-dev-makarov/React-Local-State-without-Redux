import React from "react";
import classes from './CardList.module.css';
import { Card } from "../CardList/Card/Card";

export const CardList = props => {

    return (
        <div className={classes.card__list}>
            {!props.monsters.length  
                ? <h1>Sorry but now we can't find what you want to</h1> 
                : props.monsters.map(monster =>
                    <Card key={monster.id}
                        monster={monster}/>
                )}

        </div>
    )
}

