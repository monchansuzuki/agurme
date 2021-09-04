import React from 'react';
import * as style from "./SectionHeaderComponent.module.sass";

type SectionHeaderComponentProps = {
  title: string;
  titleSub?: string;
}

export function SectionHeaderComponent(props: SectionHeaderComponentProps) {
  return (
    <div className={style.title}>
      <h2>{props.title}</h2>
    </div>
  );
}

