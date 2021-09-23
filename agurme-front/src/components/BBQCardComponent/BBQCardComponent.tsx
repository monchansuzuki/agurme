import React from 'react';
import * as style from './bbq-card-component.module.sass'


export type MyComponentProps = {
  title: string;
  subTitle?: string;
  children?: JSX.Element;
}

export default function BBQCardComponent(props: MyComponentProps) {

  return (

    <div className={style.container}>
      <h2>{props.title}</h2>
      <h3>{props.subTitle}</h3>
      <div className={style.box}>
        {props.children}
      </div>
    </div>
  );
}
