import React, {useEffect, useLayoutEffect, useState} from 'react';
import * as style from './menu-component.module.sass'
import {CSSTransition} from "react-transition-group";
import {dishType} from "../../pages/menu/index";

export type MyComponentProps = {
  menuTitle: string;
  dish: dishType[];
}

export default function MenuComponent(props: MyComponentProps) {
  const [inState, setInState] = useState(false);
  useLayoutEffect(() => {
    setInState(true);
  });
  return (
    <CSSTransition in={inState}  timeout={3000} classNames={{
      enter: style.containerEnter,
      enterActive: style.containerEnterActive,
      exit: style.containerExit,
      exitActive: style.containerExitActive,
    }}>
      <div className={style.container}>
        {props.dish.map(
          (dish, i) => {
            return (<div key={i}>
              <p className={style.dishTitle}>{dish.dishName}</p>
              <p className={style.dishIngredient}>{dish.dishIngredient}</p>
            </div>)
          }
        )}</div>
    </CSSTransition>
  );
}
