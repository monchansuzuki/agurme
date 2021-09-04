import React from 'react';
import * as style from './PageHeaderComponent.module.sass'

type PageHeaderComponentProps = {
  title: string;
}

export function PageHeaderComponent(props: PageHeaderComponentProps) {
  return (
    <div className={style.container}>
        { props.title.split('').map( (letter) => <span>{letter}</span>) }

    </div>
  );
}

