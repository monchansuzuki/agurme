import * as React from "react"
import Layout from "../components/layout"
import {graphql, Link} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {Helmet} from "react-helmet"
import ImageGalleryComponent from "../components/ImagesGalleryComponent/ImageGalleryComponent"

const IndexPage = ({data}) => {
  // images
  const {
    bgImageData,
    imageRestaurantData,
    menuImagesData,
    profile1,
    profile2,
    profile3,
    chigsakiBBQData,
  } = data
  const bgImage = getImage(bgImageData)
  const imageRestaurant = getImage(imageRestaurantData)
  const bbqImage = getImage(chigsakiBBQData)
  const profile1Img = getImage(profile1)
  const profile2Img = getImage(profile2)
  const profile3Img = getImage(profile3)

  // restaurant ImageGallery

  // menu

  const menuData = menuImagesData.edges.sort(
    (a, b) =>
      a.node.name.replace(/[^0-9\.]+/g, "") -
      b.node.name.replace(/[^0-9\.]+/g, "")
  )
  const menuImages = menuData.map((item, i) => {
    const image = getImage(item.node.childImageSharp)
    const name = item.node.name.replace(/\d+/g, "")
    return {
      data: image,
      alt: name,
    }
  })
  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: "jp",
        }}
      >
        <meta charSet="utf-8"/>
        <title>茅ヶ崎アグルメ</title>
        <link rel="canonical" href="http://mysite.com/example"/>
      </Helmet>

      {/*WELCOME*/}
      <section className="bg-img-container">
        <GatsbyImage className="bg-img-header" image={bgImage!} alt="bg"/>
        <p
          className="welcome-message"
          data-sal="zoom-in"
          data-sal-duration="400"
          data-sal-delay="5"
          data-sal-easing="easeOutQuint"
        >
          湘南穴場 <br/>
          <span className="highlight">カジュアルイタリアン</span>
        </p>

        <div className="scroll">
          <span>SCROLL</span>
        </div>
      </section>

      {/*RESTAURANT*/}
      <section style={{marginTop: "104vh"}} className="flex-column section-1">
        <div className="section-wrapper">
          <h2
            className="align-self-end title-right grid-header justify-self-end"
            data-sal="slide-up"
            data-sal-duration="300"
            data-sal-delay="5"
            data-sal-easing="easeOutQuint"
            style={{right: "0"}}
          >
            <div className="sub-title">雰囲気</div>
            <div className="primary-title">Atmosphere</div>
          </h2>

          <div
            className="paragraph-body grid-right"
            data-sal="slide-down"
            data-sal-duration="300"
            data-sal-delay="5"
            data-sal-easing="easeOutQuint"
          >
            <p>
              都内イタリア料理店や五つ星 ホテルレストランで経験を積んだ3人が、それぞれの技術を持ち寄って湘南エリア茅ケ崎に本格カジュアル
              イタリアンを初出店！500度の石窯で一気に焼き上げる本格ピッツァをメインに、魚介は平塚の漁港や鎌倉から直仕入れ、地元野菜や鎌倉で上が
              ったタコなど現地食材をふんだんに使用。
            </p>
            <p>
              料理は本格派ですが、スタッフとお客様の距離が近いカジュアルイタリアン料理店です。
            </p>
          </div>
          <Link
            className="button-black align-self-center grid-footer justify-self-center"
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
            <GatsbyImage
              className="grid-1-4"
              image={imageRestaurant!}
              alt="bg"
            />
          </div>
        </div>
      </section>

      {/*MENU*/}
      <section className="flex-column container bg-dark section-1">
        <div className="section-wrapper">
          <h2 className=" align-self-end title-right grid-header" style={{marginRight: '16px'}}>
            <div className="sub-title">フード</div>
            <div className="primary-title">Food</div>
          </h2>

          <div className="grid-left">

            <div className="flex-hori">
              <div className="flex-veri">
                <GatsbyImage className="image-profile" image={profile1Img!} alt="image1"/>
                <span className="profile-name">Shokichさん</span>
              </div>
              <figure className="quote">
                <blockquote>
                  <span>“</span>
                  アグルメ名物の「レモンクリームソース」パスタがとっても美味しい！！<br/>
                  サイドメニューもおいしく、お酒に合う！！夜はテラス席でお酒と雰囲気を楽しめます♪
                  <span>“</span>
                </blockquote>
              </figure>
            </div>

            <div className="flex-hori">
              <div className="flex-veri">
                <GatsbyImage className="image-profile" image={profile2Img!} alt="image1"/>
                <span className="profile-name">ピザ大好きパパさん</span>
              </div>
            <figure className="quote">
              <blockquote>
                <span>“</span>
                定番ピザの「マルゲリータ」と「マーレ」「フンギ　ポルチーニ」がおすすめ！！<br/>
                天気が悪い日や仕事で疲れた日はデリバリーやテイクアウト頼めて便利です♪<br/>
                休日には家族や仲間とBBQレンタルをしてBBQが楽しめるのもおすすめです。
                <span>“</span>
              </blockquote>
            </figure>
            </div>

            <div className="flex-hori">
              <div className="flex-veri">
                <GatsbyImage className="image-profile" image={profile3Img!} alt="image1"/>
                <span className="profile-name">チーズ大好きさん</span>
              </div>
            <figure className="quote">
              <blockquote>
                <span>“</span>
                「クアトロフォルマッジ」は3種類の <br/>
                チーズをふんだんに使用しているのでチーズ好きにはオススメです！！<br/>
                他にも「フンギ　ポルチーニ」や「チチニエリ」も海や山の素材を楽しめてオススメです。
                <span>“</span>
              </blockquote>
            </figure>
            </div>
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
        </div>
      </section>

      {/*BBQ*/}
      <section className="flex-column container section-1">
        <div className="section-wrapper">
          <h2 className="align-self-end title-right grid-header justify-self-end">
            <div className="sub-title">BBQレンタル</div>
            <div className="primary-title">BBQ Rental</div>
          </h2>

          <div
            className="paragraph-body grid-right"
            data-sal="slide-down"
            data-sal-duration="300"
            data-sal-delay="5"
            data-sal-easing="easeOutQuint"
            style={{backgroundColor: "white", padding: "1rem"}}
          >
            <p>茅ヶ崎ヘッドランドでBBQを楽しみたい方必見！</p>
            <p>
              当店ではBBQの機材レンタルはもちろん、食材・ドリンクも
              全部込みの完全手ぶらプランもご用意！<br/>
              お客様に楽しんで頂けるBBQを提供致します。
            </p>
          </div>

          <div
            className="grid-left"
            data-sal="slide-down"
            data-sal-duration="300"
            data-sal-delay="5"
            data-sal-easing="easeOutQuint"
          >
            <GatsbyImage style={{filter: 'brightness(1.4)'}} className="grid-1-3" image={bbqImage!} alt="bg"/>
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
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
    query {
        bgImageData: file(relativePath: { eq: "background-home.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: { quality: 80 }
                    transformOptions: { cropFocus: NORTHWEST, fit: COVER }
                    blurredOptions: { toFormat: PNG, width: 10 }
                    height: 700
                )
            }
        }
        imageRestaurantData: file(relativePath: { eq: "image-restaurant.png" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: { quality: 80 }
                    transformOptions: { cropFocus: NORTHWEST, fit: COVER }
                    blurredOptions: { toFormat: PNG, width: 10 }
                )
            }
        }
        chigsakiBBQData: file(relativePath: { eq: "bbq/bbq.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: { quality: 80 }
                    transformOptions: { cropFocus: NORTHWEST, fit: COVER }
                    blurredOptions: { toFormat: PNG, width: 10 }
                )
            }
        }
        backgroundBBQData: file(relativePath: { eq: "bbq/bbq.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: { quality: 80 }
                    transformOptions: { cropFocus: NORTHWEST, fit: COVER }
                    blurredOptions: { toFormat: PNG, width: 10 }
                )
            }
        }
        profile1: file(relativePath: { eq: "profiles/profile1.jpeg" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: { quality: 80 }
                    transformOptions: { cropFocus: NORTHWEST, fit: COVER }
                    blurredOptions: { toFormat: PNG, width: 10 }
                )
            }
        }
        profile2: file(relativePath: { eq: "profiles/profile2.jpeg" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: { quality: 80 }
                    transformOptions: { cropFocus: NORTHWEST, fit: COVER }
                    blurredOptions: { toFormat: PNG, width: 10 }
                )
            }
        }
        profile3: file(relativePath: { eq: "profiles/profile3.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: { quality: 80 }
                    transformOptions: { cropFocus: NORTHWEST, fit: COVER }
                    blurredOptions: { toFormat: PNG, width: 10 }
                )
            }
        }
        menuImagesData: allFile(filter: { relativeDirectory: { eq: "menus" } }) {
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
`

export default IndexPage
