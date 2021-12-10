import React from 'react';
import Layout from "../../components/layout";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {graphql, Link} from "gatsby";
import {PageHeaderComponent} from "../../components/PageHeaderComponent/PageHeaderComponent";

function Index({data, location}) {
  const {
    pizzaGuyImgData,
    barmanImgData,
    dialoImgData,
  } = data
  const pizzaGuyImg = getImage(pizzaGuyImgData)
  const barmanImg = getImage(barmanImgData)
  const dialoImg = getImage(dialoImgData)

  return (
    <Layout location={location}>
      <PageHeaderComponent title={`Vision`} />

      <section
        className="section-1"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="section-wrapper">
          <div className="section-body">
            <GatsbyImage className="section-img" image={barmanImg!} alt="bg" />
            <article className="section-article">
              <h2 className="header-2">Our story</h2>
              都内イタリア料理店や五つ星のホテルレストランで経験を積んだ2人が、
              それぞれの技術を持ち寄って湘南エリア茅ケ崎に本格カジュアルイタリアンを初出店！500度の石窯で一気に焼き上げる本格ピッツァをメインに、
              魚介は平塚の漁港や鎌倉から直仕入れ、地元野菜や鎌倉で上がったタコなど現地食材をふんだんに使用。
              料理は本格派ですが、スタッフとお客様の距離が近いカジュアルなイタリアンです。
            </article>
          </div>

          <GatsbyImage
            className="img-container"
            image={pizzaGuyImg!}
            alt="bg"
          />

          <div className="section-body-2">
            <GatsbyImage
              className="section-img-left"
              image={dialoImg!}
              alt="bg"
            />
            <article className="section-article-right">
              <h2 className="header-2 ">Our Vision</h2>
              アグルメは、人を愛する心と、家庭的な雰囲気の中で素晴らしい料理と飲み物、そして最高のサービスを楽しむことができるレストランを作りたいというビジョンから生まれました。
            </article>
          </div>
        </div>
      </section>

      <div className="center-el margin-btn">
        <Link className="button" to="/restaurants">
          レストランへ
        </Link>
      </div>
    </Layout>
  );
}


export const query = graphql`
  query {
    pizzaGuyImgData: file(relativePath: { eq: "restaurants/pizza-guy.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          quality: 50
          webpOptions: { quality: 80 }
          transformOptions: {}
          blurredOptions: { toFormat: PNG, width: 10 }
        )
      }
    }
    barmanImgData: file(relativePath: { eq: "restaurants/barman.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          quality: 50
          webpOptions: { quality: 80 }
          transformOptions: {}
          blurredOptions: { toFormat: PNG, width: 10 }
        )
      }
    }
    dialoImgData: file(relativePath: { eq: "restaurants/dialo.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          quality: 50
          webpOptions: { quality: 80 }
          transformOptions: {}
          blurredOptions: { toFormat: PNG, width: 10 }
        )
      }
    }
  }
`


export default Index;