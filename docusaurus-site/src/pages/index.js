import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import ImageGallery from "react-image-gallery";
import titleImage from "../../static/img/Simone_Kay_Stained_Glass_Logo_white_text_transparent.png";

import slider1 from "../../static/img/home/slider-1.jpg";
import slider2 from "../../static/img/home/slider-2.jpg";
import slider3 from "../../static/img/home/slider-3.jpg";
import slider4 from "../../static/img/home/slider-4.jpg";
import slider5 from "../../static/img/home/slider-5.jpg";
import slider6 from "../../static/img/home/slider-6.jpg";
import slider7 from "../../static/img/home/slider-7.jpg";

const images = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
].map((img) => ({
  original: img,
  originalHeight: 500,
  originalAlt: `photograph of stained glass window`,
}));

function MyGallery() {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      autoPlay={true}
      showFullscreenButton={false}
    />
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.description}>
      <main style={{ marginBottom: "2rem" }}>
        <div className={clsx("container", styles.heroBanner)}>
          <div className="row">
            <div className={clsx("col", "col--7")}>
              <div className={clsx("hero", "hero--primary", styles.hero)}>
                <div className="container">
                  <h1 className="hero__title">
                    <img src={titleImage} alt={siteConfig.title} />
                  </h1>
                  <p>
                    Simone Kay Stained Glass is a company based in Kingston upon
                    Thames.
                  </p>
                  <p>
                    Stained glass panels are made to order using traditional,
                    medieval techniques including etching, sand-blasting and
                    kiln firing.
                  </p>
                  <p>
                    Hand painted and fired panels often incorporate the use of
                    silver stain, from where the term "stained glass"
                    originates.
                  </p>
                  <p>
                    Top quality service from design right through to
                    installation.
                  </p>
                </div>
              </div>
            </div>
            <div className={clsx("col", "col--5", "hero-primary")}>
              <MyGallery />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
