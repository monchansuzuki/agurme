import * as React from "react"
import Layout from "../components/layout"
// @ts-ignore
import agurmeLogoBlack from "../images/agurme_logo_black.svg"
// @ts-ignore
import agurmeLogoWhite from "../images/agurme_logo_white.svg"

import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"


const IndexPage = ({data}) => {
  const {bgImageData} = data;
  const bgImage = getImage(bgImageData);
  const bodyRef = React.useRef<any>(null);

  const [bodyDimension, setBodyDimension] = React.useState({top:0, bottom: 0});


  React.useLayoutEffect(() => {
    if (bodyRef.current) {
      setBodyDimension(bodyRef.current.getBoundingClientRect());
    }
    console.log(bodyDimension);
  }, []);
  return (
    <Layout>

    </Layout>
  );
};

export const query = graphql`
    query {
        bgImageData: file(relativePath: {eq: "bg_1.png"}) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: {quality: 80}
                    transformOptions: {}
                    blurredOptions: {toFormat: PNG, width: 10}
                )
            }
        }
    }
`;

export default IndexPage
