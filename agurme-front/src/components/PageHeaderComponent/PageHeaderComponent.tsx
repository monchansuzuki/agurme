import React from "react"
import * as style from "./PageHeaderComponent.module.sass"

type PageHeaderComponentProps = {
  title: string
}

export function PageHeaderComponent(props: PageHeaderComponentProps) {
  return (
    <div className={style.container}>
      {props.title.split("　").map((letter, i) => (
        <span key={i}>{letter}</span>
      ))}
    </div>
  )
}
