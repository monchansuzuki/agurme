import React, {useEffect, useLayoutEffect, useState} from 'react';
import * as style from './menu-component.module.sass'
import {CSSTransition} from "react-transition-group";
import {dishType} from "../../pages/menu/index";
import {graphql, useStaticQuery} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

export type MyComponentProps = {
  menuTitle: string;
  menuImage: string;
  dish: dishType[];
}

export default function MenuComponent(props: MyComponentProps) {
  const [inState, setInState] = useState(false);

    const imagesData = useStaticQuery(graphql`
        query {
            bgImageData:
            allFile {
                nodes {
                    name
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: DOMINANT_COLOR
                            formats: [AUTO, WEBP, AVIF]
                            quality: 50
                            webpOptions: {quality: 80}
                            transformOptions: {cropFocus: NORTHWEST, fit: COVER}
                            blurredOptions: {toFormat: PNG, width: 10}
                            height: 400
                        )
                    }
                }
            }
            
           
        }
    `);
    const imageData = imagesData.bgImageData.nodes.find(node => node.name === props.menuImage);
  console.log(imageData);
    const image = getImage(imageData);

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

        <div className={style.imageWrapper}>

          <GatsbyImage image={image!} alt='bg'/>
        </div>

        {props.dish.map(
          (dish, i) => {
            return (<div key={i}>
              <p className={style.dishTitle}>{dish.dishName}</p>
              <p className={style.dishIngredient}>{dish.dishIngredient}</p>
            </div>)
          }
        )}


      </div>
    </CSSTransition>
  );
}
