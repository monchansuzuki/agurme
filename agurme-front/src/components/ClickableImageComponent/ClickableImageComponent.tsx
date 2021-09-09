import React from 'react';
import * as style from './ClickableImageComponentStyle.module.sass'
import {IGatsbyImageData} from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";
import {GatsbyImage} from "gatsby-plugin-image";


type ClickableImageComponentProps = {
  image: IGatsbyImageData;
  text: string;
  onClick: () => void;
}

export function ClickableImageComponent(props: ClickableImageComponentProps) {
  return (
    <div onClick={() => props.onClick()}>
      <GatsbyImage image={props.image} alt='bg'/>

      <p>{props.text}</p>
    </div>
  );
}

