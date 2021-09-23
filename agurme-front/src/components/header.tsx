import * as React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"


const Header = () => {
  const [isActive, setActive] = React.useState(false);
  return (
    <header className="top-nav">


      <Link to="/" className="logo">
        DIALLO
        <br/>
        CORPORATION
      </Link>

      <div className="menu-container" onClick={() => setActive(!isActive)}>
        <div id="menu" className={`${isActive ? 'active' : ''}`}/>
      </div>
      <div className="link-reservation">
        <Link to="">Reservation</Link>
      </div>


      <aside className={`sidebar ${isActive ? 'active' : ''}`}>

        <div className="menu-items">
          <Link to="/menu" activeStyle={{color: "orange"}}>Menu</Link>
          <Link to="/restaurants" activeStyle={{color: "orange"}}>Restaurant</Link>
          <Link to="/bbq" activeStyle={{color: "orange"}}>BBQ</Link>
        </div>

        <div className="reservation-container">

          <div className="reservation-container-header">
            <h1>Reserve</h1>
            <p className="sub-p">ご予約・お問い合わせはこちら</p>
          </div>


          <div className="tel-container">
            <div className="tel">
              <h2>チガサキッチン アグルメ駅前店</h2>
              <a href="tel:0467-58-2202" className="info">Tel: 0467-58-2202</a>
            </div>

            <div className="tel">
              <h2>茅ヶ崎 ピザ パスタ テイクアウト</h2>
              <a href="tel:0467-73-7712" className="info">Tel: 0467-73-7712</a>
            </div>

            <div className="place-item-center">
              <a className="button" href="https://www.hotpepper.jp/strJ001213017/yoyaku/hpds/?ROUTE_KBN=20">
                ネット予約
              </a>
            </div>
          </div>


          <p className="footer">
            ご予算に合わせた宴会や貸切パーティーも承ります。
            お気軽にお問い合わせください。
          </p>
        </div>

      </aside>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
