import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image"

const Header = ({ location}) => {
  const {tabelog, hotpepper} = useStaticQuery(graphql`
    query Header{
      tabelog: file(relativePath: { eq: "tabelog.png" }) {
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
        hotpepper: file(relativePath: { eq: "hotpepper.jpeg" }) {
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
    }
  `)

  const hotpepperImg = getImage(hotpepper)

  const [isActive, setActive] = React.useState(false)
  return (
    <header className="top-nav">
      <Link to="/" className="logo">
        DIALLO
        <br />
        CORPORATION
      </Link>

      <div className="menu-container" onClick={() => setActive(!isActive)}>
        <div id="menu" className={`${isActive ? "active" : ""}`} />
      </div>
      <div className="link-reservation">
        <a
          href="https://www.hotpepper.jp/strJ001213017/yoyaku/hpds/?ROUTE_KBN=20"
          target="_blank"
        >
          予約をする
        </a>
      </div>

      <aside className={`sidebar ${isActive ? "active" : ""}`}>
        <div className="menu-items">
          {location && location.pathname.includes('pizza-osteria') && (<Link to="/pizza-osteria/menu" activeStyle={{color: "orange"}}>
            メニュー
          </Link>)
          }

          {location && location.pathname.includes('chigasaki-kitchen') && (<Link to="/chigasaki-kitchen/menu" activeStyle={{color: "orange"}}>
            メニュー
          </Link>)
          }
          <Link to="/restaurants" activeStyle={{ color: "orange" }}>
            レストラン
          </Link>
          <Link to="/bbq" activeStyle={{ color: "orange" }}>
            BBQ
          </Link>

          <Link to="/about" activeStyle={{ color: "orange" }}>
            ビージョン
          </Link>
        </div>

        <div className="reservation-container">
          <div className="reservation-container-header">
            <h1>予約</h1>
            <p className="sub-p">ご予約・お問い合わせはこちら</p>
          </div>

          <div className="tel-container">
            <div className="tel">
              <h2>チガサキッチン アグルメ駅前店</h2>
              <a href="tel:0467-58-2202" className="info">
                Tel: 0467-58-2202
              </a>
            </div>

            <div className="tel">
              <h2>茅ヶ崎 ピザ パスタ テイクアウト</h2>
              <a href="tel:0467-73-7712" className="info">
                Tel: 0467-73-7712
              </a>
            </div>

            <div className="place-item-center">
              <a
                className="button"
                href="https://www.hotpepper.jp/strJ001213017/yoyaku/hpds/?ROUTE_KBN=20"
              >
                ネット予約
              </a>
            </div>
          </div>

          <p className="footer">
            ご予算に合わせた宴会や貸切パーティーも承ります。
            お気軽にお問い合わせください。
          </p>


          <div className="container-icons">
            <a className="flex-center-2" href="https://www.instagram.com/agrume_chigasaki/?hl=ja" target="_blank">
              <StaticImage className="image-icon" src="../images/instagram.png" alt="bg"/>
              ←ココをタップしてフォローしてくれた方には1ドリンクサービス致します♪
            </a>
            <p className="flex-center-2">※店頭でインスタフォロー確認させていただきます。</p>
            <div className="flex-center-2">
              <a href="https://tabelog.com/kanagawa/A1404/A140406/14073722/" target="_blank">
                <StaticImage className="image-icon" src="../images/tabelog.png" alt="bg"/>
              </a>
              <a href="https://www.hotpepper.jp/strJ001213017/" target="_blank">
                <StaticImage className="image-icon" src="../images/hotpepper.png" alt="bg"/>
              </a>
            </div>


          </div>
        </div>

      </aside>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
