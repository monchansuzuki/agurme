import React from "react"
import * as style from "./restaurant-main-component.module.sass"
import {Link} from "gatsby";

export type MyComponentProps = {
  brandName: string
  brandNameKana: string
  restaurantDescription: JSX.Element
  bg: JSX.Element
  inside: JSX.Element
  link: string
}

export default function RestaurantMainComponent(props: MyComponentProps) {
  return (
    <>
      <section className={style.firstContainer}>
        {props.bg}
        <div className={style.msg}>
          {props.brandName}
        </div>
      </section>

      <section className={style.container}>
        <h2>{props.brandName}
        <br/>
          {props.brandNameKana}
        </h2>

        <p>
          {props.restaurantDescription}
        </p>
        {props.inside}

        <Link
          className="button-black align-self-center grid-footer justify-self-center"
          style={{marginTop: '16px'}}
          to={props.link}
        >
          メニューへ
        </Link>
      </section>

    </>
  )
}
