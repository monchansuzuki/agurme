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
        imgA={<StaticImage src="../../../images/agurume.png" alt="bg image"/>}
        brandName={'Pizzeria&Osteria AGRUME'}
        brandNameKana={`ピッゼリ&アオステリア・アグルメ`}
        bg={<StaticImage className={style.bgImage} src="../../../images/umi/bg.jpg" alt="bg image"/>}
        inside={<ImageGalleryComponent images={insideImages}/>}
        restaurantDescription={<p>都内イタリア料理店やファイブスターホテルレストランで経験を積みそれぞれの技術を持ち合って湘南エリア茅ケ崎に本格カジュアルイタリアンを初出店！
          500度の石窯で一気に焼き上げる本格ピッツァをメインに魚介は平塚の漁港や鎌倉から直仕入れ、地元野菜や鎌倉で上がったタコなど現地食材をふんだんに使用。
          ご家族連れやご宴会、パーティーなどもお気軽にご利用ください。
          お車でお越しのお客様は駐車場ございます。</p>}
        link={`/restaurants/pizza-osteria/menu`}
      />

    </Layout>
  );
}

export const query = graphql`
    query {
      umiImagesData: allFile(filter: { relativeDirectory: { eq: "umi/inside" } }) {
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