import React, {useLayoutEffect, useState} from "react"
import * as style from "./menu-component.module.sass"
import {CSSTransition} from "react-transition-group"
import {dishType} from "../../pages/menu/index"
import {graphql, useStaticQuery} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import ImageGalleryComponent from "../ImagesGalleryComponent/ImageGalleryComponent";

export type MyComponentProps = {
  menuTitle: string
  menuImage: string
  relativeDirectory: string
  dish: dishType[]
}

export default function MenuComponent(props: MyComponentProps) {
  const [inState, setInState] = useState(false)

  const imagesData = useStaticQuery(graphql`
  query {
  images: allFile(
    filter: {relativePath: {}, relativeDirectory: {glob: "*foods/*"}}
  ) {
    nodes {
      name
      relativeDirectory
      relativePath
      childImageSharp {
        gatsbyImageData(aspectRatio: 1.5, formats: JPG, tracedSVGOptions: {}, height: 240)
      }
    }
  }
}
  `)
  console.log(imagesData);
  const imagesDatas = imagesData.images.nodes.filter(
    node => node.relativeDirectory === props.relativeDirectory
  ).map(node => ({
    data: getImage(node.childImageSharp),
    alt: 'sdsd'
  }))

  console.log(imagesDatas);
  useLayoutEffect(() => {
    setInState(true)
  })

  return (
    <CSSTransition
      in={inState}
      timeout={3000}
      classNames={{
        enter: style.containerEnter,
        enterActive: style.containerEnterActive,
        exit: style.containerExit,
        exitActive: style.containerExitActive,
      }}
    >
      <div className={style.container}>
        <div className={style.imageWrapper}>
         <ImageGalleryComponent images={imagesDatas}/>
        </div>

        {props.dish.map((dish, i) => {
          return (
            <div className={style.dishContainer} key={i}>
              <p className={style.dishTitle}>{dish.dishName}</p>
              <p className={style.dishIngredient}>{dish.dishIngredient}</p>
            </div>
          )
        })}
      </div>
    </CSSTransition>
  )
}
