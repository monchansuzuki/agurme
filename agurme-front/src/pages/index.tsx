import * as React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { Helmet } from "react-helmet"
import ImageGalleryComponent from "../components/ImagesGalleryComponent/ImageGalleryComponent";


const IndexPage = ({data}) => {

  // images
  const {bgImageData, imageRestaurantData, menuImagesData, backgroundBBQData, chigsakiBBQData} = data;
  const bgImage = getImage(bgImageData);
  const imageRestaurant = getImage(imageRestaurantData);
  const bbqImage = getImage(chigsakiBBQData);
  const bbqBg = getImage(backgroundBBQData);


  // restaurant ImageGallery
  
  // menu

  const menuData = menuImagesData.edges.sort((a, b) => a.node.name.replace(/[^0-9\.]+/g, "") - b.node.name.replace(/[^0-9\.]+/g, ""));
  const menuImages = menuData.map((item, i) => {
      const image = getImage(item.node.childImageSharp);
      const name = item.node.name.replace(/\d+/g, "");
      return {
        data: image,
        alt: name,
      }
    }
  );
  return (
    <Layout>
      <Helmet  htmlAttributes={{
        lang: 'jp',
      }}>
        <meta charSet="utf-8" />
        <title>茅ヶ崎アグルメ</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {/*WELCOME*/}
      <section
        className="bg-img-container"
      >
        <GatsbyImage className="bg-img-header" image={bgImage!} alt='bg'/>
        <p
          className="welcome-message"
          data-sal="zoom-in"
          data-sal-duration="400"
          data-sal-delay="5"
          data-sal-easing="easeOutQuint"
        >
          More than a Beach
          <span className="highlight">Restaurant</span>
        </p>
      </section>

      {/*RESTAURANT*/}
      <section
        style={{marginTop: '104vh'}}
        className="flex-column section-1"
      >

        <h2
          className="align-self-end title-right grid-header justify-self-end"
          data-sal="slide-up"
          data-sal-duration="300"
          data-sal-delay="5"
          data-sal-easing="easeOutQuint"
          style={{right: '0'}}>Atmosphere</h2>

        <div
          className="paragraph-body grid-right"
          data-sal="slide-down"
          data-sal-duration="300"
          data-sal-delay="5"
          data-sal-easing="easeOutQuint"
        >
          <p>
            都内イタリア料理店やファイブスターホテルレストランで経験を積んだ3人が、それぞれの技術を持ち寄って湘南エリア茅ケ崎に本格カジュアル
            イタリアンを初出店！500度の石窯で一気に焼き上げる本格ピッツァをメインに、魚介は平塚の漁港や鎌倉から直仕入れ、地元野菜や鎌倉で上が
            ったタコなど現地食材をふんだんに使用。
          </p>
          <p>
            料理は本格派ですが、スタッフとお客様の距離が近いカジュアルなイタリアンです。
          </p>
        </div>
        <Link
          className="button-black align-self-end grid-footer justify-self-end"
          to="/restaurants"
          data-sal="slide-up"
          data-sal-duration="300"
          data-sal-delay="5"
          data-sal-easing="easeOutQuint"
        >
          More
        </Link>
        <div
          className="grid-left"
          data-sal="slide-down"
          data-sal-duration="300"
          data-sal-delay="5"
          data-sal-easing="easeOutQuint"
        >
          <GatsbyImage className="grid-1-4" image={imageRestaurant!} alt='bg'/>

        </div>
      </section>

      {/*MENU*/}
      <section
        className="flex-column container bg-dark section-1"
      >
        <h2 className="title-left grid-header">Food</h2>

        <div className="grid-left">
          <figure>
            <blockquote>
              <span>“</span>
              どの料理も美味しく、店の雰囲気も良くまた訪れたい店です。
              <span>“</span>
            </blockquote>
            <figcaption>— バイクまこちゃん</figcaption>
          </figure>

          <figure>
            <blockquote>

              <span>“</span>
              ランチがオススメ！お得なピザかパスタにデザート、ドリンク、プラスメインが付くコースもあり。
              とにかくピザが美味しい❗️
              蜂蜜とチーズのフォルマッジと、ピリ辛のサルシッチャが最高
              <span>“</span>
            </blockquote>
            <figcaption>— Miho “ママブー”</figcaption>
          </figure>

          <figure>
            <blockquote>
              <span>“</span>
              夜にテイクアウトして家で食べてみました。マルゲリータ、美味しかったです。
              あとクワトロフォルマッジエミエーレはゴルゴンゾーラ、モッツエラなどに別カップでハチミツがついていてこれもまた美味しかった。
              とってもおすすめです。
              <span>“</span>
            </blockquote>
            <figcaption>— 康成</figcaption>
          </figure>
        </div>

        <ul className="container-flex grid-right">
          <ImageGalleryComponent images={menuImages}/>
        </ul>
        <Link
          className="button-white align-self-center grid-footer justify-self-center"
          to="/menu"
        >
          More
        </Link>
      </section>

      {/*BBQ*/}
      <section
        className="flex-column container section-1"
      >
        <h2 className="title-right grid-header justify-self-end">BBQレンタル</h2>

        <div
          className="paragraph-body grid-right"
          data-sal="slide-down"
          data-sal-duration="300"
          data-sal-delay="5"
          data-sal-easing="easeOutQuint"
          style={{backgroundColor: 'white', padding: '1rem'}}
        >
          <p>
            茅ヶ崎ヘッドランドでBBQを楽しみたい方必見！
          </p>
          <p>
            当店ではBBQの機材レンタルはもちろん、食材・ドリンクも
            全部込みの完全手ぶらプランもご用意！お客様の夏を盛り上げます。
            料理は本格派ですが、スタッフとお客様の距離が近いカジュアルなイタリアンです。
          </p>

        </div>

        <GatsbyImage
          className="bg-img-menu"
          image={bbqBg!}
          alt='bg'
        />

        <div
          className="grid-left"
          data-sal="slide-down"
          data-sal-duration="300"
          data-sal-delay="5"
          data-sal-easing="easeOutQuint"
        >
          <GatsbyImage className="grid-1-3" image={bbqImage!} alt='bg'/>

        </div>

        <Link
          className="button-black align-self-center grid-footer justify-self-end"
          to="/bbq"
          data-sal="slide-left"
          data-sal-duration="300"
          data-sal-delay="5"
          data-sal-easing="easeOutQuint"
        >
          More
        </Link>
      </section>
    </Layout>
  );
};

export const query = graphql`
    query {
        bgImageData: file(relativePath: {eq: "background-home.jpeg"}) {
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
        imageRestaurantData: file(relativePath: {eq: "image-restaurant.png"}) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: {quality: 80}
                    transformOptions: {cropFocus: NORTHWEST, fit: COVER}
                    blurredOptions: {toFormat: PNG, width: 10}
                )
            }
        }
        chigsakiBBQData: file(relativePath: {eq: "bbq/chigasaki.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: {quality: 80}
                    transformOptions: {cropFocus: NORTHWEST, fit: COVER}
                    blurredOptions: {toFormat: PNG, width: 10}
                )
            }
        }
        backgroundBBQData: file(relativePath: {eq: "bbq/bbq-home-bg.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: {quality: 80}
                    transformOptions: {cropFocus: NORTHWEST, fit: COVER}
                    blurredOptions: {toFormat: PNG, width: 10}
                )
            }
        }
        menuImagesData: allFile(filter: {relativeDirectory: {eq: "menus"}}) {
            edges {
                node {
                    name
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, quality: 80)
                    }
                }
            }
        }
    }
`;

export default IndexPage
