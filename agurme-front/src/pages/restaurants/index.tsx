import * as React from "react"
import {useState} from "react"
import Layout from "../../components/layout"
import { navigate } from "gatsby"

import {graphql, Link} from "gatsby"
import {getImage} from "gatsby-plugin-image"
import ModalComponent from "../../components/ModalComponent/ModalComponent"
import {ClickableImageComponent} from "../../components/ClickableImageComponent/ClickableImageComponent"
import {PageHeaderComponent} from "../../components/PageHeaderComponent/PageHeaderComponent"

const Index = ({data, location}) => {
  const {
    umimaeImgData,
    ekimaeImgData,
  } = data
  const umimaeImage = getImage(umimaeImgData)
  const ekimaeImg = getImage(ekimaeImgData)

  const [openModal, setOpenModal] = useState(false)

  return (
    <Layout location={location}>
      {openModal && (
        <ModalComponent onClose={() => setOpenModal(false)}>
          <div>Hello</div>
        </ModalComponent>
      )}

      <PageHeaderComponent title={`Restaurants`}/>


      <div className="center-paraf">

        私たちは、その街に足りないものとは何か。
        また、他が真似できない新しい業態の在り方とは何か、ということを常に考え、
        食を通して文化を変えるために、レストラン事業を展開しています。
      </div>

      <div className="center-el margin-btn">
        <Link className="button" to="/about">
          ビージョンへ
        </Link>
      </div>

      <div className="short-line"/>

      <div className="section-wrapper space-bet margin-top">

        <h2
          className="align-self-end title-right grid-header justify-self-end"
          data-sal="slide-up"
          data-sal-duration="300"
          data-sal-delay="5"
          data-sal-easing="easeOutQuint"
          style={{right: "0"}}
        >
          <div className="sub-title">ブランド</div>
          <div className="primary-title">Our Brand</div>
        </h2>


        <div
          className="container-flex "
          style={{gap: "4px", flexWrap: "nowrap", marginTop: "32px"}}
        >
          <ClickableImageComponent
            onClick={() => navigate('/restaurants/chigasaki-kitchen')}
            image={ekimaeImg!}
            text={`駅前店`}
          />
          <ClickableImageComponent
            onClick={() => navigate('/restaurants/pizza-osteria')}
            image={umimaeImage!}
            text={`本店`}
          />
        </div>
      </div>


    </Layout>
  )
}

export const query = graphql`
  query {
    umimaeImgData: file(relativePath: { eq: "restaurants/umimae.jpeg" }) {
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
    ekimaeImgData: file(relativePath: { eq: "restaurants/ekimae.jpeg" }) {
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

export default Index
