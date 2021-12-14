import React from 'react';
import Layout from "../../../components/layout";
import {getImage, StaticImage} from "gatsby-plugin-image";
import * as style from "./style.module.sass";
import RestaurantMainComponent from "../../../components/RestaurantMainComponent/RestaurantMainComponent";
import {graphql} from "gatsby";
import ImageGalleryComponent from "../../../components/ImagesGalleryComponent/ImageGalleryComponent";

function Index({location, data}) {
  const {umiImagesData} = data

  console.log(umiImagesData);


  const insideImages = umiImagesData.edges.map((item, i) => {
    console.log(item);
    const image = getImage(item.node.childImageSharp)
    const name = item.node.name
    return {
      data: image,
      alt: name,
    }
  })
  return (
    <Layout location={location}>

      <RestaurantMainComponent
        imgA={<StaticImage src="../../../images/chigaskichen.png" alt="bg image"/>}
        brandName={'ChigasaKitchen　AGRUME'}
        brandNameKana={`チガサキッチン・アグルメ`}
        bg={<StaticImage className={style.bgImage} src="../../../images/kitchen/bg.jpeg" alt="bg image"/>}
        inside={<ImageGalleryComponent images={insideImages}/>}
        restaurantDescription={<p>駅徒歩１分！＼＼ディナータイムは人気のマルゲリータ1枚サービスクーポンも有／／
          一中通りのPizzeria&Osteria AGRUMEの姉妹店♪
          500度の石窯で一気に焼き上げる本格ナポリピッツァが自慢！メインに魚介は平塚の漁港や鎌倉から直仕入れ、地元野菜や鎌倉で上がったタコなど現地食材をふんだんに使用。
          テラス席はペットもOK！ワンちゃんとお食事が楽しめます！
        </p>}
        link={`/restaurants/chigasaki-kitchen/menu`}
      />

    </Layout>
  );
}

export const query = graphql`
    query {
      umiImagesData: allFile(filter: { relativeDirectory: { eq: "kitchen/inside" } }) {
            edges {
                node {
                    name
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, height: 240)
                    }
                }
            }
        }
    }
`

export default Index;