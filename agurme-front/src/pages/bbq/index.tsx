import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BBQCardComponent from "../../components/BBQCardComponent/BBQCardComponent"
import BBQContactComponent from "../../components/BBQContactComponent/BBQContactComponent"
import * as style from "./bbq.module.sass"

const Bbq = ({ data }) => {
  const { bgImageData } = data
  const bgImage = getImage(bgImageData)

  return (
    <Layout>
      <div className={style.bgImage}>
        <GatsbyImage
          className="bg-img-header"
          image={bgImage!}
          alt="bg"
          backgroundColor="red"
        />
        <header>
          <h2>BBQ in 茅ヶ崎</h2>
        </header>
      </div>

      <div className={style.containerCenter}>
        <div className={style.container}>
          <p className={style.highlight}>
            茅ヶ崎の美しい環境の中で、美味しいものを食べて素敵な時間を過ごしましょう
          </p>

          <div className={style.priceContainer}>
            <span>値段</span>
            <ul>
              <li>BBQレンタル： 1名様￥2000〜</li>
              <li>食材セット： 1名様￥2500〜</li>
              <li>ドリンク： 1名様￥1000〜</li>
            </ul>
          </div>

          <div className={style.line} />

          <section>
            <h2>詳細</h2>

            <BBQCardComponent
              title={`BBQ 機材レンタル `}
              subTitle={`BBQ Equipments`}
            >
              <div className={style.menuContainer}>
                <p className={style.menuDescription}>
                  食材をお持ち込みされたいこだわり派のあなたにおすすめ。
                </p>
                <ul className={style.menuList}>
                  <li className={style.menuTitle}>グﾘル1台につき最大11名</li>
                  <li className={style.menuTitle}>椅子人数分貸出最大20名</li>
                  <li className={style.menuTitle}>炭</li>
                  <li className={style.menuTitle}>クーラーボックス1台</li>
                  <li className={style.menuTitle}>
                    食器類 紙皿/箸/おしぼり/プラコップ
                  </li>
                  <li className={style.menuTitle}>その他 テープ/手袋/ゴミ袋</li>
                </ul>

                <div className={style.menuPriceOne}>
                  1名様 <span className={style.tax}>税込 </span>
                  <span className={style.price}>2000円</span> <br />
                  4名様から受付
                </div>
                {/*  image */}
              </div>
            </BBQCardComponent>

            <h3 className={style.highlightNormal}>
              手ぶらで気軽にBBQを楽しみたいあなたにおすすめ！
            </h3>

            <BBQCardComponent
              title={`ビールサーバーレンタル`}
              subTitle={`Draft Beer Tap Tower & Barrels`}
            >
              <div className={style.flexColumnContainer}>
                <div className={style.menuItemDrink}>
                  <div>
                    <div className={style.menuTitle}>カルスバーグ 10L樽</div>
                    <div className={style.menuTitleEnglish}>
                      Carlsberg 10L樽
                    </div>
                  </div>
                  <div className={style.subMenuTitle}>
                    <span className={style.tax}>税込</span>
                    <span className={style.price}>13000円</span>
                  </div>
                </div>
                <div className={style.lineMenuHeader} />
                <div className={style.menuItemDrink}>
                  <div>
                    <div className={style.menuTitle}>カルスバーグ 20L樽</div>
                    <div className={style.menuTitleEnglish}>Carlsberg 20L</div>
                  </div>
                  <div className={style.subMenuTitle}>
                    <span className={style.tax}>税込</span>
                    <span className={style.price}>20000円</span>
                  </div>
                </div>
                {/*  image */}
              </div>
            </BBQCardComponent>

            <BBQCardComponent title={`食材セット`} subTitle={`BBQ FOOD`}>
              <div>
                <ul className={style.menuList}>
                  <li className={style.menuTitle}>
                    鶏肉250g （ジャークチキン。レモンソース）
                  </li>
                  <li className={style.menuTitle}>牛肉100g</li>
                  <li className={style.menuTitle}>豚肉100g</li>
                  <li className={style.menuTitle}>ソーセージ1本</li>
                  <li className={style.menuTitle}>野菜</li>
                </ul>

                <div className={style.menuPriceOne}>
                  1名様 <span className={style.tax}>税込 </span>
                  <span className={style.price}>税込2500円</span> <br />
                  4名様から受付
                </div>

                {/*  image */}
              </div>
            </BBQCardComponent>

            <BBQCardComponent title={`ドリンクセット`} subTitle={`DRINKS`}>
              <div>
                <ul className={style.menuList}>
                  <li className={style.menuTitle}>ビール２本</li>
                  <li className={style.menuTitle}>
                    チューハイ2本又はソフトドリンク2本（計4本セット）
                  </li>
                </ul>

                <div className={style.menuPriceOne}>
                  1名様 <span className={style.tax}>税込 </span>
                  <span className={style.price}>税込1000円</span> <br />
                  4名様から受付
                </div>
                {/*  image */}
              </div>
            </BBQCardComponent>
          </section>

          <div className={style.line} />

          <section>
            <h2>予約</h2>

            <BBQContactComponent />
          </section>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    bgImageData: file(relativePath: { eq: "bbq/bbq-bg.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP, AVIF]
          quality: 50
          webpOptions: { quality: 80 }
          transformOptions: { cropFocus: NORTHWEST, fit: COVER }
          blurredOptions: { toFormat: PNG, width: 10 }
          height: 400
        )
      }
    }
  }
`

export default Bbq
