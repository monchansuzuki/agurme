import React, { useEffect, useState } from "react"
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import { GatsbyImage } from "gatsby-plugin-image"
import * as style from "./ImageGalleryComponentStyle.module.sass"

export type ImageItem = {
  data: IGatsbyImageData
  alt: string
}

export type ImageGalleyProps = {
  images: ImageItem[]
}

export default function ImageGalleryComponent(props: ImageGalleyProps) {
  const [index, setIndex] = useState(1)

  const [pause, setPause] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (pause) {
        return
      }

      if (index == props.images.length) {
        setIndex(1)
      } else {
        setIndex(index + 1)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [index])

  return (
      <div className={style.sliderWrapper}>
        {props.images.map((image, i) => {
          return (
            <div
              key={i}
              className={style.slide}
              style={{ opacity: index == i + 1 ? 1 : 0 }}
            >
              <GatsbyImage image={image.data} alt={image.alt} style={{maxHeight: '100%'}}/>
            </div>
          )
        })}
      </div>
  )
}
